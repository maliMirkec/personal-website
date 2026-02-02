import fs from 'fs';
import YAML from 'js-yaml';
import * as cheerio from 'cheerio';

const MASTODON_PATTERNS = [
  /https?:\/\/(mastodon\.social|fosstodon\.org|hachyderm\.io|front-end\.social|indieweb\.social|toot\.cafe|mas\.to|mstdn\.social|mastodon\.online|social\.coop|techhub\.social)\/(@[\w]+)/i,
  /https?:\/\/[\w.-]+\/@[\w]+/i
];

const BLUESKY_PATTERNS = [
  /https?:\/\/bsky\.app\/profile\/([\w.-]+)/i
];

const getLatestFile = () => {
  const dir = './site/side-projects/ui-dev-newsletter';
  const ignoreFilenames = ['admin', 'archive.md', 'confirmation.md', 'contact.md', 'index.md', 'sponsorship.md'];

  const filenames = fs.readdirSync(dir);
  const latestFile = filenames.filter(file => ignoreFilenames.indexOf(file) == -1).pop();
  const latest = fs.readFileSync(`${dir}/${latestFile}`, 'utf8');

  console.log(`Reading: ${dir}/${latestFile}\n`);
  return YAML.loadAll(latest)[0];
};

const extractDomain = (url) => {
  try {
    const parsed = new URL(url);
    return `${parsed.protocol}//${parsed.host}`;
  } catch {
    return null;
  }
};

const findSocialLinks = (html, baseUrl) => {
  const $ = cheerio.load(html);
  const links = [];

  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (href) {
      links.push(href);
    }
  });

  $('a[rel="me"]').each((_, el) => {
    const href = $(el).attr('href');
    if (href) {
      links.push(href);
    }
  });

  let mastodon = null;
  let bluesky = null;

  for (const link of links) {
    if (!mastodon) {
      for (const pattern of MASTODON_PATTERNS) {
        const match = link.match(pattern);
        if (match) {
          mastodon = link;
          break;
        }
      }
    }

    if (!bluesky) {
      for (const pattern of BLUESKY_PATTERNS) {
        const match = link.match(pattern);
        if (match) {
          bluesky = link;
          break;
        }
      }
    }

    if (mastodon && bluesky) break;
  }

  return { mastodon, bluesky };
};

const formatMastodonHandle = (url) => {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    const username = parsed.pathname.replace(/^\//, '').replace(/\/$/, '');
    return `${username}@${parsed.host}`;
  } catch {
    return url;
  }
};

const formatBlueskyHandle = (url) => {
  if (!url) return null;
  const match = url.match(/https?:\/\/bsky\.app\/profile\/([\w.-]+)/i);
  if (match) {
    const handle = match[1];
    return handle.includes('.') ? `@${handle}` : `@${handle}.bsky.social`;
  }
  return url;
};

const fetchWithTimeout = async (url, timeout = 10000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SocialHandleFinder/1.0)'
      }
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
};

const findHandlesForUrl = async (articleUrl) => {
  let mastodon = null;
  let bluesky = null;

  try {
    const response = await fetchWithTimeout(articleUrl);
    if (response.ok) {
      const html = await response.text();
      const found = findSocialLinks(html, articleUrl);
      mastodon = found.mastodon;
      bluesky = found.bluesky;
    }
  } catch (error) {
    console.log(`  ⚠ Could not fetch article: ${error.message}`);
  }

  if (!mastodon || !bluesky) {
    const domain = extractDomain(articleUrl);
    if (domain && domain !== articleUrl) {
      try {
        const response = await fetchWithTimeout(domain);
        if (response.ok) {
          const html = await response.text();
          const found = findSocialLinks(html, domain);
          if (!mastodon) mastodon = found.mastodon;
          if (!bluesky) bluesky = found.bluesky;
        }
      } catch (error) {
        console.log(`  ⚠ Could not fetch domain: ${error.message}`);
      }
    }
  }

  return {
    mastodon: formatMastodonHandle(mastodon),
    bluesky: formatBlueskyHandle(bluesky)
  };
};

const main = async () => {
  const latest = getLatestFile();

  console.log(`Issue: ${latest.title}`);
  console.log(`Date: ${latest.date}`);
  console.log(`\nSearching for social handles...\n`);
  console.log('='.repeat(60));

  const results = [];

  for (const item of latest.list) {
    console.log(`\n📄 ${item.title}`);
    console.log(`   ${item.link}`);

    const handles = await findHandlesForUrl(item.link);

    const result = {
      title: item.title,
      link: item.link,
      ...handles
    };
    results.push(result);

    if (handles.mastodon) {
      console.log(`   🐘 Mastodon: ${handles.mastodon}`);
    }
    if (handles.bluesky) {
      console.log(`   🦋 Bluesky: ${handles.bluesky}`);
    }
    if (!handles.mastodon && !handles.bluesky) {
      console.log(`   ❌ No handles found`);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('\nYAML snippet to add handles:\n');

  for (const result of results) {
    if (result.mastodon || result.bluesky) {
      console.log(`# ${result.title}`);
      if (result.mastodon) {
        console.log(`  handle2: "${result.mastodon}"`);
      }
      if (result.bluesky) {
        console.log(`  handle3: "${result.bluesky}"`);
      }
      console.log('');
    }
  }
};

main().catch(console.error);

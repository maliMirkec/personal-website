import fs from 'fs';
import YAML from 'js-yaml';

const getLatestFile = () => {
  const dir = './site/side-projects/ui-dev-newsletter';
  const ignoreFilenames = ['admin', 'archive.md', 'confirmation.md', 'contact.md', 'index.md', 'sponsorship.md'];

  const filenames = fs.readdirSync(dir);
  const latestFile = filenames.filter(file => ignoreFilenames.indexOf(file) == -1).pop();
  const latest = fs.readFileSync(`${dir}/${latestFile}`, 'utf8');

  return YAML.loadAll(latest)[0];
};

const latest = getLatestFile();

const generateDateString = () => {
  return new Date(latest.date).toISOString().split('T')[0];
};

const getDivider = (name) => {
  return `\n~~~~~~~~~~~${name ? name : 'UI Dev Newsletter'}~~~~~~~~~~~\n\n`;
};

const getArticleLink = () => {
  return `https://www.silvestar.codes/side-projects/ui-dev-newsletter/${generateDateString()}/\n\n`;
};

const getSubscriptionLink = () => {
  return `Subscribe to the latest UI Dev news here:\n\nhttps://www.silvestar.codes/side-projects/ui-dev-newsletter/\n\n`;
};

const getTwitter = () => {
  let list = '';

  latest.list.forEach((item, i) => {
    list += item.handle ? `${item.handle} ` : '';
  });

  return `Featuring ${list}\n\n`;
};

const getMastodon = () => {
  let list = '';

  latest.list.forEach((item, i) => {
    list += item.handle2 ? `${item.handle2} ` : '';
  });

  return `Featuring ${list}\n\n`;
};

const getBluesky = () => {
  let list = '';

  latest.list.forEach((item, i) => {
    list += item.handle3 ? `${item.handle3} ` : '';
  });

  return `Featuring ${list}\n\n`;
};

const getDescription = () => {
  return `${latest.title} of the UI Dev Newsletter is out!
${latest.description}\n\n`;
};

const getSponsors = () => {
  if(!latest.topAd || latest.topAd.type) {
    return '';
  }

  return `Special thanks to this week's sponsor ${latest.topAd.handle}!\n\n`;
};

const getQandA = () => {
  if(!latest.questions) {
    return '';
  }

  let questions = `${latest.questions.text}\n`;

  latest.questions.list.forEach((item, i) => {
    questions += `\n${item.question}\n${item.short}\n${item.long}\n`;
  });

  return questions;
};

const generateTwitter = () => {
  let output = getDescription();
  output += getTwitter();
  output += getSponsors();
  output += getArticleLink();
  output += getSubscriptionLink();

  return output;
};

// const generateTweets = () => {
//   return latest.list.map((item, i) => {
//     return `${item.title}\n${item.desc}\n${item.link}\n\n`
//   })
// }

const generateLinkedIn = () => {
  let output = getDescription();
  output += getSponsors();
  output += getArticleLink();
  output += getSubscriptionLink();

  return output;
};

// const generatePosts = () => {
//   return latest.list.map((item, i) => {
//     return `${item.title}\n${item.desc}\n${item.link}\n\n`
//   })
// }

const generateMastodon = () => {
  let output = getDescription();
  output += getMastodon();
  output += getSponsors();
  output += getArticleLink();
  output += getSubscriptionLink();

  return output;
};

const generateBluesky = () => {
  let output = getDescription();
  output += getBluesky();
  output += getSponsors();
  output += getArticleLink();
  output += getSubscriptionLink();

  return output;
};

// const generateToots = () => {
//   return latest.list.map((item, i) => {
//     return `${item.title}\n${item.desc}\n${item.link}\n\n`
//   })
// }

const generateSocial = async () => {
  let output = getDivider('Twitter');
  output += generateTwitter();
  output += getDivider('LinkedIn');
  output += generateLinkedIn();
  output += getDivider('Mastodon');
  output += generateMastodon();
  output += getDivider('Bluesky');
  output += generateBluesky();
  output += getDivider('Q and A');
  output += getQandA();

  console.log(output);
};

generateSocial();

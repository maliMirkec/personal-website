import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import env from './env.js';

export default async function (event) {
  if(!env.production) {
    return false;
  }

  return await fetch('https://www.last.fm/user/maliMirkec')
    .then((response) => response.text())
    .then((data) => {
      const $ = cheerio.load(data);

      let tracks = [];

      $('.chartlist-row--with-artist').each((i, row) => {
        tracks.push({
          song: $(row).find('.chartlist-name').text().trim(),
          artist: $(row).find('.chartlist-artist').text().trim(),
          trackUrl: `https://www.last.fm${$(row).find('.chartlist-name a').attr('href')}`
        });
      });

      return tracks;
    });
}

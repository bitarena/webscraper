const rp = require('request-promise');
const $ = require('cheerio');

rp('https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States')
  .then(function (html) {
    // console.log($('big > a', html).length);
    // console.log($('big > a', html));
    const wikiUrls = [];

    for (let i = 0; i < 45; i++) {
      wikiUrls.push($('big > a', html)[i].attribs.href);
    }

    console.log(wikiUrls);
  })
  .catch(function (err) {
      // Crawling failed...
  });

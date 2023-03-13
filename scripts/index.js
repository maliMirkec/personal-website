const doc = require('../site/_data/reads.json');

// Get document, or throw exception on error
try {
  if(!doc || !doc.length) {
    return false;
  }

  let list1 = '';
  let list2 = '';
  let list3 = '';
  let list4 = '';
  let list5 = '';
  let adsTwitter = '';
  let adsMastodon = '';

  if(doc[0].list && doc[0].list.length) {
    doc[0].list.forEach((item, i) => {

      list1 += `
      <li>
        <p><span><a href="${item.link}" target="_blank" style="text-decoration:none"><strong style="color:#FF3366">${item.title}</strong><br><small style="color:#FF3366">${item.link}</small></a></span><br><span>${item.desc}</span></p>
      </li>`

      if(doc[0].topAd && i === 0) {
        list1 += `
        <li>
          <p><small>Sponsor</small><br><span><a href="${doc[0].topAd.link}" target="_blank" style="text-decoration:none"><strong style="color:#FF3366">${doc[0].topAd.title}</strong><br><small style="color:#FF3366">${doc[0].topAd.link}</small></a></span><br><span>${doc[0].topAd.desc}</span></p>
        </li>`
      }

      list2 += `
[${item.title}](${item.slink || item.link})
${item.desc}

`

      list3 += `
${item.desc}

Link: ${item.link}
${item.handle ? 'Via ' + item.handle : ''}

-------------
`

      list4 += `
${item.desc}

Link: ${item.link}
${item.handle2 ? 'Via ' + item.handle2 : ''}

-------------
`

      list5 += `
${item.desc}`
    })
  }

  if(doc[0].topAd) {
    const twitterHandle = doc[0].topAd.handle ? doc[0].topAd.handle : doc[0].topAd.name
    const mastodonHandle = doc[0].topAd.handle2 ? doc[0].topAd.handle2 : doc[0].topAd.name

    adsTwitter = `A big thanks to this week's sponsor ${twitterHandle}.`
    adsMastodon = `A big thanks to this week's sponsor ${mastodonHandle}.`
  }

  if(doc[0].promotion && doc[0].promotion.length) {
    doc[0].promotion.forEach(item => {
      list1 += `
      <li>
        <p><small>${item.type}</small><br><span><a href="${item.link}" target="_blank" style="text-decoration:none"><strong style="color:#FF3366">${item.title}</strong><br><small style="color:#FF3366">${item.link}</small></a></span><br><span>${item.desc}</span></p>
      </li>`

      list2 += `
## ${item.type}

[${item.title}](${item.slink || item.link})
${item.desc}
`
      list5 += `
${item.desc}`
  })
  }

  const docLink = `https://www.silvestar.codes/side-projects/ui-dev-mentoring/reads/${doc[0].date}/`

  console.log('~~~~~~~~~~~~~')
  console.log('UI Newsletter')
  console.log('~~~~~~~~~~~~~')

  console.log(`
<p style="margin:0">
  <a style="display:block;background:#eee;padding:2rem;text-decoration:none" href="${docLink}"><img alt="UI Dev Newsletter logo" class="tl-email-image" height="100" src="https://res.cloudinary.com/starbist/image/upload/v1619351897/uidevnewsletter-logo3_uhcdjf.png" style="margin: 0 auto;border: none;width: 400px;max-width: 400px;" width="400" /></a>
</p>
<div style="background:#fff;border:1px solid #eee;padding:2rem;text-align:left;">
  <h1><a href="${docLink}" target="_blank" style="text-decoration:none"><strong style="color:#FF3366">Issue #${doc.length}</strong></a></h1>
  <h5><strong>${doc[0].date}</strong></h5>
  <ul style="list-style:none;padding:0;margin:0">${list1}</ul>
  <p>Happy coding!</p>
</div>
`);

  console.log('~~~~~~~~~~~~~')
  console.log('UI Post')
  console.log('~~~~~~~~~~~~~')

  console.log(`
## Links

${list2}

**Happy coding!**

[Subscribe to the newsletter here!](https://buttondown.email/starbist)
  `);

  let arr1 = doc[0].list

  if(doc[0].promotion) {
    arr1 = arr1.concat(doc[0].promotion)
  }

  const arr2 = arr1.map(d => d.handle.split(' ')).flat().sort()

  const arr3 = arr2.filter((d1, d2) => {
    return arr2.indexOf(d1) == d2
  })

  const arr4 = arr1.map(d => d.handle2.split(' ')).flat().sort()

  const arr5 = arr4.filter((d1, d2) => {
    return arr4.indexOf(d1) == d2
  })

  console.log('~~~~~~~~~~~~~')
  console.log('UI Twitter')
  console.log('~~~~~~~~~~~~~')

  console.log(`
🆕 UI Dev Newsletter Issue ${doc.length} is out! 🗞️

https://www.silvestar.codes/side-projects/ui-dev-mentoring/reads/${doc[0].date}/

Featuring${arr3.join(' ')}

${adsTwitter}

-------------`)

  console.log(list3);

  console.log(`
🆕 Read the latest UI Dev Newsletter Issue ${doc.length}. 🗞️

https://www.silvestar.codes/side-projects/ui-dev-mentoring/reads/${doc[0].date}/

Featuring${arr3.join(' ')}

${adsTwitter}

`)

  console.log('~~~~~~~~~~~~~')
  console.log('UI Mastodon')
  console.log('~~~~~~~~~~~~~')

  console.log(`
🆕 UI Dev Newsletter Issue ${doc.length} is out! 🗞️

https://www.silvestar.codes/side-projects/ui-dev-mentoring/reads/${doc[0].date}/

Featuring${arr5.join(' ')}

${adsMastodon}

-------------`)

  console.log(list4);

  console.log(`
🆕 Read the latest UI Dev Newsletter Issue ${doc.length}. 🗞️

https://www.silvestar.codes/side-projects/ui-dev-mentoring/reads/${doc[0].date}/

Featuring${arr5.join(' ')}
`)

console.log(`-------------

${list5}`);

  // if(!doc[0].slink || doc[0].slink === '') {
  //   console.error('\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\nShorten the links!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n')
  // }

  if(!doc[0].description || doc[0].description === '') {
    console.error('\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\nAdd the description!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n')
  }

  console.error('\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\nCheck the grammar!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n')
} catch (e) {
  console.log(e);
}

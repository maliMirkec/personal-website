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

  if(doc[0].list && doc[0].list.length) {
    doc[0].list.forEach(item => {
      list1 += `
      <li>
        <p><span><a href="${item.link}" target="_blank" style="text-decoration:none"><strong style="color:#FF3366">${item.title}</strong><br><small style="color:#FF3366">${item.link}</small></a></span><br><span>${item.desc}</span></p>
      </li>`

      list2 += `
[${item.title}](${item.slink || item.link})
${item.desc}

`

      list3 += `
${item.desc}

Link: ${item.link}
Title: ${item.title}
${item.handle ? 'Author: ' + item.handle : ''}

-------------
`

      list4 += `
${item.desc}`
    })
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
      list4 += `
${item.desc}`
  })
  }

  console.log('~~~~~~~~~~~~~')
  console.log('UI Newsletter')
  console.log('~~~~~~~~~~~~~')

  console.log(`
<p style="margin:0">
  <a style="display:block;background:#eee;padding:2rem;text-decoration:none" href="${doc[0].link}"><img alt="UI Dev Newsletter logo" class="tl-email-image" height="100" src="https://res.cloudinary.com/starbist/image/upload/v1619351897/uidevnewsletter-logo3_uhcdjf.png" style="margin: 0 auto;border: none;width: 400px;max-width: 400px;" width="400" /></a>
</p>
<div style="background:#fff;border:1px solid #eee;padding:2rem;text-align:left;">
  <h1><a href="${doc[0].link}" target="_blank" style="text-decoration:none"><strong style="color:#FF3366">Issue #${doc.length}</strong></a></h1>
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


  console.log('~~~~~~~~~~~~~')
  console.log('UI Twitter')
  console.log('~~~~~~~~~~~~~')

  let arr1 = doc[0].list

  if(doc[0].promotion) {
    arr1 = arr1.concat(doc[0].promotion)
  }

  const arr2 = arr1.map(d => d.handle.split(' ')).flat().sort()

  const arr3 = arr2.filter((d1, d2) => {
    return arr2.indexOf(d1) == d2
  })

  console.log(`
🆕 UI Dev Newsletter Issue ${doc.length} is out! 🗞️

https://mentor.silvestar.codes/reads/${doc[0].date}/

Featuring ${arr3.join(' ')}

-------------`)

  console.log(list3);

  console.log(`
🆕 Read the latest UI Dev Newsletter Issue ${doc.length}. 🗞️

https://mentor.silvestar.codes/reads/${doc[0].date}/

Featuring ${arr3.join(' ')}
`)

console.log(`-------------

${list4}`);

  if(!doc[0].slink || doc[0].slink === '') {
    console.error('\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\nShorten the links!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n')
  }

  if(!doc[0].description || doc[0].description === '') {
    console.error('\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\nAdd the description!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n')
  }

  if(!doc[0].grammarly || doc[0].grammarly !== 'true') {
    console.error('\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\nCheck the grammar!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n')
  }
} catch (e) {
  console.log(e);
}

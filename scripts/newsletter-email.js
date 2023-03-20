const doc = require('../site/_data/reads.json');
const latest = doc[0]

const header = `<div style="font-family:Inter,Roboto,'Helvetica Neue','Arial Nova','Nimbus Sans',Arial,sans-serif">
  <div style="background:#eee;padding:2rem">
    <a style="display:block;text-align:center" href="https://www.silvestar.codes/side-projects/ui-dev-newsletter/2023-03-13/">
      <img style="margin:auto" alt="UI Dev Newsletter logo" src="https://res.cloudinary.com/starbist/image/upload/v1678903553/UI_Dev_Newsletter_FF3366_pv7tdb.png" width="150" height="150">
    </a>
  </div>
  <div style="background:#fff;border:1px solid #eee;padding:2rem;text-align:left">`

const footer = `<p>Happy coding!</p>
    <hr>
    <p>
      <a href="https://www.silvestar.codes/side-projects/ui-dev-newsletter/archive/" style="text-decoration:none">
        <span style="display:block;color:#FF3366;font-size:1.125rem;font-weight:900;line-height:1.4;letter-spacing:0.0125em;word-break:break-word;padding:0.25rem 0">See the full archive</span>
      </a>
    </p>
  </div>
</div>`

const generateTitle = () => {
  return `<h1>
      <a href="https://www.silvestar.codes/side-projects/ui-dev-newsletter/2023-03-13/" target="_blank" style="text-decoration:none">
        <span style="display:block;color:#222;font-size:1.5rem;font-weight:900;line-height:1.4;letter-spacing:0.0125em">UI Dev Newsletter - Issue #${doc.length}</span>
      </a>
    </h1>`
}

const generateDate = () => {
  return `<p style="margin-bottom:2rem">${latest.date}</p>`
}

const generateDescription = () => {
  return `<p style="margin-bottom:2rem">In this issue: ${latest.description}</p>`
}

const addSponsors = () => {
  return `  <li style="display:block;padding:0;margin:0">
        <p style="margin:0">
          <span style="display:block;color:#444;font-size:0.8rem;font-weight:700;line-height:1.4;word-break:break-word;margin-bottom:.25rem">Sponsor</span>
          <span>
            <a href="${latest.topAd.link}" target="_blank" style="text-decoration:none">
              <span style="display:block;color:#FF3366;font-size:1.125rem;font-weight:900;line-height:1.4;letter-spacing:0.0125em;word-break:break-word;padding:0.25rem 0">${latest.topAd.title}</span>
            </a>
          </span>
        </p>
        <p style="margin:0;padding-bottom:0.25rem">${latest.topAd.desc}</p>
        <p style="margin:0;padding-bottom:2rem">
          <a href="${latest.topAd.link}">
            <span style="display:inline-block;color:#666;font-size:1rem;font-weight:700;line-height:1.4;text-decoration:underline;padding:0.25rem 0">Read more</span>
          </a>
        </p>
      </li>`
}

const addPromotions = () => {
  return latest.promotion.map(item => {
    return `  <li style="display:block;padding:0;margin:0">
        <p style="margin:0">
          <span style="display:block;color:#444;font-size:0.8rem;font-weight:700;line-height:1.4;word-break:break-word;margin-bottom:.25rem">Self-promotion</span>
          <span>
            <a href="${item.link}" target="_blank" style="text-decoration:none">
              <span style="display:block;color:#FF3366;font-size:1.125rem;font-weight:900;line-height:1.4;letter-spacing:0.0125em;word-break:break-word;padding:0.25rem 0">${item.title}</span>
            </a>
          </span>
        </p>
        <p style="margin:0;padding-bottom:0.25rem">${item.desc}</p>
        <p style="margin:0;padding-bottom:2rem">
          <a href="${item.link}">
            <span style="display:inline-block;color:#666;font-size:1rem;font-weight:700;line-height:1.4;text-decoration:underline;padding:0.25rem 0">Read more</span>
          </a>
        </p>
      </li>`
  })
}

const generateList = () => {
  let list = `<ul style="list-style:none;padding:0;margin:0">`

  latest.list.forEach((item, i) => {
    list += `  <li style="display:block;padding:0;margin:0">
        <p style="margin:0">
          <a href="${item.link}" target="_blank" style="text-decoration:none">
            <span style="display:block;color:#FF3366;font-size:1.125rem;font-weight:900;line-height:1.4;letter-spacing:0.0125em;word-break:break-word;padding:0.25rem 0">${item.title}</span>
          </a>
        </p>
        <p style="margin:0;padding-bottom:0.25rem">${item.desc}</p>
        <p style="margin:0;padding-bottom:2rem">
          <a href="${item.link}">
            <span style="display:inline-block;color:#666;font-size:1rem;font-weight:700;line-height:1.4;text-decoration:underline;padding:0.25rem 0">Read more</span>
          </a>
        </p>
      </li>`

    if(i === 0) {
      list += addSponsors()
    }
  })

  list += addPromotions()

  list += `</ul>`

  return list
}

const generateNewsletter = () => {
  console.log(header)
  console.log(generateTitle());
  console.log(generateDate());
  console.log(generateDescription());
  console.log(generateList());
  console.log(footer);
}

generateNewsletter()

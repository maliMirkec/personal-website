const fs = require('fs');
const YAML = require('js-yaml');

const getLatestFile = () => {
  const dir = './site/side-projects/ui-dev-newsletter'
  const ignoreFilenames = ['admin', 'archive.md', 'confirmation.md', 'contact.md', 'index.md', 'sponsorship.md']

  filenames = fs.readdirSync(dir);

  const latestFile = filenames.filter(file => ignoreFilenames.indexOf(file) == -1).pop();

  const latest = fs.readFileSync(`${dir}/${latestFile}`, 'utf8')

  return YAML.loadAll(latest)[0]
}

const latest = getLatestFile()

const generateDateString = () => {
  return new Date(latest.date).toISOString().split('T')[0]
}

const generateDate = () => {
  return `<p style="margin-bottom:2rem">${generateDateString()}</p>`
}

const generateTitle = () => {
  return `<h1>
      <a href="https://www.silvestar.codes/side-projects/ui-dev-newsletter/${generateDateString()}/" target="_blank" style="text-decoration:none">
        <span style="display:block;color:#222;font-size:1.5rem;font-weight:900;line-height:1.4;letter-spacing:0.0125em">${latest.title}</span>
      </a>
    </h1>`
}

const generateDescription = () => {
  return `<p style="margin-bottom:2rem">${latest.description}</p>`
}

const generateQuestions = () => {
  if(!latest.questions) {
    return ''
  }

  let questions = `
    <p style="margin-bottom:1rem">${latest.questions.text}</p>
  `

  questions += `
    <ul style="list-style:none;margin:0 0 2rem;padding:0;">
  `

  latest.questions.list.forEach((item, i) => {
    questions += `<li style="color:#333;font-size:1rem;line-height:1.4;letter-spacing:0.0125em;word-break:break-word;margin-bottom:1em"><details><summary style="font-weight:600;margin-bottom:.5em;cursor:pointer">${item.question}</summary><div style="margin-bottom:.5em">${item.short}</div><div style="margin-bottom:.5em">${item.long}</div></details></li>
    `
  })

  questions += '</ul>'

  return questions
}

const generateQuestionsAndAnswers = () => {
  return `<p style="margin-bottom:2rem">${latest.description}</p>`
}

const addSponsors = () => {
  if(!latest.topAd) {
    return ''
  }

  return `<li style="display:block;padding:0;margin:0">
        <p style="margin:0">
          <span style="display:block;color:#444;font-size:0.8rem;font-weight:700;line-height:1.4;word-break:break-word;margin-bottom:.25rem">${latest.topAd.type ? latest.topAd.type : 'Sponsor'}</span>
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
  if(!latest.promotion) {
    return ''
  }

  return latest.promotion.map(item => {
    return `<li style="display:block;padding:0;margin:0">
        <p style="margin:0">
          <span style="display:block;color:#444;font-size:0.8rem;font-weight:700;line-height:1.4;word-break:break-word;margin-bottom:.25rem">Self-promotion</span>
          <span>
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
  })
}

const generateList = () => {
  let list = `<ul style="list-style:none;padding:0;margin:0">`

  latest.list.forEach((item, i) => {
    list += `<li style="display:block;padding:0;margin:0">
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

const header = () => {
  headerCode = `<div style="font-family:Inter,Roboto,'Helvetica Neue','Arial Nova','Nimbus Sans',Arial,sans-serif">
    <div style="background:#eee;padding:2rem">
      <a style="display:block;text-align:center" href="https://www.silvestar.codes/side-projects/ui-dev-newsletter/${generateDateString()}/">
        <img style="margin:auto" alt="UI Dev Newsletter logo" src="https://res.cloudinary.com/starbist/image/upload/v1678903553/UI_Dev_Newsletter_FF3366_pv7tdb.png" width="150" height="150">
      </a>
    </div>
    <div style="background:#fff;border:1px solid #eee;padding:2rem;text-align:left">`

  return headerCode
}

const footer = () => {
  footerCode = `<p>Happy coding!</p>
      <hr>
      <p>
        <a href="https://www.silvestar.codes/side-projects/ui-dev-newsletter/archive/" style="text-decoration:none">
          <span style="display:inline-block;color:#FF3366;font-size:0.875rem;font-weight:500;line-height:1.4;letter-spacing:0.0125em;word-break:break-word;padding-top:0.25rem;padding-bottom:0.25rem;padding-right:1rem">Archive</span>
        </a>
        <a href="https://www.silvestar.codes/side-projects/ui-dev-newsletter/sponsorship/" style="text-decoration:none">
          <span style="display:inline-block;color:#FF3366;font-size:0.875rem;font-weight:500;line-height:1.4;letter-spacing:0.0125em;word-break:break-word;padding-top:0.25rem;padding-bottom:0.25rem;padding-right:1rem">Become a sponsor</span>
        </a>
        <a href="https://www.silvestar.codes/side-projects/ui-dev-newsletter/contact/" style="text-decoration:none">
          <span style="display:inline-block;color:#FF3366;font-size:0.875rem;font-weight:500;line-height:1.4;letter-spacing:0.0125em;word-break:break-word;padding-top:0.25rem;padding-bottom:0.25rem;padding-right:1rem">Feedback</span>
        </a>
        <a href="https://www.silvestar.codes/about/" style="text-decoration:none">
          <span style="display:inline-block;color:#FF3366;font-size:0.875rem;font-weight:500;line-height:1.4;letter-spacing:0.0125em;word-break:break-word;padding:0.25rem 0">About the author</span>
        </a>
      </p>
    </div>
  </div>`

  return footerCode
}

const generateNewsletter = () => {
  let output = header()
  output += generateTitle()
  output += generateDate()
  output += generateDescription()
  output += generateQuestions()
  output += generateList()
  output += generateQuestionsAndAnswers()
  output += footer()

  console.log(output);
}

generateNewsletter()

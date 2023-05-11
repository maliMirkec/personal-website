const fs = require('fs');
const YAML = require('json2yaml')
let content = `---
layout: newsletter
title: "Issue #ISSUE"
ogImageTitle: "UI Dev Newsletter: Issue #ISSUE"
description: "In this issue: DESC"
date: DATE
tags:
  - reads
type: newsletter-single
list:
LISTTOPADPROMOTION
---
`

try {
  const reads = fs.readdirSync('./site/_data/reads/')

  reads.forEach((read, index) => {
    const data = JSON.parse(fs.readFileSync(`./site/_data/reads/${read}`, 'utf8'))
    const issue = content.replace(/ISSUE/g, index + 1).replace(/DATE/g, data.date).replace(/DESC/g, data.description).replace(/LIST/g, YAML.stringify(data.list).replace('---\n', '').replace(/- \n    /g, '- ')).replace(/PROMOTION/g, data.promotion ? `\npromotion:\n${YAML.stringify(data.promotion).replace('---\n', '').replace(/- \n    /g, '- ')}` : '').replace(/TOPAD/g, data.topAd ? `\ntopAd:\n${YAML.stringify(data.topAd).replace('---\n', '')}` : '')
    fs.writeFileSync(`./site/side-projects/ui-dev-newsletter/${data.date}.md`, issue);
  });
} catch (error) {
  console.log(error)
}

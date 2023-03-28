const doc = require('../site/_data/reads.json')
const latest = doc[0]

const getDivider = (name) => {
  return `\n~~~~~~~~~~~${name ? name : 'UI Dev Newsletter'}~~~~~~~~~~~\n\n`
}

const getArticleLink = () => {
  return `https://www.silvestar.codes/side-projects/ui-dev-newsletter/${latest.date}/\n\n`
}

const getSubscriptionLink = () => {
  return `Subscribe to the latest UI Dev news here:\n\nhttps://www.silvestar.codes/side-projects/ui-dev-newsletter/\n\n`
}

const getTwitter = () => {
  let list = ''

  latest.list.forEach((item, i) => {
    list += item.handle ? `${item.handle} ` : ''
  })

  return `Featuring ${list}\n\n`
}

const getMastodon = () => {
  let list = ''

  latest.list.forEach((item, i) => {
    list += item.handle2 ? `${item.handle2} ` : ''
  })

  return `Featuring ${list}\n\n`
}

const getDescription = () => {
  return `UI Dev Newsletter #${doc.length} is out! In this issue: ${latest.description}\n\n`
}

const getSponsors = () => {
  if(!latest.topAd) {
    return ''
  }

  return `Special thanks to this week's sponsor ${latest.topAd.handle}!\n\n`
}

const generateTwitter = () => {
  let output = getDescription()
  output += getTwitter()
  output += getSponsors()
  output += getArticleLink()
  output += getSubscriptionLink()

  return output
}

// const generateTweets = () => {
//   return latest.list.map((item, i) => {
//     return `${item.title}\n${item.desc}\n${item.link}\n\n`
//   })
// }

const generateLinkedIn = () => {
  let output = getDescription()
  output += getSponsors()
  output += getArticleLink()
  output += getSubscriptionLink()

  return output
}

// const generatePosts = () => {
//   return latest.list.map((item, i) => {
//     return `${item.title}\n${item.desc}\n${item.link}\n\n`
//   })
// }

const generateMastodon = () => {
  let output = getDescription()
  output += getMastodon()
  output += getSponsors()
  output += getArticleLink()
  output += getSubscriptionLink()

  return output
}

// const generateToots = () => {
//   return latest.list.map((item, i) => {
//     return `${item.title}\n${item.desc}\n${item.link}\n\n`
//   })
// }

const generateSocial = async () => {
  let output = getDivider('Twitter')
  output += generateTwitter()
  output += getDivider('LinkedIn')
  output += generateLinkedIn()
  output += getDivider('Mastodon')
  output += generateMastodon()

  console.log(output);
}

generateSocial()

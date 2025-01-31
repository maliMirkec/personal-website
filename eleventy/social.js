const sharing = [{
  'name': 'Mastodon',
  'url': 'https://s2f.kytta.dev/?text='
},
{
  'name': 'BlueSky',
  'url': 'https://bsky.app/intent/compose?text='
},
{
  'name': 'LinkedIn',
  'url': 'https://www.linkedin.com/shareArticle?mini=true&url='
},
{
  'name': 'Reddit',
  'url': 'https://www.reddit.com/submit?url='
}]

export default async (str, type) => {
  const social = sharing.find(link => {
    return link.name === type
  })

  return `${social.url}${str}`
}

const exclude_tags = ['blog', 'portfolio', 'projects', 'testimonials', 'story', 'advent', 'redesign-2024', 'invalid-css', 'favorites']

export default async (tags) => {
  return tags.filter(tag => exclude_tags.indexOf(tag) === -1)
}

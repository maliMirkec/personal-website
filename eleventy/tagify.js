const exclude_tags = ['blog', 'portfolio', 'projects', 'testimonials', 'story', 'advent', 'redesign-2024', 'invalid-css', 'favorites']

module.exports = async (tags) => {
  return tags.filter(tag => exclude_tags.indexOf(tag) === -1)
}

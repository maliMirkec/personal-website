const collections = async (tag, collection) => {
  return collection.getFilteredByTag(tag).sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else if (a.date > b.date) {
      return -1
    } else {
      return 0
    }
  })
}

const tags = async (collection) => {
  const tagsSet = new Set()

  collection.getAll().forEach(item => {
    if (!item.data.tags) return
    item.data.tags
      .filter(tag => !['post', 'all'].includes(tag))
      .forEach(tag => tagsSet.add(tag))
  })

  return Array.from(tagsSet).sort()
}

export {
  collections,
  tags
}

export function filterPosts(filterObj, posts) {
  let filteredPosts = [...posts]

  // Filter category
  if (filterObj.category !== 'all') {
    const filtered = filteredPosts.filter((post) => {
      const categories = []

      post.categories.map((cat) => {
        categories.push(cat.name.toLowerCase())
      })

      return categories.includes(filterObj.category)
    })
    filteredPosts = filtered
  }

  // Filter search
  if (filterObj.search !== '') {
    const searchList = []
    const searchTerm = filterObj.search.toLowerCase()
    for (let i = 0; i < filteredPosts.length; i++) {
      if (
        filteredPosts[i].title !== null &&
        filteredPosts[i].title.toLowerCase().includes(searchTerm)
        // ||
        // (filteredPosts[i].category !== null && filteredList[i].category.toLowerCase().includes(searchTerm))
      ) {
        searchList.push(filteredPosts[i])
      }
    }
    filteredPosts = searchList
  }

  return filteredPosts
}

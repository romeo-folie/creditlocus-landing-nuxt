/* eslint-disable */
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
    const searchTerm = filterObj.search.toLowerCase().trim()
    for (let i = 0; i < filteredPosts.length; i++) {
      if (
        filteredPosts[i].title !== null &&
        filteredPosts[i].title.toLowerCase().includes(searchTerm)
        ||
        //categories is an array
        // we need to do a find and compare the search term to each category object's name
        (filteredPosts[i].categories.find(cat => cat.name.toLowerCase() === searchTerm))
        // (filteredPosts[i].category !== null && filteredList[i].category.toLowerCase().includes(searchTerm))
        // ||
        // (filteredPosts[i].)
        // consider adding search by month since it's visible in post card
      ) {
        searchList.push(filteredPosts[i])
      }
    }
    filteredPosts = searchList
  }

  return filteredPosts
}

// export async function fetchPage (opts) {
//   var indexStart = opts.page * opts.pageSize - opts.pageSize

//   let randomWaitTime = Math.floor(Math.random() * 5000)
//   await sleep(randomWaitTime)

//   let query = opts.args.query ? opts.args.query : ''

//   let filteredData = data.filter((license) => license.name.toLowerCase().includes(query.toLowerCase()))

//   return {
//     total: filteredData.length,
//     data: filteredData.slice(indexStart, indexStart + opts.pageSize)
//   }
// }

// function sleep (ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms)
//   })
// }

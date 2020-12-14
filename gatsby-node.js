const { paginate } = require('gatsby-awesome-pagination')
const { forEach, uniq, filter, not, isNil, flatMap } = require('rambdax')
const path = require('path')

// const pageTypeRegex = /src\/(.*?)\//
// const getType = node => node.fileAbsolutePath.match(pageTypeRegex)[1]

const pageTemplate = path.resolve(`./src/templates/page.js`)
const indexTemplate = path.resolve(`./src/templates/index.js`)
const projectsTemplate = path.resolve(`./src/templates/projects.js`)
const aboutTemplate = path.resolve(`./src/templates/about.js`)
const resumeTemplate = path.resolve(`./src/templates/resume.js`)

exports.createPages = ({ actions, graphql, getNodes }) => {
  const { createPage } = actions
  const allNodes = getNodes()

  return graphql(`
    {
      allFile (filter: { extension: { eq: "mp4,jpg,png" } }){
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    // const {
    //   allMarkdownRemark: { edges: markdownPages }
    // } = result.data

    // for(let i = 0; i < markdownPages.length; i++){
    //   let page = markdownPages[i]
    //   console.log(page.node.frontmatter.title, page.node.frontmatter.order)
    // }

    // const sortedPages = markdownPages.sort((pageA, pageB) => {
    //   // const typeA = getType(pageA.node)
    //   // const typeB = getType(pageB.node)

    //   // console.log(typeA, typeB)

    //   // return (typeA > typeB) - (typeA < typeB)
    //   const postOrder1 = pageA.node.frontmatter.order
    //   const postOrder2 = pageB.node.frontmatter.order

    //   console.log(pageA.node.frontmatter.title, postOrder1, pageB.node.frontmatter.title, postOrder2)
    //   console.log("order", postOrder1 > postOrder2)
    //   console.log("------------------------")
    //   return postOrder1 > postOrder2

    // })


    // console.log("-----------**********-------------")

    // for(let i = 0; i < sortedPages.length; i++){
    //   let page = sortedPages[i]
    //   console.log(page.node.frontmatter.title, page.node.frontmatter.order)
    // }
    

    const posts = allNodes.filter(
      ({ internal, fileAbsolutePath }) =>
        internal.type === 'MarkdownRemark' &&
        fileAbsolutePath.indexOf('/posts/') !== -1,
    )

    const sortedPosts = posts.sort((post1, post2) => {
        const postOrder1 = post1.frontmatter.order
        const postOrder2 = post2.frontmatter.order

        if(postOrder1 > postOrder2){
          return 1;
        } else {
          return -1;
        }
    }, posts)

    // Create posts index with pagination
    paginate({
      createPage,
      items: sortedPosts,
      component: projectsTemplate,
      itemsPerPage: 1000,
      pathPrefix: '/projects',
    })

    createPage({
      path: "/about",
      component: aboutTemplate,
      context: {
        type: "pages",
      },
    })

    createPage({
      path: "/resume",
      component: resumeTemplate,
      context: {
        type: "pages",
      },
    })

    createPage({
      path: "/",
      component: indexTemplate,
      context: {
        type: "pages",
      },
    })

    // Create each markdown page and post
    forEach((node, index) => {
      const previous = index === 0 ? null : sortedPosts[index - 1]
      const next =
        index === sortedPosts.length - 1 ? null : sortedPosts[index + 1]

      createPage({
        path: node.frontmatter.path,
        component: pageTemplate,
        context: {
          type: "posts",
          next: next,
          previous: previous,
        },
      })
    }, sortedPosts)
  })
}

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
    }

    type Frontmatter {
      title: String!
      author: String
      date: String
      path: String!
      tags: [String!]
      excerpt: String
      coverImage: File @fileByRelativePath
      coverVideo: File @fileByRelativePath
    }
  `
  createTypes(typeDefs)
}

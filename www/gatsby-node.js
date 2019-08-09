const { createFilePath } = require(`gatsby-source-filesystem`)

const mdxResolverPassthrough = fieldName => async (source, args, context, info) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })
  return result
}

exports.sourceNodes = ({ actions, schema }) => {
  const { createTypes } = actions

  const typeDefs = [
    schema.buildObjectType({
      name: `Newsletter`,
      fields: {
        slug: { type: `String` },
        title: { type: `String` },
        info: { type: `String` },
        date: { type: `Date`, extensions: { dateformat: {} } },
        excerpt: {
          type: `String`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 160,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        body: {
          type: `String`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`],
      extensions: {
        infer: true,
      },
    }),
  ]

  createTypes(typeDefs)
}

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }) => {
  const { createNode, createParentChildLink } = actions

  if (node.internal.type !== `Mdx`) {
    return
  }

  const fileNode = getNode(node.parent)

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `newsletter`,
    })

    const fieldData = {
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      info: node.frontmatter.info,
      slug,
    }

    createNode({
      ...fieldData,
      id: createNodeId(`${node.id} >>> Newsletter`),
      parent: node.id,
      children: [],
      internal: {
        type: `Newsletter`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Newsletters`,
      },
    })

    createParentChildLink({ parent: fileNode, child: node })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allNewsletter(sort: { fields: date, order: ASC }) {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(`There was an error loading your newsletters`, result.errors)
    return
  }

  const newsletters = result.data.allNewsletter.nodes

  newsletters.forEach(newsletter => {
    createPage({
      path: newsletter.slug,
      component: require.resolve(`./src/templates/newsletter.tsx`),
      context: {
        slug: newsletter.slug,
      },
    })
  })
}

//gatsby-node.js

const path             = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

//helper function to make the if conditions more readable
function isMarkdownRemarkType(node)
{
    return (node.internal.type === 'MarkdownRemark');
}

//onCreateNode
exports.onCreateNode = function({node, getNode, actions})
{//add slug field to the node if it's a MarkdownRemark node
    
    if (isMarkdownRemarkType(node))
    {
        const slug = createFilePath({node, getNode});

        actions.createNodeField({node, name: 'slug', value: slug});
    }
};

//createPages
//note, we are being passed the async function, graphql, not the synchronous tag func
exports.createPages = async function({graphql, actions})
{//we will launch async, and then just wait on graphql's promise

    const queryString = `query{allMarkdownRemark {edges {node {fields {slug }}}}}`;
    const result      = await graphql(queryString);

    result.data.allMarkdownRemark.edges.forEach(
        ({node}) => //create a page from each node
        {
           actions.createPage(
           {
               path: node.fields.slug,
               component: path.resolve('./src/templates/BlogPostTemplate.js'),
               context: {slug: node.fields.slug} 
               //context for parsing component template file
           });
        } //end expression ({node}) is getting mapped to
      );//end forEach
};







//import react and layout
import * as React from "react";
import Layout from "../components/layout.js";

//import graphql for querying
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Posts">
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

//query to retrieve blog posts
export const getPosts = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
export default BlogPage;
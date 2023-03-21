import * as React from "react";
import {
  graphql,
  PageProps,
  StaticQueryDocument,
  StaticQueryProps,
} from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

type DataFrontmatter = {
  title: string;
  date: string;
};

type DataNodes = {
  id: string;
  frontmatter: DataFrontmatter;
  excerpt: string;
};

type DataBlog = {
  allMdx: {
    nodes: DataNodes[];
  };
};

const BlogPage = ({ data }: PageProps<DataBlog>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          date(formatString: "DD/MM/yyyy")
          title
          slug
        }
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;

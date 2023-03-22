import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";

import { navLinkText } from "../../components/layout.module.css";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

type DataFrontmatter = {
  title: string;
  date: string;
  slug: string;
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
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: ASC } }) {
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

import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

type DataFrontmatter = {
  slug: string;
  title: string;
  date: string;
};

type DataBlog = {
  mdx: {
    frontmatter: DataFrontmatter;
  };
};

const BlogPost = ({ data, children }: PageProps<DataBlog>) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        title
        date(formatString: "DD/MM/yyyy")
      }
    }
  }
`;

export const Head = ({ data }: PageProps<DataBlog>) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;

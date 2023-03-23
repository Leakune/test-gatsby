import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

type DataFrontmatter = {
  slug: string;
  title: string;
  date: string;
  hero_image: ImageDataLike | null;
  hero_image_alt: string;
  hero_image_credit_link: string;
  hero_image_credit_text: string;
};

type DataBlog = {
  mdx: {
    frontmatter: DataFrontmatter;
  };
};

const BlogPost = ({ data, children }: PageProps<DataBlog>) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  if (!image) return <></>;
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
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
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: PageProps<DataBlog>) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;

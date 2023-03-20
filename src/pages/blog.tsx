import * as React from "react";
import {
  graphql,
  PageProps,
  StaticQueryDocument,
  StaticQueryProps,
} from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

type DataNodes = {
  name: string;
};

type DataBlog = {
  allFile: {
    nodes: DataNodes[];
  };
};

const BlogPage = ({ data }: PageProps<DataBlog>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;

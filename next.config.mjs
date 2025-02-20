import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: "export",
  reactStrictMode: true,
  basePath: "/next-js-portfolio",
};
export default withMDX(nextConfig);

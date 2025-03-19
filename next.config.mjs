import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  // Uncomment if needed for all images
  // images: {
  //   unoptimized: true,
  // },
};

export default withMDX(config);

import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  // Make images compatible with static export
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);

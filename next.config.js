/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "zenrodevimages.s3.us-west-2.amazonaws.com",
      "zenrodeviceimages.s3.us-west-2.amazonaws.com",
      "www.mobiruindia.com",
      "www.oruphones.com",
      "mobiruecom.s3.us-west-2.amazonaws.com",
      "zenroecom.s3.us-west-2.amazonaws.com",
      "zenrodeviceimages.s3-us-west-2.amazonaws.com",
      "demo-bucket-c2c-001.s3.amazonaws.com",
      "d1tl44nezj10jx.cloudfront.net",
    ],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Production builds write to .next-prod so they never clobber the
  // dev server's .next cache (the cause of recurring chunk 404s).
  distDir:
    process.env.NEXT_PHASE === "phase-production-build"
      ? ".next-prod"
      : ".next",
};

export default nextConfig;

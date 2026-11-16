/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  // Production builds write to .next-prod so they never clobber the
  // dev server's .next cache (the cause of recurring chunk 404s).
  distDir:
    process.env.NEXT_PHASE === "phase-production-build"
      ? ".next-prod"
      : ".next",
};

export default nextConfig;

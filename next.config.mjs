/** @type {import('next').NextConfig} */
const nextConfig = (phase) => ({
  reactStrictMode: true,
  distDir: phase === 'phase-development-server' ? '.next-dev' : '.next',
  output: phase === 'phase-development-server' ? undefined : 'export'
});

export default nextConfig;

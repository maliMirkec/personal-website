module.exports = {
  production: process.env.ELEVENTY_ENV === 'production',
  development: process.env.ELEVENTY_ENV === 'development',
  staging: process.env.ELEVENTY_ENV === 'staging',
  preview: process.env.ELEVENTY_ENV === 'preview',
  a11y: process.env.ELEVENTY_ENV === 'a11y',
  env: process.env.ELEVENTY_ENV || 'development'
};

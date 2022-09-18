module.exports = {
  production: process.env.ELEVENTY_ENV === 'production',
  development: process.env.ELEVENTY_ENV === 'development',
  preview: process.env.ELEVENTY_ENV === 'preview',
  env: process.env.ELEVENTY_ENV || 'development'
};

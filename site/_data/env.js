import dotenv from 'dotenv';
dotenv.config();

export default {
  production: process.env.ELEVENTY_ENV === 'production',
  development: process.env.ELEVENTY_ENV === 'development',
  staging: process.env.ELEVENTY_ENV === 'staging',
  preview: process.env.ELEVENTY_ENV === 'preview',
  env: process.env.ELEVENTY_ENV || 'development'
};

export const emailConfig = {
  from: 'hi@tan61.dev',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://tan61.dev`
      : 'http://localhost:3000',
}

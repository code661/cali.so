export const emailConfig = {
  from: 'hi@tan61.life',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://tan61.life`
      : 'http://localhost:3000',
}

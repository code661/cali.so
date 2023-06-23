export const emailConfig = {
  from: 'hi@tan61.life',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://cali.so`
      : 'http://localhost:3000',
}

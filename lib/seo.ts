export const seo = {
  title: 'Tan61 | 开发者',
  description:
    '我叫 Tan61，一名开发者，设计师，细节控',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://tan61.life'
      : 'http://localhost:3000'
  ),
} as const

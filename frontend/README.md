

# Abou tThis is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Start By 

```bash
npm run dev
# or
yarn dev
```

### Built with 
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

#### Steps 

- 1. Create App using nextjs
1. In the project folder
```
yarn create react-app frontend 
```
[Getting Started- Nextjs](https://nextjs.org/docs)


2. Add Sass 
```
yarn add sass
```
Add Configuration for sass Compiler in sass options
```
/** @type {import('next').NextConfig} */

//add path required for sassOptions
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig



```


#### Lessons Learned

1. Nav 
-[const-MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
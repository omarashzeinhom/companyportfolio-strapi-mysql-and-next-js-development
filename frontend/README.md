

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

#### Steps  are mentioned in ##### - 1.

##### - 1. Create App using nextjs
1. In the project folder
```
yarn create react-app frontend 
```
[Getting Started- Nextjs](https://nextjs.org/docs)


##### -- 2. Add Sass 
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
[Next.js - Docs - built-in-css-support#sass-support](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support)



##### - - 3. Integrate Strapi BackEnd With FrontEnd Based on [(Castres, M , 2019) - Build a blog with Next (React js) and Strapi](https://strapi.io/blog/build-a-blog-with-next-react-js-strapi)

- Install 
  ```
  yarn add qs moment react-moment react-markdown
  ```
- Create ```./frontend/lib/api.js ```
With this code from [build-a-blog-with-next-react-js-strapi - Strapi](https://strapi.io/blog/build-a-blog-with-next-react-js-strapi)
```
import qs from "qs";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}
```

- Create ```./frontend/lib/media.js```
```
import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}
```

- Add configuration to ```next.config.js```  to access remote images while still using the NextJs Optimization API
```
  //add this inside nextConfig const which is equal to the module.exports
  images: {
    loader: "default",
    domains: ["localhost", "https://cloudinary.com/"],
  },
```


#### Lessons Learned

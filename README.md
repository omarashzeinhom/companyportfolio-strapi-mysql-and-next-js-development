# 1. For BackEnd Check README.md in /backend

# 2. For FrontEnd Check README.md in /frontend

## Steps 
-CUSTOM NEXT JS AND MYSQL STRAPI E-COMMERCE SHOP

-WHY STRAPI AND MYSQL -- CMS AND GREAT SCALING WITH MYSQL

### Project Requirements
1. [MySQL-Community Server](https://dev.mysql.com/downloads/mysql/)
2. [Node-Js]()
3. []()




1. 
```
yarn create strapi-app backend
```
[#Quick Start Guide - Strapi](https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html#_1-install-strapi-and-create-a-new-project)

2. DOWNLOAD INSTALL A THE DB IN MYSQL Community Server 

3. Install MySql in  the /backend



4. ADD MySqlDB/MariaDB Config for strapi and credentials are the ones From Xampp  
```
//path /backend/config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'shop__strapi__db'),
      user: env('DATABASE_USERNAME', 'shop__strapi__username'),
      password: env('DATABASE_PASSWORD', 'shop__strapi__password'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
})

```
[#Configuration examples - Docs Strapi](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/required/databases.html#configuration-structure)
















<small>
📝 Note:
<em>
The quick start installation sets up Strapi with a SQLite database. Other databases and installation options are available (see CLI installation guide).
</em>
</small>



### Start By 🚀 

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).







## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!



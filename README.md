# 1. For BackEnd Check README.md in /backend
## Steps 
## Steps 
-CUSTOM NEXT JS AND MYSQL STRAPI E-COMMERCE SHOP
<small>
📝 Note:
<em>
The quick start installation sets up Strapi with a SQLite database. Other databases and installation options are available (see CLI installation guide).
</em>
</small>

-WHY STRAPI AND MYSQL -- CMS AND GREAT SCALING WITH MYSQL 

# 1. Project Requirements
1. [MySQL-Community Server](https://dev.mysql.com/downloads/mysql/)
2. [Node-Js](https://nodejs.org/en/)
3. [VsCode](https://code.visualstudio.com/)


## 2. MySql Installation Steps
1. Download the Installer For Windows/Mac/Linux
2. Setup Product Configuration Automatically with default settings
3. Setup Authentication Method to be V5. since that strapi does not support V8 according to strapi author
[(Razvan,Cretu,2022)- Configuring Strapi and MySQL ](https://strapi.io/blog/configuring-strapi-mysql-database)
4. Setup Password for Root User

If Skipped Step 3 Dont Worry Reconfigure the authentication step 
1. Just run the installer again 
2. press on the Quick action reconfigure MySqlServer
3. Select the authentication method to be V5 in step 2 in re configure and hit next on all :D


### 3. Setup Another User instead of root user
1. On the left tab of the MySqlCommunityServer
2. Select Users and Privileges
3. Then Add Account on the bottom left
4. Add New Login Name: strapi__nextjs__user
5. Add New Password : strapi__nextjs__password
6. SELECT DBA [Database Admin] From Admin Roles Tab


#### 4. Configure the MySQL DB 

```
// in mysql community server connection 
CREATE DATABASE strapi__db
```

```
USE strapi__db 
```

[3.3.1 Creating and Selecting a Database](https://dev.mysql.com/doc/refman/8.0/en/creating-database.html)



##### 5. Steps For Connecting BackEnd With Strapi CMS Admin Panel 
1. create strapi-app
```
yarn create strapi-app backend
```
[#Quick Start Guide - Strapi](https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html#_1-install-strapi-and-create-a-new-project)
2. Select Manual Installation
3. Select MySql 
4. Add DB Name 
5. ADD DB User 
6. ADD DB Password


<small>
📝 Note:
<em>
Anything goes wrong dontworry you can edit your db settings here
</em>
</small>

```
//path /backend/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi__db'),
      user: env('DATABASE_USERNAME', 'strapi__username'),
      password: env('DATABASE_PASSWORD', 'strapi__password'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
})
```
[#Configuration examples - Docs Strapi](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/required/databases.html#configuration-structure)










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








# 2. For FrontEnd Check README.md in /frontend


module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'shop__strapi__db'),
      user: env('DATABASE_USERNAME', 'shop__strapi__username'),
      password: env('DATABASE_PASSWORD', 'shop__strapi__password'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

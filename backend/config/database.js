module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3307),
      database: env('DATABASE_NAME', 'strapi__db'),
      user: env('DATABASE_USERNAME', 'strapi__nextjs__user'),
      password: env('DATABASE_PASSWORD', '23648623Omar_Zeinhom@#73195Rr.'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

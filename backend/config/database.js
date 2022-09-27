module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3307),
      database: env('DATABASE_NAME', 'strapi_mysql_db'),
      user: env('DATABASE_USERNAME', 'user__tango'),
      password: env('DATABASE_PASSWORD', '23648623@#73195Rr.'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

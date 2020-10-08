// Default database config

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', 'db/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: env('DATABASE_HOST', 'database-strapi.c9y7r0bovjsx.ap-southeast-1.rds.amazonaws.com'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'strapi'),
//         username: env('DATABASE_USERNAME', 'inspireui'),
//         password: env('DATABASE_PASSWORD', 'inspireui123'),
//       },
//       options: {
//         ssl: false,
//       },
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: env('DATABASE_HOST', '127.0.0.1'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'strapi'),
//         username: env('DATABASE_USERNAME', ''),
//         password: env('DATABASE_PASSWORD', ''),
//       },
//       options: {
//         ssl: false,
//       },
//     },
//   },
// });

const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/global')]
  },
  images: {
    domains: ['134.122.89.202']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fanclub',
        permanent: true
      }
    ];
  }
};

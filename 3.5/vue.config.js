module.exports = {
  baseUrl: process.env.VUE_APP_BASE_URL,
  assetsDir: 'assets',
  pages: {
    index: {
      entry: 'src/index/index.js',
      title: 'Index Page'
    },
    guitars: {
      entry: 'src/guitars/guitars.js',
      title: 'Guitars'
      // template: 'public/guitars.html'
      // filename: guitars.html
    }

  }
};
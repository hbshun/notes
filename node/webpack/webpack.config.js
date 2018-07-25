const HtmlWebpackPlugin = require('html-webpack-plugin')
const html = new HtmlWebpackPlugin({
  filename: 'index.ejs',
  template: './index.ejs',
  templateParameters: {
    HALO: '<%= HAHA %>'
  }
});

console.log(html);
module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    html,
    new HtmlWebpackPlugin({
      filename: 'test.ejs',
      template: './index.ejs',
      templateParameters: {
        HALO: '<%= HAHA %>'
      }
    })
  ]
}
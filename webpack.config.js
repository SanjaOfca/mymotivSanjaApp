const path = require('path');
const webpack = require('webpack'); // Make sure to require webpack

module.exports = {
  entry: './js/app.js', // Ulazna točka - glavna JavaScript datoteka
  output: {
    filename: 'bundle.js', // Naziv izlazne bundle datoteke
    path: path.resolve(__dirname, 'dist'), // Putanja do izlaznog direktorija
  },
  mode: "none", // <-- Comma added here
  plugins: [
    new webpack.ProvidePlugin({
      $: './jquery',
      jQuery: './jquery'
    })
  ]
};

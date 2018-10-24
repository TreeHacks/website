const faviconsContext = require.context(
  '!!file-loader?name=assets/favicons/favicon.ico!.',
  true,
  /\.(svg|png|ico|xml|json)$/
);

faviconsContext.keys().forEach(faviconsContext);

const express = require('express');
const apimock = require('@ng-' +
  'apimock/core');
const devInterface = require('@ng-apimock/dev-interface');
const app = express();

app.set('port', (process.env.PORT || 3000));

apimock.processor.process({src: 'mocks'});

app.use(apimock.middleware);
app.use('/mocking', express.static(devInterface));

app.listen(app.get('port'), function() {
  console.log('app running on port', app.get('port'));
});

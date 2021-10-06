const router = global.express.Router();
const drugs = global.mocks.drugs;
const moment = require('moment');

router.post('/', function (request, response) {
  request.body.date = moment().format('M/D/YYYY')
  drugs.push(request.body);
  console.log('Done drugs post', drugs);
  response.status(200).send({
    result: 'Created'
  });
  const wss = global.wss;
  wss.clients.forEach(function (client) {
    client.send(JSON.stringify(global.mocks.drugs));
  });
});

router.get('/', function (request, response) {
  console.log('Done drugs get', drugs);
  response.status(200).send({
    result: 'Readed',
    drugs: drugs
  });
});

router.patch('/', function (request, response) {
  drugs[request.body.index] = request.body.drug;
  console.log('Done drugs patch', drugs);
  response.status(200).send({
    result: 'Updated'
  });
  const wss = global.wss;
  wss.clients.forEach(function (client) {
    client.send(JSON.stringify(global.mocks.drugs));
  });
});

router.delete('/:index', function (request, response) {
  const index = Number(request.params.index);
  drugs.splice(index, 1);
  console.log('Done drugs delete', drugs);
  response.status(200).send({
    result: 'Deleted'
  });
  const wss = global.wss;
  wss.clients.forEach(function (client) {
    client.send(JSON.stringify(global.mocks.drugs));
  });
});

module.exports = router;
const router = global.express.Router();
const drugs = global.mocks.drugs;

router.get('/', function (request, response) {
  const q = request.query.q;
  const searchDrugs = [];
  for (let index = 0; index < drugs.length; index++) {
    if (!q || drugs[index].name.indexOf(q) >= 0) {
      searchDrugs.push(drugs[index]);
    }
  }
  console.log('Done search get', searchDrugs);
  response.status(200).send({
    result: 'Searched',
    drugs: searchDrugs
  });
});

module.exports = router;
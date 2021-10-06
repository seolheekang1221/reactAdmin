const router = global.express.Router();

router.post('/', function (request, response) {
    console.log(request.body)
    if (request.body.name === 'admin' && request.body.password === '1234') {
        response.status(200).send({
            result: 'Logined'
        });
    } else {
        response.status(403).send({
            result: 'Auth failed'
        });
    }
});

module.exports = router;
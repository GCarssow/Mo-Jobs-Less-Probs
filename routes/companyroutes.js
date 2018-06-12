const express = require('express');
const router = express.Router();

const queries = require('../queries/companyqueries');

router.get("/", (request, response, next) => {
    queries.list()
    .then(company => {
        response.json({company});
    })
    .catch(next);
})

router.get("/:id", (request, response) => {
    queries.read(request.params.id)
        .then(company => response.json(company))
})

router.delete('/:id', (request, response) => {
    queries.delete(request.params.id).then(() => {
        queries.list()
        .then(company => response.json({company}))
    })
})

router.post('/', (request, response, next) => {
    queries.create(request.body)
        .then(company => response.json(company[0]))
})

module.exports = router;
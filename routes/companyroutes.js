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
    .then(()=> {
        queries.list().then(company => {
            response.status(201).json({company})
        })
    }).catch(next)

})

router.put('/:id', (request, response) => {
    queries.update(request.params.id, request.body)
        .then(company => {
            response.json({company: company[0]})
        })
        .catch(console.error)
})

module.exports = router;
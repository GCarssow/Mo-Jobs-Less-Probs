const express = require('express');
const router = express.Router();

const queries = require('../queries/contactqueries');

router.get("/", (request, response, next) => {
    queries.list()
    .then(contact => {
        response.json({contact});
    })
    .catch(next);
});

router.get("/:id", (request, response) => {
    queries.read(request.params.id)
        .then(contact => response.json(contact))
})

router.delete('/:id', (request, response) => {
    queries.delete(request.params.id).then(() => {
        queries.list()
        .then(contact => response.json({contact}))
    })
})

router.post('/', (request, response, next) => {
    queries.create(request.body).then(contact => {
        response.status(201).json({contact: contact})
    }).catch(next)
        // .then(contact => contact.json({contact: contact}))
})

// router.post("/", (request, response, next) => {
//     queries.create(request.body).then(resolution => {
//         response.status(201).json({resolution: resolution});
//     }).catch(next);
// });

router.put('/:id', (request, response) => {
    queries.update(request.params.id, request.body)
        .then(contact => {
            response.json({contact: contact[0]})
        })
        .catch(console.error)
})

// router.put("/:id", (request, response, next) => {
//     queries.update(request.params.id, request.body)
//     .then(resolution => {
//         response.json({resolution: resolution[0]});
//     }).catch(next);
// });




module.exports = router;
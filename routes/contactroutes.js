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

module.exports = router;
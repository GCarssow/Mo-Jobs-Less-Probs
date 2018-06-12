const express = require('express');
const router = express.Router();

const queries = require('../queries/companyqueries');

router.get("/", (request, response, next) => {
    queries.list()
    .then(company => {
        response.json({company});
    })
    .catch(next);
});




module.exports = router;
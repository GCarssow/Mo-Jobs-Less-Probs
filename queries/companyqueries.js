const database = require("../connection");

module.exports = {
    list() {
    return database("company_tb")
    },
    create(company) {
        return database("company_tb")
            .insert(company)
            .returning("*")
            .then(record => record[0])
    }

}
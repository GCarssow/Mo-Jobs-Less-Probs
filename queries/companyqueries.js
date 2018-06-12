const database = require("../connection");

module.exports = {
    list() {
        return database("company_tb")
    },
    create(company) {
        return database("company_tb").insert(company,'*')
    },
    update(id, company) {
        return database('company_tb').where('id', id).update(company, '*')
    },
    delete(id) {
        return database('company_tb').where('id', id).delete()
    },
    read(id) {
        return database('company_tb').where('id', id).first()
    }
}
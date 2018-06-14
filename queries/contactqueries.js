const database = require("../connection");

module.exports = {
    list() {
        return database("contact_tb")
    },
    create(contact) {
        return database("contact_tb").insert(contact,'*').then(contact => contact[0])
    },
    update(id, contact) {
        return database('contact_tb').where('company_tb_id', id).update(contact, '*').then(contact => contact[0])
    },
    delete(id) {
        return database('contact_tb').where('id', id).delete()
    },
    read(id) {
        return database('contact_tb').where('id', id).first()
    }
}
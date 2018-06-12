const database = require("../connection");

module.exports = {
    list() {
        return database("contact_tb")
    },
    create(contact) {
        return database("contact_tb").insert(contact,'*')
    },
    update(id, contact) {
        return database('contact_tb').where('id', id).update(contact, '*')
    },
    delete(id) {
        return database('contact_tb').where('id', id).delete()
    },
    read(id) {
        return database('contact_tb').where('id', id).first()
    }
}
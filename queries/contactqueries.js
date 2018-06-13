const database = require("../connection");

module.exports = {
    list() {
        return database("contact_tb")
    },
    create(contact) {
        return database("contact_tb").insert(contact,'*').then(contact => contact[0])
    },
    // update(id, contact) {
    //     return database('contact_tb').where('id', id).update(contact, '*').then(record => record[0])
    // },
    delete(id) {
        return database('contact_tb').where('id', id).delete()
    },
    read(id) {
        return database('contact_tb').where('id', id).first()
    }
}


// create(resolution) {
//     return database("resolution")
//         .insert(resolution)
//         .returning("*")
//         .then(record => record[0]);
// },
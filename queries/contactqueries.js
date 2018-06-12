const database = require("../connection");

module.exports = {
    list() {
    return database("contact_tb")
    }
 
}
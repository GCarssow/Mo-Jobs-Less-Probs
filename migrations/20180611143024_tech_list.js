
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contact_tb', (table)=>{
        table.increments()
        table.text('name')
        table.text('position')
        table.text('location_met')
        table.date('date_last_interacted')
        table.integer('company_tb_id').references('company_tb.id').onDelete('cascade')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('contact_tb') 
}
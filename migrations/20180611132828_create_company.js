
exports.up = function(knex, Promise) {
    return knex.schema.createTable('fake_tb', (table)=>{
        table.increments()
        table.text('company')
        // table.boolean('resume')
        // table.boolean('cover_letter')
        // table.date('date_applied')   
        // table.date('interview_date')
        // table.text('description')
        // table.integer('company_id')

    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('fake_tb')
  
};


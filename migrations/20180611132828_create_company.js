
exports.up = function(knex, Promise) {
    return knex.schema.createTable('company_tb', (table)=>{
        table.increments()
        table.text('company')
        table.boolean('resume')
        table.boolean('cover_letter')
        table.date('date_applied')   
        table.date('interview_date')
        table.text('description')
        table.text('technologies')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('company_tb')
  
};


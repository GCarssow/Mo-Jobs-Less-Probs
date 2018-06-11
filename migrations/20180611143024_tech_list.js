
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tech_tb', (table)=>{
        table.increments()
        table.text('technology_name')
        table.integer('tech_id')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tech_tb')
  
};

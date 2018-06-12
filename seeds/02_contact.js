exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "contact_tb"; ALTER SEQUENCE contact_tb_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('contact_tb').insert([
        {
          id:1,
          name: 'Adrian',
          position: 'CEO',
          location_met: 'the bar',
          date_last_interacted: '06/01/2018',
          company_id: 1
        },
        {
          id:2,
          name: 'Johnny Boy',
          position: 'Mailman',
          location_met: 'also the bar',
          date_last_interacted: '06/01/2018',
          company_id: 1
        },
        {
          id:3,
          name: 'James aka the Crusher',
          position: 'Associate Instructor',
          location_met: 'At a dance party',
          date_last_interacted: '06/01/2018',
          company_id: 2
        },

    
      ]);
    });
};

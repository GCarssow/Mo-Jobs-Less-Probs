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
        {
          id: 4,
          name: 'Adrian',
          position: 'CEO',
          location_met: 'the bar',
          date_last_interacted: '06/01/2018',
          company_id: 1
        }, {
          id: 5,
          name: 'Johnny Boy',
          position: 'Mailman',
          location_met: 'also the bar',
          date_last_interacted: '06/01/2018',
          company_id: 1
        }, {
          id: 6,
          name: 'James aka the Crusher',
          position: 'Associate Instructor',
          location_met: 'At a dance party',
          date_last_interacted: '06/01/2018',
          company_id: 2
        },
        {
          id: 7,
          name: 'Adrian',
          position: 'CEO',
          location_met: 'the bar',
          date_last_interacted: '06/01/2018',
          company_id: 1
        }, {
          id: 8,
          name: 'Johnny Boy',
          position: 'Mailman',
          location_met: 'also the bar',
          date_last_interacted: '06/01/2018',
          company_id: 1
        }, {
          id: 9,
          name: 'James aka the Crusher',
          position: 'Associate Instructor',
          location_met: 'At a dance party',
          date_last_interacted: '06/01/2018',
          company_id: 2
        }, {
          id: 10,
          name: 'Adrian',
          position: 'CEO',
          location_met: 'the bar',
          date_last_interacted: '06/01/2018',
          company_id: 1
        }, {
          id: 11,
          name: 'Johnny Boy',
          position: 'Mailman',
          location_met: 'also the bar',
          date_last_interacted: '06/01/2018',
          company_id: 1
        }, {
          id: 12,
          name: 'James aka the Crusher',
          position: 'Associate Instructor',
          location_met: 'At a dance party',
          date_last_interacted: '06/01/2018',
          company_id: 2
        },
        {
          id: 13,
          name: 'Adrian',
          position: 'CEO',
          location_met: 'the bar',
          date_last_interacted: '06/01/2018',
          company_id: 1
        }, {
          id: 14,
          name: 'Johnny Boy',
          position: 'Mailman',
          location_met: 'also the bar',
          date_last_interacted: '06/01/2018',
          company_id: 1
        }, {
          id: 15,
          name: 'James aka the Crusher',
          position: 'Associate Instructor',
          location_met: 'At a dance party',
          date_last_interacted: '06/01/2018',
          company_id: 2
        }, {
          id: 16,
          name: 'Adrian',
          position: 'CEO',
          location_met: 'the bar',
          date_last_interacted: '06/01/2018',
          company_id: 1
        }, {
          id: 17,
          name: 'Johnny Boy',
          position: 'Mailman',
          location_met: 'also the bar',
          date_last_interacted: '06/01/2018',
          company_id: 1
        }, {
          id: 18,
          name: 'James aka the Crusher',
          position: 'Associate Instructor',
          location_met: 'At a dance party',
          date_last_interacted: '06/01/2018',
          company_id: 2
        }, {
          id: 19,
          name: 'Adrian',
          position: 'CEO',
          location_met: 'the bar',
          date_last_interacted: '06/01/2018',
          company_id: 1
        }, {
          id: 20,
          name: 'Johnny Boy',
          position: 'Mailman',
          location_met: 'also the bar',
          date_last_interacted: '06/01/2018',
          company_id: 1
        }, {
          id: 21,
          name: 'James aka the Crusher',
          position: 'Associate Instructor',
          location_met: 'At a dance party',
          date_last_interacted: '06/01/2018',
          company_id: 2
        }, {
          id: 22,
          name: 'Adrian',
          position: 'CEO',
          location_met: 'the bar',
          date_last_interacted: '06/01/2018',
          company_id: 1
        }, {
          id: 23,
          name: 'Johnny Boy',
          position: 'Mailman',
          location_met: 'also the bar',
          date_last_interacted: '06/01/2018',
          company_id: 1
        }, {
          id: 24,
          name: 'James aka the Crusher',
          position: 'Associate Instructor',
          location_met: 'At a dance party',
          date_last_interacted: '06/01/2018',
          company_id: 2
        }
      ])
    })
}
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "contact_tb"; ALTER SEQUENCE contact_tb_id_seq RESTART WITH 6;')
    .then(function () {
      return knex('contact_tb').insert([
        {
          id:1,
          name: 'Adrian',
          position: 'CEO',
          location_met: 'the bar',
          date_last_interacted: '06/01/2018',
          company_tb_id: 1
        },
        {
          id:2,
          name: 'James The Mustache Schulz',
          position: 'Instructor',
          location_met: 'Denver Devs',
          date_last_interacted: '07/01/2018',
          company_tb_id: 2
        },
        {
          id:3,
          name: 'James Brains and Brawn Mann',
          position: 'Assistant to the Regional Manager',
          location_met: 'DBZ LARPing Meetup',
          date_last_interacted: '06/08/2018',
          company_tb_id: 2
        },
        {
          id: 4,
          name: 'Janice Weatherspoon',
          position: 'HR Manager',
          location_met: 'Denver Devs Happy Hour',
          date_last_interacted: '06/13/2018',
          company_tb_id: 3
        },
        {
          id: 5,
          name: 'Mark Zuck',
          position: 'CEO',
          location_met: 'Lizard Person Convention',
          date_last_interacted: '06/10/2018',
          company_tb_id: 4
        }
      ])
    })
}
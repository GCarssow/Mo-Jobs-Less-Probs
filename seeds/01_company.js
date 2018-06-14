exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "company_tb"; ALTER SEQUENCE company_tb_id_seq RESTART WITH 5;')
    .then(function () {
      return knex('company_tb').insert([
        {
          id:1,
          company: 'BizEatz',
          resume: true,
          cover_letter: true,
          date_applied: '06/15/2018',
          interview_date: '07/13/2018',
          description: 'Front End Engineer',
          technologies: 'React, HTML, CSS'
        },
        {
          id:2,
          company: 'Galvanize',
          resume: false,
          cover_letter: false,
          date_applied: '05/14/2018',
          interview_date: '08/14/2018',
          description: 'Instructor',
          technologies: 'Lots, Personable'
        },
        {
          id:3,
          company: 'Google',
          resume: true,
          cover_letter: true,
          date_applied: '06/22/2018',
          interview_date: '07/13/2018',
          description: 'Back End Engineer',
          technologies: 'React, HTML, CSS'
        },
        {
          id:4,
          company: 'FaceBook',
          resume: true,
          cover_letter: false,
          date_applied: '07/24/2018',
          interview_date: '08/14/2018',
          description: 'Data Analyst',
          technologies: 'Vue, Node.js'
        }
      ])
    })
}
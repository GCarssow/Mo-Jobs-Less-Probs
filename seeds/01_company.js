exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "company_tb"; ALTER SEQUENCE company_tb_id_seq RESTART WITH 3;')
    .then(function () {
      // Inserts seed entries
      return knex('company_tb').insert([
        {
          id:1,
          company: 'BizEatz',
          resume: true,
          cover_letter: true,
          date_applied: '06/15/2018',
          interview_date: '07/13/2018',
          description: 'Front End Engineer',
          technologies: 'React, HTML, CSS, Skillz!!!!'
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
          company: 'BizEatz',
          resume: true,
          cover_letter: true,
          date_applied: '06/15/2018',
          interview_date: '07/13/2018',
          description: 'Front End Engineer',
          technologies: 'React, HTML, CSS, Skillz!!!!'
        },
        {
          id:4,
          company: 'Galvanize',
          resume: false,
          cover_letter: false,
          date_applied: '05/14/2018',
          interview_date: '08/14/2018',
          description: 'Instructor',
          technologies: 'Lots, Personable'
        },
        {
          id: 5,
          company: 'BizEatz',
          resume: true,
          cover_letter: true,
          date_applied: '06/15/2018',
          interview_date: '07/13/2018',
          description: 'Front End Engineer',
          technologies: 'React, HTML, CSS, Skillz!!!!'
        }, {
          id: 6,
          company: 'Galvanize',
          resume: false,
          cover_letter: false,
          date_applied: '05/14/2018',
          interview_date: '08/14/2018',
          description: 'Instructor',
          technologies: 'Lots, Personable'
        }, {
          id: 7,
          company: 'BizEatz',
          resume: true,
          cover_letter: true,
          date_applied: '06/15/2018',
          interview_date: '07/13/2018',
          description: 'Front End Engineer',
          technologies: 'React, HTML, CSS, Skillz!!!!'
        }, {
          id: 8,
          company: 'Galvanize',
          resume: false,
          cover_letter: false,
          date_applied: '05/14/2018',
          interview_date: '08/14/2018',
          description: 'Instructor',
          technologies: 'Lots, Personable'
        },
        {
          id: 9,
          company: 'BizEatz',
          resume: true,
          cover_letter: true,
          date_applied: '06/15/2018',
          interview_date: '07/13/2018',
          description: 'Front End Engineer',
          technologies: 'React, HTML, CSS, Skillz!!!!'
        }, {
          id: 10,
          company: 'Galvanize',
          resume: false,
          cover_letter: false,
          date_applied: '05/14/2018',
          interview_date: '08/14/2018',
          description: 'Instructor',
          technologies: 'Lots, Personable'
        }, {
          id: 11,
          company: 'BizEatz',
          resume: true,
          cover_letter: true,
          date_applied: '06/15/2018',
          interview_date: '07/13/2018',
          description: 'Front End Engineer',
          technologies: 'React, HTML, CSS, Skillz!!!!'
        }, {
          id: 12,
          company: 'Galvanize',
          resume: false,
          cover_letter: false,
          date_applied: '05/14/2018',
          interview_date: '08/14/2018',
          description: 'Instructor',
          technologies: 'Lots, Personable'
        },
        {
          id: 13,
          company: 'BizEatz',
          resume: true,
          cover_letter: true,
          date_applied: '06/15/2018',
          interview_date: '07/13/2018',
          description: 'Front End Engineer',
          technologies: 'React, HTML, CSS, Skillz!!!!'
        }, {
          id: 14,
          company: 'Galvanize',
          resume: false,
          cover_letter: false,
          date_applied: '05/14/2018',
          interview_date: '08/14/2018',
          description: 'Instructor',
          technologies: 'Lots, Personable'
        }, {
          id: 15,
          company: 'BizEatz',
          resume: true,
          cover_letter: true,
          date_applied: '06/15/2018',
          interview_date: '07/13/2018',
          description: 'Front End Engineer',
          technologies: 'React, HTML, CSS, Skillz!!!!'
        }, {
          id: 16,
          company: 'Galvanize',
          resume: false,
          cover_letter: false,
          date_applied: '05/14/2018',
          interview_date: '08/14/2018',
          description: 'Instructor',
          technologies: 'Lots, Personable'
        },
        {
          id: 17,
          company: 'BizEatz',
          resume: true,
          cover_letter: true,
          date_applied: '06/15/2018',
          interview_date: '07/13/2018',
          description: 'Front End Engineer',
          technologies: 'React, HTML, CSS, Skillz!!!!'
        }, {
          id: 18,
          company: 'Galvanize',
          resume: false,
          cover_letter: false,
          date_applied: '05/14/2018',
          interview_date: '08/14/2018',
          description: 'Instructor',
          technologies: 'Lots, Personable'
        }, {
          id: 19,
          company: 'BizEatz',
          resume: true,
          cover_letter: true,
          date_applied: '06/15/2018',
          interview_date: '07/13/2018',
          description: 'Front End Engineer',
          technologies: 'React, HTML, CSS, Skillz!!!!'
        }, {
          id: 20,
          company: 'Galvanize',
          resume: false,
          cover_letter: false,
          date_applied: '05/14/2018',
          interview_date: '08/14/2018',
          description: 'Instructor',
          technologies: 'Lots, Personable'
        },
        {
          id: 21,
          company: 'BizEatz',
          resume: true,
          cover_letter: true,
          date_applied: '06/15/2018',
          interview_date: '07/13/2018',
          description: 'Front End Engineer',
          technologies: 'React, HTML, CSS, Skillz!!!!'
        }, {
          id: 22,
          company: 'Galvanize',
          resume: false,
          cover_letter: false,
          date_applied: '05/14/2018',
          interview_date: '08/14/2018',
          description: 'Instructor',
          technologies: 'Lots, Personable'
        }, {
          id: 23,
          company: 'BizEatz',
          resume: true,
          cover_letter: true,
          date_applied: '06/15/2018',
          interview_date: '07/13/2018',
          description: 'Front End Engineer',
          technologies: 'React, HTML, CSS, Skillz!!!!'
        }, {
          id: 24,
          company: 'Galvanize',
          resume: false,
          cover_letter: false,
          date_applied: '05/14/2018',
          interview_date: '08/14/2018',
          description: 'Instructor',
          technologies: 'Lots, Personable'
        },
        {
          id: 25,
          company: 'BizEatz',
          resume: true,
          cover_letter: true,
          date_applied: '06/15/2018',
          interview_date: '07/13/2018',
          description: 'Front End Engineer',
          technologies: 'React, HTML, CSS, Skillz!!!!'
        }, {
          id: 26,
          company: 'Galvanize',
          resume: false,
          cover_letter: false,
          date_applied: '05/14/2018',
          interview_date: '08/14/2018',
          description: 'Instructor',
          technologies: 'Lots, Personable'
        }, {
          id: 27,
          company: 'BizEatz',
          resume: true,
          cover_letter: true,
          date_applied: '06/15/2018',
          interview_date: '07/13/2018',
          description: 'Front End Engineer',
          technologies: 'React, HTML, CSS, Skillz!!!!'
        }, {
          id: 28,
          company: 'Galvanize',
          resume: false,
          cover_letter: false,
          date_applied: '05/14/2018',
          interview_date: '08/14/2018',
          description: 'Instructor',
          technologies: 'Lots, Personable'
        },
        {
          id: 29,
          company: 'BizEatz',
          resume: true,
          cover_letter: true,
          date_applied: '06/15/2018',
          interview_date: '07/13/2018',
          description: 'Front End Engineer',
          technologies: 'React, HTML, CSS, Skillz!!!!'
        }, {
          id: 30,
          company: 'Galvanize',
          resume: false,
          cover_letter: false,
          date_applied: '05/14/2018',
          interview_date: '08/14/2018',
          description: 'Instructor',
          technologies: 'Lots, Personable'
        }, {
          id: 31,
          company: 'BizEatz',
          resume: true,
          cover_letter: true,
          date_applied: '06/15/2018',
          interview_date: '07/13/2018',
          description: 'Front End Engineer',
          technologies: 'React, HTML, CSS, Skillz!!!!'
        }, {
          id: 32,
          company: 'Galvanize',
          resume: false,
          cover_letter: false,
          date_applied: '05/14/2018',
          interview_date: '08/14/2018',
          description: 'Instructor',
          technologies: 'Lots, Personable'
        }
      ])
    })
}
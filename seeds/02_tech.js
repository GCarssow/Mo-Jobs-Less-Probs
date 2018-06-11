exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "tech_tb"; ALTER SEQUENCE tech_tb_id_seq RESTART WITH 18;')
    .then(function () {
      // Inserts seed entries
      return knex('tech_tb').insert([
        {
          id:1,
          technology_name: 'HTML',
          tech_id: 1
        },
        {
          id:2,
          technology_name: 'CSS',
          tech_id: 2
        },
        {
          id:3,
          technology_name: 'JAVASCRIPT',
          tech_id: 3
        },
        {
          id:4,
          technology_name: 'REACT',
          tech_id: 4
        },
        {
          id:5,
          technology_name: 'ANGULAR',
          tech_id: 5
        },
        {
          id:6,
          technology_name: 'VUE',
          tech_id: 6
        },
        {
          id:7,
          technology_name: 'PYTHON',
          tech_id: 7
        },
        {
          id:8,
          technology_name: 'RUBY',
          tech_id: 8
        },
        {
          id:9,
          technology_name: 'JAVA',
          tech_id: 9
        },
        {
          id:10,
          technology_name: 'KNEX',
          tech_id: 10
        },
        {
          id:11,
          technology_name: 'EXPRESS',
          tech_id: 11
        },
        {
          id:12,
          technology_name: 'HEROKU',
          tech_id: 12
        },
        {
          id:13,
          technology_name: 'PHP',
          tech_id: 13
        },
        {
          id:14,
          technology_name: 'C',
          tech_id: 14
        },
        {
          id:15,
          technology_name: 'C++',
          tech_id: 15
        },
        {
          id:16,
          technology_name: 'NODE',
          tech_id: 16
        },{
          id:17,
          technology_name: 'GITHUB',
          tech_id: 17
        }
    
      ]);
    });
};

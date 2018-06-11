exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "fake_tb"; ALTER SEQUENCE fake_tb_id_seq RESTART WITH 2;')
    .then(function () {
      // Inserts seed entries
      return knex('fake_tb').insert([
        {
          company: 'HTML'
        }
      ]);
    });
};

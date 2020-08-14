
exports.seed = function(knex) {
      return knex('academy').insert([
        {character: 'Klaus'}
      ]);
};

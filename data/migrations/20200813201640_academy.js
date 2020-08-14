
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('academy', tbl => {
            tbl.increments();
            tbl.string('character', 255)
                .notNullable()
                .unique();
        })
  );
};

exports.down = function(knex) {
  return (
      knex.schema
        .dropTableIfExists('academy')
  );
};

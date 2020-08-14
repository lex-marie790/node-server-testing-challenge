
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('academy', tbl => {
            tbl.increments();
            tbl.string('character', 255)
                .notNullable();
        })
  );
};

exports.down = function(knex) {
  return (
      knex.schema
        .dropTableIfExists('academy')
  );
};

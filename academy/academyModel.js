const db = require('../data/db-config.js');

module.exports = {
    insert,
    remove,
    getUser
};

async function insert(academy) {
    const [id] = await db('academy').insert(academy);
    return db('academy')
        .where({id})
        .first();
};

function getUser(){
    return db('academy')
        .select('id as ID', 'character as Character');
};

function remove(id) {
    return db('academy')
        .where({id})
        .del();
};



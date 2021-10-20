const { Pool } = require('pg');
const PG_URI =
  'postgres://faojdvgu:rTPmS6Vk_r0HoleiSheciCMrXiQF409Y@fanny.db.elephantsql.com/faojdvgu';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
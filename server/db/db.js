import { Pool } from "pg";


var pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "sound_log",
});

export default pool;

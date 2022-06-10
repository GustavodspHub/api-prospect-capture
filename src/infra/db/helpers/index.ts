import { DATABASE } from '../../../utils/constants';
import knex from 'knex';

export const dbGrupoSafira = knex({
  client: DATABASE.DIALECT,
  connection: {
    host: DATABASE.HOST,
    port: +DATABASE.PORT,
    user: DATABASE.USERNAME,
    password: DATABASE.PASSWORD,
    database: DATABASE.NAME
  },
});

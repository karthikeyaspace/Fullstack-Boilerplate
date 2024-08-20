// mysql crud
import sqlPool from "../../db/mysql";

const createRecord = (tableName: string, data: any) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO ${tableName} SET ?`;

    sqlPool.query(query, data, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

const readRecords = (
  tableName: string,
  conditions: string = "",
  values: any[] = []
) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM ${tableName} ${conditions}`;

    sqlPool.query(query, values, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

const updateRecord = (
  tableName: string,
  data: any,
  conditions: string,
  values: any[] = []
) => {
  return new Promise((resolve, reject) => {
    const query = `UPDATE ${tableName} SET ? ${conditions}`;

    sqlPool.query(query, [data, ...values], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

const deleteRecord = (
  tableName: string,
  conditions: string,
  values: any[] = []
) => {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM ${tableName} ${conditions}`;

    sqlPool.query(query, values, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

export { createRecord, readRecords, updateRecord, deleteRecord };

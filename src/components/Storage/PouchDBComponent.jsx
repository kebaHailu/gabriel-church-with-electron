import React, {useState,useEffect} from 'react';
import PouchDB from 'pouchdb';
import PouchdbAdapterHttp from 'pouchdb-adapter-http';

PouchDB.plugin(PouchdbFind);
PouchDB.plugin(PouchdbUpsert);
const remoteDB = 'http://localhost:3001/pouchdb/remote_db_name'




class DBHandler {
  constructor(dbName) {
    this.db = new PouchDB(dbName);
  }

  async save(document) {
    const cleanData = { ...document };
    try {
      const response = await this.db.put({
        _id: new Date().toISOString(),
        ...cleanData,
      });
      const alldatas = this.allData();
      console.log(alldatas);
      return response;
    } catch (err) {
      console.error("Error saving document: ", err);
      throw err;
    }
  }
  async allData() {
    try {
      const response = await this.db.allDocs({ include_docs: true });
      return response.rows;
    } catch (err) {
      console.error("Error getting all documents: ", err);
      throw err;
    }
  }
  async deleteAll() {
    try {
      const response = await this.db.allDocs({ include_docs: true });
      response.rows.forEach(async (row) => {
        await this.db.remove(row.doc);
      });
    } catch (err) {
      console.error("Error deleting all documents: ", err);
      throw err;
    }
  }
  async delete(id) {
    try {
      const document = await this.get(id);
      const response = await this.db.remove(document);
      return response;
    } catch (err) {
      console.error("Error deleting document: ", err);
      throw err;
    }
  }
  async update(document) {
    try {
      const response = await this.db.put(document);
      return response;
    } catch (err) {
      console.error("Error updating document: ", err);
      throw err;
    }
  }
  async get(id) {
    try {
      const response = await this.db.get(id);
      return response;
    } catch (err) {
      console.error("Error getting document: ", err);
      throw err;
    }
  }
  async syncronize() {
    try {
      const response = await this.db.sync(remoteDB);
      return response;
    } catch (err) {
      console.error("Error syncronizing document: ", err);
      throw err;
    }
  }
}

export default DBHandler;



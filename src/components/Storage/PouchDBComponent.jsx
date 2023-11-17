import React, {useState,useEffect} from 'react';
import PouchDB from 'pouchdb';
import axios from 'axios'
import { useFormik } from 'formik';
import Dekikan from '../Dekikan/Dekikan';


class DBHandler{
    constructor(dbName){
        this.db = new PouchDB(dbName);

    }

    async save(document){
        const cleanData = {...document};
        try {
            const response = await this.db.put({
                _id: new Date().toISOString(),
                ...cleanData,
            });
            const alldatas = this.allData()
            console.log(alldatas)
            return response;
        }
        catch(err){
            console.error('Error saving document: ', err);
            throw err;
        }
        
    }
    async allData(){
        try {
            const response = await this.db.allDocs({ include_docs: true});
            return response.rows;
        } catch (err) {
            console.error('Error getting all documents: ',err);
            throw err;
        }
    }
    async deleteAll(){
        try {
            const response = await this.db.allDocs({ include_docs: true});
            response.rows.forEach(async (row) => {
                await this.db.remove(row.doc);
            });
        } catch (err) {
            console.error('Error deleting all documents: ',err);
            throw err;
        }
    }
}

export default DBHandler;



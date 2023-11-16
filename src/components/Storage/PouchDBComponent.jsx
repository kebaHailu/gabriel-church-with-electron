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

            // Save to MongoDB
            await axios.post('http://localhost:3000/api/v1/submissions', formData);
        }
        else{
            console.error('PouchDB is not initialized');

        }
        
    }
    async allData(){
        try {
            const response = await this.db.allDocs(function(err,doc){
                if(err){
                    console.log(err)
                }
                else{
                    console.log(doc.rows)
                }
            })
            return response;
        } catch (error) {
            console.error('Error getting all documents: ',error);
            throw error;
        }
    }
}

export default DBHandler;



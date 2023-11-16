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

        };
    return (
        <div> 
            <p>{pouchDB ? 'PouchDB loaded': 'PouchDB not loaded'}</p>
            
        </div>
    )

    }
}

export default DBHandler;
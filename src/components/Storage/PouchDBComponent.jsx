import React, {useEffect} from 'react';
import PouchDB from 'pouchdb';
import axios from 'axios'


const PouchDBComponent = () => {
    const [pouchDB, setPouchDB] = useState(null);

    useEffect(() => {
        const db = new PouchDB('localDB');
        setPouchDB(db);
    }, []);

    const handleFormSubmit = async (formData) => {
        if (pouchDB){
            // Save to PouchDB 
            await pouchDB.put({
                _id: new Date().toISOString(),
                ...formData,
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
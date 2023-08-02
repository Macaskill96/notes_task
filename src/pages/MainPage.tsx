import React from 'react';

import ArchiveContainer from "../containers/ArchiveContainer";
import NotesContainer from "../containers/NotesContainer";
import CountContainer from "../containers/CountContainer";
import './styles.css'

const MainPage = () => {
    return (
        <div className='main'>
            <div>
                <NotesContainer/>
                <CountContainer/>
                <ArchiveContainer/>
            </div>
        </div>
    );
};

export default MainPage;
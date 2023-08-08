import React from 'react';

import ArchiveContainer from "../containers/ArchiveContainer";
import NotesContainer from "../containers/NotesContainer";
import CountContainer from "../containers/CountContainer";
import './styles.css'

const MainPage = () => {
    return (
        <div className='main flex justify-center items-center w-full h-full mt-50'>
            <div>
                <NotesContainer/>
                <CountContainer/>
                <ArchiveContainer/>
            </div>
        </div>
    );
};

export default MainPage;
import React from 'react';

import { useAppSelector} from "../../hooks";
import './styles.css'

const Counter = () => {
    const countNotes = useAppSelector((state) => state.countReducer);
    const arcCounts = useAppSelector((state) => state.arcCountReducer)


    return (
        <div>
            <div className='headerCount flex'>
                <div className='categoryHeader w-300 h-40 flex items-center pl-1 bg-headerBg mt-5 mb-5 text-white'>Category</div>
                <div className='activeHeader w-200 styleHeader'>Active notes</div>
                <div className='archiveHeader w-300 styleHeader'>Archived notes</div>
            </div>
            <div className='Task flex'>
                <div className='noteCategory w-300 h-35 flex mb-3 bg-bgBlue pl-2 items-center'>Task</div>
                <div className='activeCount w-200 styleNote'>{countNotes.result.Task}</div>
                <div className='archiveCount w-300 styleNote'>{arcCounts.result.Task}</div>
            </div>
            <div className='RandomThink flex'>
                <div className='noteCategory w-300 h-35 flex mb-3 bg-bgBlue pl-2 items-center'>Random</div>
                <div className='activeCount w-200 styleNote'>{countNotes.result.RandomThought}</div>
                <div className='archiveCount w-300 styleNote'>{arcCounts.result.RandomThought}</div>
            </div>
            <div className='Idea flex'>
                <div className='noteCategory w-300 h-35 flex mb-3 bg-bgBlue pl-2 items-center'>Idea</div>
                <div className='activeCount w-200 styleNote'>{countNotes.result.Idea}</div>
                <div className='archiveCount w-300 styleNote'>{arcCounts.result.Idea}</div>
            </div>
        </div>
    );
};

export default Counter;
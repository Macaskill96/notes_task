import React from 'react';

import { useAppSelector} from "../../hooks";
import './styles.css'

const Counter = () => {
    const countNotes = useAppSelector((state) => state.countReducer);
    const arcCounts = useAppSelector((state) => state.arcCountReducer)


    return (
        <div>
            <div className='headerCount'>
                <div className='categoryHeader'>Category</div>
                <div className='activeHeader'>Active notes</div>
                <div className='archiveHeader'>Archived notes</div>
            </div>
            <div className='Task'>
                <div className='noteCategory'>Task</div>
                <div className='activeCount'>{countNotes.result.Task}</div>
                <div className='archiveCount'>{arcCounts.result.Task}</div>
            </div>
            <div className='RandomThink'>
                <div className='noteCategory'>Random</div>
                <div className='activeCount'>{countNotes.result.RandomThought}</div>
                <div className='archiveCount'>{arcCounts.result.RandomThought}</div>
            </div>
            <div className='Idea'>
                <div className='noteCategory'>Idea</div>
                <div className='activeCount'>{countNotes.result.Idea}</div>
                <div className='archiveCount'>{arcCounts.result.Idea}</div>
            </div>
        </div>
    );
};

export default Counter;
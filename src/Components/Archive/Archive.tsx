import React, {useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {ICounter} from "../../interfaces/counter.interface";
import {archiveAction, notesAction} from "../../redux";
import {arcCountActions} from "../../redux/slice/archiveCounerSlice";
import {INotes} from "../../interfaces";
import {SubmitHandler} from "react-hook-form";
import './styles.css'

const Archive = () => {
    const archived = useAppSelector((state) => state.archiveReducer);
    const dispatch = useAppDispatch();
    const [selectNote, setSelectNote] = useState<INotes | null>(null)
    const test1 = document.querySelector('.notesContainer') as HTMLElement | null;




    function CounterCategory () {
        const data: ICounter = {
            result: {
                Task: 0,
                RandomThought: 0,
                Idea: 0
            }
        };
        archived.map(note => {
            switch (note.category) {
                case 'Task':
                    data.result.Task++;
                    break;
                case 'Random Thought':
                    data.result.RandomThought++;
                    break;
                case 'Idea':
                    data.result.Idea++;
                    break;
                default:
                    break;
            }} );
        dispatch(arcCountActions.setCounterResult(data))
        return data;
    };

    useEffect(() => {
        CounterCategory();
    }, [archived, dispatch]);



    const handleNoteCreation: SubmitHandler<INotes> = (data) => {
        const newNote: INotes = {
            date: data.date,
            note: data.note,
            category: data.category
        };
        dispatch(notesAction.createNote(newNote));

    }
    const removeNote = (index: number, data: INotes) => {
        setSelectNote(data)
        handleNoteCreation(data)
        dispatch(archiveAction.removeNote(index));
        TransitionPlus()
    }

    function TransitionPlus() {
        if (test1) {
            let tes = test1.clientHeight + 45;
            console.log(tes);
            test1.style.height = `${tes}px`;
        } else {
            console.error('Element with class "notesContainer" not found.');
        }
    }

    return (
        <div>
            {archived.map((arc, index) => {
                return (
                    <div key={index} className='archive'>
                        <div className='archiveDate'>{arc?.date}</div>
                        <div className='archiveNote'>{arc?.note}</div>
                        <div className='archiveCategory'>{arc?.category}</div>
                        <div className='archiveButton'>
                            <button onClick={() => removeNote(index, arc)} className='button'>UnZip</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};


export default Archive;

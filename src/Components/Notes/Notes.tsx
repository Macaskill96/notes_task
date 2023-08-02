import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks";
import {archiveAction, countActions, notesAction} from "../../redux";

import './styles.css'
import { notes } from "../../data";
import Category from "../Category/Category";
import {INotes} from "../../interfaces";
import {ICounter} from "../../interfaces/counter.interface";


const Notes: FC = () => {
    const noteSelector = useAppSelector((state) => state.notesReducer);
    const dispatch = useAppDispatch();
    const [updateNote, setUpdateNote] = useState('');
    const [selectIndex, setSelectIndex] = useState<number>(0);
    const test1 = document.querySelector('.notesContainer') as HTMLElement | null;

    useEffect(() => {
        dispatch(notesAction.getAll(notes));
    }, [dispatch]);

    const removeNote = (index: number) => {
        TransitionMinus();
        dispatch(notesAction.removeNote(index));
    }


    const setNotes = (index: number) => {
        const selectedNote = noteSelector[index];
        if (selectedNote) {
            setUpdateNote(selectedNote.note);
            setSelectIndex(index)
        }
    }
    function findDates(text:string) {
        const dateRegex = /\b\d{2}[-./]\d{2}[-./]\d{4}\b/g;
        return text.match(dateRegex) || [];
    }


    function CounterCategory () {
        const data: ICounter = {
           result: {
               Task: 0,
               RandomThought: 0,
               Idea: 0
           }
        };
        noteSelector.map(note => {
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
        dispatch(countActions.setCounterResult(data))
        return data;
    }

    useEffect(() => {
        CounterCategory();
    }, [noteSelector, dispatch]);


    const ToArchive = (index: number) => {
        const selectedNote = noteSelector[index];
        const arc: { index: number; note: INotes } = {
            index: noteSelector.length,
            note: {
                date: selectedNote.date,
                note: selectedNote.note,
                category: selectedNote.category,
            },
        };
        dispatch(archiveAction.setNote(arc));
        removeNote(index);
        TransitionMinus();
    }



    function TransitionMinus() {
        if (test1) {
            let tes = test1.clientHeight - 45;
            test1.style.height = `${tes}px`;
        } else {
            console.error('Element with class "notesContainer" not found.');
        }
    }


    return (
        <div>
            <Category updateNote={updateNote} selectIndex={selectIndex} />
            <div className='container'>
                <div className='create'>Create</div>
                <div className='note'>Note</div>
                <div className='category'>Category</div>
                <div className='dates'>Dates</div>
                <div className='forButton'></div>
            </div>
            {noteSelector.map((note, index) => (
                        <div key={index} className='container'>
                            <div className='create1'>{note.date}</div>
                            <div className='note1'>{note.note}</div>
                            <div className='category1'>{note.category}</div>
                            <div className='dates1'>
                                {findDates(note.note).map((date, i) => (
                                    <span key={i}>{date.split(', ')}, </span>
                                ))}
                            </div>
                            <div className='forButton1'>
                                <button onClick={() => removeNote(index)} className='button'>Delete</button>
                                <button onClick={()=> setNotes(index)} className='button'>Edit</button>
                                <button onClick={()=> ToArchive(index)} className='button'>To Archive</button>
                            </div>
                        </div>

            ))}
        </div>
    );
};

export default Notes;

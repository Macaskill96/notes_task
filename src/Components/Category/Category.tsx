import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";

import {ICategory, INotes} from "../../interfaces";
import {categoryAction, notesAction} from "../../redux";
import {category}  from "../../data";
import {SubmitHandler, useForm} from "react-hook-form";
import './styles.css'

interface CategoryProps {
    updateNote: string;
    selectIndex: number

}

const Category:FC<CategoryProps> = ({updateNote, selectIndex}) => {
    const categorySelector = useAppSelector((state) => state.categoryReducer);
    const dispatch = useAppDispatch();
    const {reset, handleSubmit, register, setValue,} = useForm<INotes>();


    const [categories, setCategories] = useState('Task');
    const [changeFunction, setChangeFunction] = useState(false)
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [noteValue, setNoteValue] = useState('');
    const test1 = document.querySelector('.notesContainer') as HTMLElement | null;

    useEffect(() => {
        const categoryObj: ICategory[] = category.map(value => ({value}));
        dispatch(categoryAction.getAll(categoryObj))
    }, [dispatch]);

    useEffect(() => {
        if (updateNote) {
            setValue('note', updateNote);
            setChangeFunction(true)
            setNoteValue(updateNote)
        }
    }, [updateNote])

    useEffect(() => {
        setIsButtonDisabled(noteValue === '');
    }, [noteValue]);


    function formatDate () {
        const YYYY = new Date().getFullYear().toString();
        const MM = (new Date().getMonth() + 1).toString().padStart(2, '0');
        const DD = new Date().getDate().toString().padStart(2, '0');

        return `${YYYY}.${MM}.${DD}`;
    }


    const handleNoteCreation: SubmitHandler<INotes> = (data) => {
        const newNote: INotes = {
            date: formatDate(),
            note: data.note,
            category: categories
        };
        dispatch(notesAction.createNote(newNote));
        reset();
        TransitionPlus()

    };

    const changeNote: SubmitHandler<INotes> = (data) => {
        const updatedNote: INotes = {
            date: formatDate(),
            note: data.note,
            category: categories,
        };
        const indexToUpdate = selectIndex;
        dispatch(notesAction.updateNote({index:indexToUpdate, updatedNote}));
        reset();
        setChangeFunction(false);



    }

    const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNoteValue(event.target.value);
    };


    function TransitionPlus() {
        if (test1) {
            let tes = test1.clientHeight + 45;
            test1.style.height = `${tes}px`;
        } else {
            console.error('Element with class "notesContainer" not found.');
        }
    }




    return (
        <div className='formContainer'>
            <div >
                <select onChange={(event) => setCategories(event.target.value)} className='categorySelect'>
                    {category.map((c, index) => (
                        <option key={index} value={c}>
                            {c}
                        </option>
                    ) )}
                </select>
            </div>
            <div>
                <form onSubmit={handleSubmit(changeFunction? changeNote:handleNoteCreation)} className='formContainer'>
                    <input  placeholder='create note' {...register('note')} onChange={handleNoteChange} className='inputSelect'/>
                    <button type='submit' disabled={isButtonDisabled} className='buttonForm'>{changeFunction? 'Update':'Create'}</button>
                </form>
            </div>
        </div>
    );
};


export default Category;
import React, {memo, useCallback, useState} from 'react';
import style from './Categories.module.scss'
import {Select} from "../../common/select";
import {useDispatch} from "react-redux";
import {setCategory, setSubject} from "../../redux/slices/filterSlice";
import {clearBooks} from "../../redux/slices/booksSlice";

const categories = [
    {value:'all', label:"Все"},
    {value:'art', label:"искусство"},
    {value:'biography', label:"биография"},
    {value:'computers', label:"Компьютеры"},
    {value:'history', label:"история"},
    {value:'medical', label:"медицинские"},
    {value:'poetry', label:"поэзия"},
    ]
;

const Categories = memo( () => {
    const [values, setValues] = useState(categories[0])

    const dispatch = useDispatch()
    const handleChange = (value) => {
        setValues(value)
        dispatch(clearBooks())
        dispatch(setSubject(value.value))
    };
    return (
        <div className={style.sort__label}>
            <Select value={values} list={categories} onChange={({ target }) => handleChange(target)}/>
        </div>
    );
}
)
export default Categories;

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { setCurrentPage } from "../../redux/slices/filterSlice";
import styled from './Pagination.module.scss'
import {selectBooks} from "../../redux/slices/booksSlice";
function Pagination() {
  const dispatch = useDispatch();
  const {status} = useSelector(selectBooks)
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <div className={styled.root}>
      <button className={styled.btn} onClick={onChangePage} disabled={status !== 'succeeded'}>load more...</button>
    </div>

  );
}

export default Pagination;

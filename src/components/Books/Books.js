import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, selectBooks } from "../../redux/slices/booksSlice";
import styled from "./Styles/BooksBlock.module.scss";
import { BooksItem } from "./BooksItem";
import { selectFilter, selectSubject } from "../../redux/slices/filterSlice";
import Index from "../../common/Spinner";
const Books = memo((props) => {
  const dispatch = useDispatch();
  const { books, status } = useSelector(selectBooks);
  const { currentPage, sort, searchValue } = useSelector(selectFilter);
  const subject = useSelector(selectSubject);
  useEffect(() => {
    dispatch(fetchBooks({ value: searchValue, currentPage, sort, subject }));
  }, [currentPage, dispatch, searchValue, sort, subject]);

  return (
    <div className={styled.root}>
      <div className={styled.total__books}>{books.length}</div>
      {books.length > 0 && (
        <ul className={styled.content_books}>
          {books?.map((book) => (
            <BooksItem key={book.id} {...book} />
          ))}
        </ul>
      )}
      <div className={styled.spinner__root}>
        {status === "loading" && <Index />}
      </div>
    </div>
  );
});

export { Books };

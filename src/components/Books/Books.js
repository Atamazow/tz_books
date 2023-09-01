import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, selectBooks } from "../../redux/slices/booksSlice";
import styled from "./Styles/BooksBlock.module.scss";
import { BooksItem } from "./BooksItem";
import { selectFilter, selectSubject } from "../../redux/slices/filterSlice";
import Spinner from "./Spinner";
const Books = memo((props) => {
  const dispatch = useDispatch();
  const { books, status } = useSelector(selectBooks);
  const { currentPage, sort, searchValue } = useSelector(selectFilter);
  const subject = useSelector(selectSubject);

  console.log(books);
  useEffect(() => {
    dispatch(fetchBooks({ value: searchValue, currentPage, sort, subject }));
  }, [currentPage, dispatch, searchValue, sort, subject]);

  return (
    <div className={styled.root}>
      {books.length > 0 && (
        <ul className={styled.content_books}>
          {books?.map((book) => (
            <BooksItem key={book.id} {...book} />
          ))}
        </ul>
      )}
     <div className={styled.spinner__root}>
       {status === "loading" && <Spinner />}
     </div>
    </div>
  );
});

export { Books };

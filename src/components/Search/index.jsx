import React, { memo, useRef, useState } from "react";
import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";
import { clearBooks } from "../../redux/slices/booksSlice";

const Search = memo(() => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();

  const upDateSearchValue = () => {
    dispatch(clearBooks());
    dispatch(setSearchValue(value));
  };

  const clearSearch = () => {
    dispatch(clearBooks());
    setValue("");
    dispatch(setSearchValue("*"));
    inputRef.current.focus();
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      upDateSearchValue();
    }
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        onClick={upDateSearchValue}
      >
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      <input
        ref={inputRef}
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      {!!value && (
        <svg
          onClick={clearSearch}
          className={styles.closeIcon}
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      )}
    </div>
  );
});

export default Search;

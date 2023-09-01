import React from "react";
import styled from "./Styles/BooksBlock.module.scss";
import default__image from "../../assets/image/default_image.jpeg";
const BooksItem = ({ volumeInfo }) => {
  const { authors, categories } = volumeInfo;
  // const { authors = [], categories = [] } = volumeInfo;
  const imgFirst = volumeInfo?.imageLinks?.thumbnail;
  const imgSecond = volumeInfo?.imageLinks?.smallThumbnail;

  const rednderAuthor = authors?.map((author, i) => (
    <span className={i}>
      {" "}
      {author}
      {i < authors?.length - 1 ? "," : ""}
    </span>
  ));

  return (
    <li className={styled.books_blook}>
      <div className={styled.block__image}>
        <img src={imgFirst || imgSecond || default__image} alt="" />
      </div>
      <div className={styled.books__category}>
        <a className={styled.title__category}>{categories?.[0]}</a>
      </div>
      <div className={styled.title}>{volumeInfo.title}</div>
      <div className={styled.books__author}>{rednderAuthor}</div>
    </li>
  );
};

export { BooksItem };

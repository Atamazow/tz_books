import React, { memo, useState } from "react";
import style from "./Sort.module.scss";
import { Select } from "../../common/select";
import { useDispatch, useSelector } from "react-redux";
import { selectSort, setSort } from "../../redux/slices/filterSlice";
import { clearBooks } from "../../redux/slices/booksSlice";

const categories = [
  { value: "relevance", label: "Актуальные" },
  { value: "newest", label: "Новейшие" },
];

const Sort = memo(() => {
  const sort = useSelector(selectSort);
  const dispatch = useDispatch();
  const [values, setValues] = useState(sort);
  const handleSortChange = (selectedValue) => {
    setValues(selectedValue);
    dispatch(clearBooks());
    dispatch(setSort({ sortProperty: selectedValue.value }));
  };
  return (
    <div className={style.sort__label}>
      <Select
        value={values}
        list={categories}
        onChange={({ target }) => handleSortChange(target)}
      />
    </div>
  );
});

export default Sort;

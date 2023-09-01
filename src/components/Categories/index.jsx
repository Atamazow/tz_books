import React, { memo, useState } from "react";
import { Select } from "../../common/select";
import { useDispatch } from "react-redux";
import { setSubject } from "../../redux/slices/filterSlice";
import { clearBooks } from "../../redux/slices/booksSlice";

const categories = [
  { value: "all", label: "Все" },
  { value: "art", label: "искусство" },
  { value: "biography", label: "биография" },
  { value: "computers", label: "Компьютеры" },
  { value: "history", label: "история" },
  { value: "medical", label: "медицинские" },
  { value: "poetry", label: "поэзия" },
];
const Categories = memo(() => {
  const [values, setValues] = useState(categories[0]);

  const dispatch = useDispatch();
  const handleChange = (value) => {
    setValues(value);
    dispatch(clearBooks());
    dispatch(setSubject(value.value));
  };
  return (
    <Select
      value={values}
      list={categories}
      onChange={({ target }) => handleChange(target)}
    />
  );
});
export default Categories;

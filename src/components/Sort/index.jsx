import React, { memo, useState } from "react";
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
    <Select
      value={values}
      list={categories}
      onChange={({ target }) => handleSortChange(target)}
    />
  );
});

export default Sort;

import css from "./SearchBox.module.css";

import { useId } from "react";

const SearchBox = ({ value, handleSearch }) => {
  const id = useId();
  return (
    <>
      <div className={css.searchBox}>
        <label htmlFor={id}>Find Contacts by name</label>
        <input
          id={id}
          name="search"
          type="text"
          value={value}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default SearchBox;

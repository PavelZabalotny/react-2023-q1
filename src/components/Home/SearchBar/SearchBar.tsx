import React, { FormEvent, useState } from "react";
import styles from "./SearchBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { add } from "@/features/searchText/searchTextSlice";

const SearchBar = () => {
  const { value: stateValue } = useSelector((state: RootState) => state.searchText);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(stateValue);

  function handleInput(e: FormEvent<HTMLInputElement>): void {
    const target = e.target as HTMLInputElement;
    setInputValue(target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const searchBarValue: string = target.searchBar.value;
    dispatch(add(searchBarValue));
  }

  return (
    <form className={styles.search_bar} onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="searchBar">Search:</label>
      <input
        id="searchBar"
        type="text"
        className={styles.search_input}
        value={inputValue}
        placeholder="Type to search Cards..."
        onChange={(event) => handleInput(event)}
      />
      <button>Submit</button>
    </form>
  );
};

export default SearchBar;

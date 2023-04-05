import React, { FC, FormEvent, useEffect, useRef, useState } from "react";
import { getInputFromLocalStorage, saveInputToLocalStorage } from "@/shared/utils/localStorage";
import { LOCALHOST_INPUT_KEY } from "@/shared/constants";
import styles from "./SearchBar.module.scss";
import { IPeople } from "@/interfaces/people.interface";
import { getPeople } from "@/shared/utils/axios/getPeople";

interface IProps {
  onSubmitCards: (card: IPeople[]) => void;
  isLoading: (isLoading: boolean) => void;
}

const SearchBar: FC<IProps> = ({ onSubmitCards, isLoading }) => {
  const [inputValue, setInputValue] = useState(getInputFromLocalStorage(LOCALHOST_INPUT_KEY));
  const [searchValue, setSearchValue] = useState(inputValue);
  const inputValueRef = useRef(inputValue);

  useEffect(() => {
    window.addEventListener("beforeunload", onUnload);

    return () => {
      onUnload();
      window.removeEventListener("beforeunload", onUnload);
    };
  }, []);

  useEffect(() => {
    isLoading(true);
    getPeople(searchValue, onSubmitCards).then(() => {
      isLoading(false);
    });
  }, [searchValue, onSubmitCards, isLoading]);

  function onUnload(): void {
    saveInputToLocalStorage(inputValueRef.current);
  }

  function handleInput(e: FormEvent<HTMLInputElement>): void {
    const target = e.target as HTMLInputElement;
    setInputValue(target.value);
    inputValueRef.current = target.value;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    setSearchValue(target.searchBar.value);
  }

  return (
    <form className={styles.search_bar} onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="searchBar">Search:</label>
      <input
        id="searchBar"
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

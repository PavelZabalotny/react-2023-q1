import React, { FC, FormEvent, useEffect, useState } from "react";
import { getInputFromLocalStorage, saveInputToLocalStorage } from "@/shared/utils/localStorage";
import styles from "./SearchBar.module.scss";
import { IPeople } from "@/interfaces/people.interface";
import { fetchPeople } from "@/shared/utils/peopleService/fetchPeople";

interface IProps {
  onSubmitCards: (card: IPeople[]) => void;
  isLoading: (isLoading: boolean) => void;
}

const SearchBar: FC<IProps> = ({ onSubmitCards, isLoading }) => {
  const [inputValue, setInputValue] = useState(getInputFromLocalStorage());
  const [searchValue, setSearchValue] = useState(inputValue);

  useEffect(() => {
    isLoading(true);

    fetchPeople(searchValue)
      .then((people) => {
        onSubmitCards(people);
      })
      .catch((error: Error) => {
        console.error(error.message);
      })
      .finally(() => {
        isLoading(false);
      });
  }, [searchValue, onSubmitCards, isLoading]);

  function handleInput(e: FormEvent<HTMLInputElement>): void {
    const target = e.target as HTMLInputElement;
    setInputValue(target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const searchBarValue = target.searchBar.value;
    saveInputToLocalStorage(searchBarValue);
    setSearchValue(searchBarValue);
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

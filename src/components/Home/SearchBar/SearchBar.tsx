import React, { FC, FormEvent, useCallback, useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
import { IPeople } from "@/interfaces/people.interface";
import { fetchPeople } from "@/shared/utils/peopleService/fetchPeople";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { add, isLoading } from "@/features/searchText/searchTextSlice";

interface IProps {
  onSubmitCards: (card: IPeople[]) => void;
}

const SearchBar: FC<IProps> = ({ onSubmitCards }) => {
  const { value: stateValue } = useSelector((state: RootState) => state.searchText);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(stateValue);
  const memoizedGetCards = useCallback(() => {
    dispatch(isLoading(true));
    // TODO: use RTK Query
    fetchPeople(stateValue)
      .then((people) => {
        onSubmitCards(people);
      })
      .catch((error: Error) => {
        console.error(error.message);
      })
      .finally(() => {
        dispatch(isLoading(false));
      });
  }, [dispatch, onSubmitCards, stateValue]);

  useEffect(() => {
    memoizedGetCards();
  }, [memoizedGetCards, stateValue]);

  function handleInput(e: FormEvent<HTMLInputElement>): void {
    const target = e.target as HTMLInputElement;
    setInputValue(target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const searchBarValue: string = target.searchBar.value;
    dispatch(add(searchBarValue));
    // getCards();
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

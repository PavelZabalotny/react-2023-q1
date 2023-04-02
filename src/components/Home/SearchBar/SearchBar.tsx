import React, { FormEvent, useEffect, useRef, useState } from "react";
import { getInputFromLocalStorage, saveInputToLocalStorage } from "@/shared/utils/localStorage";
import { LOCALHOST_INPUT_KEY } from "@/shared/constants";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const [value, setValue] = useState(getInputFromLocalStorage(LOCALHOST_INPUT_KEY) ?? "");
  const inputValueRef = useRef(value);

  function onUnload(): void {
    saveInputToLocalStorage(inputValueRef.current);
  }

  function handleInput(e: FormEvent<HTMLInputElement>): void {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
    inputValueRef.current = target.value;
  }

  useEffect(() => {
    window.addEventListener("beforeunload", onUnload);

    return () => {
      onUnload();
      window.removeEventListener("beforeunload", onUnload);
    };
  }, []);

  return (
    <div className={styles.search_bar}>
      <label htmlFor="search_bar">Search:</label>
      <input
        id="search_bar"
        className={styles.search_input}
        value={value}
        placeholder="Type to search Cards..."
        onChange={(event) => {
          handleInput(event);
        }}
      />
    </div>
  );
};

export default SearchBar;

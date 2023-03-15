import React, { Component, FormEvent } from "react";
import { getInputFromLocalStorage, setInputToLocalStorage } from "@/shared/utils/localStorage";
import { LOCALHOST_INPUT_KEY } from "@/shared/constants";
import styles from "./SearchBar.module.scss";

interface IState {
  value: string;
}

class SearchBar extends Component<Record<string, never>, IState> {
  state = { value: getInputFromLocalStorage(LOCALHOST_INPUT_KEY) ?? "" };

  handleInput(e: FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    this.setState(() => ({ value: target.value }));
  }

  saveToLocalStorage() {
    setInputToLocalStorage(LOCALHOST_INPUT_KEY, this.state.value);
  }

  componentDidMount() {
    window.addEventListener("beforeunload", () => {
      this.saveToLocalStorage();
    });
  }

  componentWillUnmount() {
    this.saveToLocalStorage();
    window.removeEventListener("beforeunload", () => {
      this.saveToLocalStorage();
    });
  }

  render() {
    return (
      <div className={styles.search_bar}>
        <label htmlFor="search_bar">Search:</label>
        <input
          id="search_bar"
          className={styles.search_input}
          value={this.state.value}
          placeholder="Type to search Cards..."
          onInput={(event) => {
            this.handleInput(event);
          }}
        />
      </div>
    );
  }
}

export default SearchBar;

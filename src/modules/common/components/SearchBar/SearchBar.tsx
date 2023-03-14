import React, { Component, FormEvent } from "react";
import { getInputFromLocalStorage, setInputToLocalStorage } from "@/shared/utils/localStorage";
import { LOCALHOST_INPUT_KEY } from "@/shared/constants";

interface IState {
  value: string;
}

class SearchBar extends Component<Record<string, never>, IState> {
  state = { value: getInputFromLocalStorage(LOCALHOST_INPUT_KEY) ?? "" };

  handleInput(e: FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    this.setState(() => ({ value: target.value }));
    setInputToLocalStorage(LOCALHOST_INPUT_KEY, target.value);
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onInput={(event) => {
            this.handleInput(event);
          }}
        />
      </div>
    );
  }
}

export default SearchBar;

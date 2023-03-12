import React, { Component, FormEvent } from "react";
import {
  getInputFromLocalStorage,
  setInputToLocalStorage,
} from "../../../../shared/utils/localStorage";

interface IState {
  value: string;
}

class SearchBar extends Component<Record<string, never>, IState> {
  state = { value: getInputFromLocalStorage() };

  handleInput(e: FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    this.setState(() => ({ value: target.value }));
    setInputToLocalStorage(target.value);
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

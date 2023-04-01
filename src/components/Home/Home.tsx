import React, { useCallback, useState } from "react";
import SearchBar from "@/components/Home/SearchBar/SearchBar";
import CardsList from "@/components/Home/CardsList/CardsList";
import { IPeople } from "@/interfaces/people.interface";

function Home() {
  const [cards, setCards] = useState<IPeople[]>([]);
  const memoizedHandleSearchBarSubmit = useCallback(handleSearchBarSubmit, []);

  function handleSearchBarSubmit(cards: IPeople[]): void {
    setCards(cards);
  }

  return (
    <>
      <SearchBar onSubmitCards={memoizedHandleSearchBarSubmit} />
      <CardsList cards={cards} />
    </>
  );
}

export default Home;

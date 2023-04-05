import React, { useCallback, useState } from "react";
import SearchBar from "@/components/Home/SearchBar/SearchBar";
import CardsList from "@/components/Home/CardsList/CardsList";
import { IPeople } from "@/interfaces/people.interface";
import CardLoading from "@/components/Home/CardsList/Card/CardLoading/CardLoading";

function Home() {
  const [cards, setCards] = useState<IPeople[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const memoizedHandleSearchBarSubmit = useCallback(handleSearchBarSubmit, []);
  const memoizedLoadingCards = useCallback(loadingCards, []);

  function handleSearchBarSubmit(cards: IPeople[]): void {
    setCards(cards);
  }

  function loadingCards(isLoading: boolean): void {
    setLoading(isLoading);
  }

  return (
    <>
      <SearchBar onSubmitCards={memoizedHandleSearchBarSubmit} isLoading={memoizedLoadingCards} />
      <CardLoading isLoading={loading}>
        <CardsList cards={cards} />
      </CardLoading>
    </>
  );
}

export default Home;

import React from "react";
import Card from "./Card/Card";
import styles from "./CardsList.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import CardLoading from "@/components/Home/CardsList/Card/CardLoading/CardLoading";
import { useGetPeopleQuery } from "@/services/people/people";

const CardsList = () => {
  const { value: searchText } = useSelector((state: RootState) => state.searchText);
  const { data: cards, isError, isFetching, isLoading } = useGetPeopleQuery(searchText);
  const emptyCards = <p className={styles.empty}>No result of searching!</p>;
  if (isLoading) return <CardLoading />;
  if (isError) return <p className={styles.empty}>Oh no, there was an error!</p>;
  if (isFetching) return <p>Fetching...</p>;
  if (!cards?.results.length) return emptyCards;
  return (
    <>
      <h3 className={styles.title}>Characters within the Star Wars universe</h3>
      <ul className={styles.cards_list}>
        {cards?.results.map((card) => (
          <Card key={card.name} card={card} />
        ))}
      </ul>
    </>
  );
};

export default CardsList;

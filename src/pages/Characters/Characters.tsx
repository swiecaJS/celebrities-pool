import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { useGetTotalNumberOfCharacters } from "store/settings/selectors";
import { useGetCharacters } from "store/characters/selectors";

import AddCharacter from "./AddCharacter";
import Finished from "./Finished";
import BaseText from "components/BaseText/BaseText";

import styles from "./Characters.module.scss";

const CharacterPage: React.FC = () => {
  const [isAddingFinished, setAddingFinished] = useState(false);
  const { t } = useTranslation("characters");

  const totalNumberOfCharacters = useGetTotalNumberOfCharacters();
  const characters = useGetCharacters();

  useEffect(() => {
    if (characters.length === totalNumberOfCharacters) setAddingFinished(true);
  }, [characters.length, totalNumberOfCharacters]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
      <BaseText tag="h1" size={8} isBold >
        {t("header")}
      </BaseText>
      <BaseText tag="p" size={4}>
        {t("counter", {
          total: totalNumberOfCharacters,
          current: characters.length
        })}
      </BaseText>

      </div>
      <div className={styles.content}>
        {isAddingFinished ? (
          <Finished />
        ) : (
          <>
            <AddCharacter />
          </>
        )}
      </div>
    </section>
  );
};

export default CharacterPage;

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getTotalNumberOfCharacters } from 'store/settings/selectors';
import { getCharacters } from 'store/characters/selectors';

import BaseText from 'components/BaseText/BaseText';
import AddCharacter from './AddCharacter';
import Finished from './Finished';

import styles from './Characters.module.scss';

const CharacterPage: React.FC = () => {
  const [isAddingFinished, setAddingFinished] = useState(false);
  const { t } = useTranslation('characters');

  const totalNumberOfCharacters = useSelector(getTotalNumberOfCharacters);
  const characters = useSelector(getCharacters);

  useEffect(() => {
    if (characters.length >= totalNumberOfCharacters) setAddingFinished(true);
  }, [characters.length, totalNumberOfCharacters]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <BaseText tag="h1" size={8} isBold>
          {t('header')}
        </BaseText>
        <BaseText tag="p" size={4}>
          {t('counter', {
            total: totalNumberOfCharacters,
            current: characters.length,
          })}
        </BaseText>
        <input type="hidden" data-cy="total-characters-in-game" value={totalNumberOfCharacters} />
        <input type="hidden" data-cy="characters-entered" value={characters.length} />

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

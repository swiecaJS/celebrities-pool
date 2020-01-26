import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { useGetRound } from "store/game/selectors";
import { startRound } from "store/game/actions";

import BaseText from "components/BaseText/BaseText";
import BaseButton from "components/BaseButton/BaseButton";

interface Props {}

const RoundOpening: React.FC<Props> = props => {
  const dispatch = useDispatch();
  const onRoundStart = useCallback(() => {
    dispatch(startRound());
  }, [dispatch]);
  const currentRound = useGetRound();

  return (
    <div data-cy="round-opening">
      <BaseText tag="h1" size={6}>
        Round {currentRound} is about to begin
      </BaseText>
      <BaseText tag="h1" size={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro possimus
        quibusdam consequuntur dolor dolore totam non id beatae nemo.
        Reiciendis?
      </BaseText>
      <BaseButton
        onClick={onRoundStart}
        type="button"
        cypressSelector="start-round-btn"
      >
        Continue
      </BaseButton>
    </div>
  );
};

export default RoundOpening;

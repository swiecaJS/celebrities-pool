import React from "react";
import ReactSlider from "react-slider";

import BaseText from "components/BaseText/BaseText";

import styles from "./BaseSlider.module.scss";


interface Props  {
  handleChange: (value: number) => void;
  value: number | undefined;
  defaultValue?: number | undefined;
  max?: number | undefined;
  min?: number | undefined;
  step?: number | undefined;
  label: string;
  wrapperClassName?: string;
  cypressSelector?: string
}

const BaseSlider: React.FC<Props> = ({
  handleChange,
  label,
  wrapperClassName,
  value,
  min,
  max,
  step,
  cypressSelector,
  defaultValue
}) => {
  return (
    <div className={wrapperClassName}>
      <BaseText tag="p" size={4} className={styles.label}>
        {label}
      </BaseText>
      <ReactSlider
        min={min}
        max={max}
        step={step}
        value={value}
        className={styles.slider}
        trackClassName={styles.track}
        thumbClassName={styles.thumb}
        renderThumb={(props, state) => <div data-cy={cypressSelector} {...props}>{state.valueNow}</div>}
        onAfterChange={value => {
          const numberValue = value as number;
          handleChange(numberValue);
        }}
      />
    </div>
  );
};

export default BaseSlider;

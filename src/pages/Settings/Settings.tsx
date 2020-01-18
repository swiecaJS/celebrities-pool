import React, {useCallback} from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux'

import {AppState} from 'store/types'
import * as settingsActions from './actions'

const propTypes = {};
const defaultProps = {};

type Props = PropTypes.InferProps<typeof propTypes>;

const Settings: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const incrementPlayers = useCallback((charactersPerPerson: number) => dispatch(settingsActions.setCharactersPerPerson(charactersPerPerson)), [dispatch])
  const settings = useSelector((state:AppState) => state.settings)

  return (<div>
    <p>settings</p>
    <p>charactersPerPerson {settings.charactersPerPerson}</p>
    <button onClick={() => incrementPlayers(9)}>set charactersPerPerson to 10</button>
  </div>);
};

Settings.propTypes = propTypes;
Settings.defaultProps = defaultProps;

export default Settings;

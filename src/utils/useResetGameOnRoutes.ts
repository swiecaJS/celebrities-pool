import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetGame } from 'store/game/actions';

export default function useFlushStateOnRoutes(routes: string[]) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const onResetGame = useCallback(
    () => dispatch(resetGame()),
    [dispatch],
  );

  useEffect(() => {
    if (routes.includes(pathname)) {
      onResetGame();
    }
  }, [pathname, onResetGame, routes]);
}

import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Page } from 'pages/page';
import { GAME, PAGES } from 'shared/constants';
import { games } from 'shared/constants/games';
import {
  GAME_PHASE,
  resetGame,
  setGameId,
  useGame,
  GameStartScreen,
  GameResults,
  GameInterface,
  GameCountdown,
} from 'entities/game';
import { AppDispatch } from 'app/store';
import { useDispatch } from 'react-redux';
import { Loader } from 'shared/components/loader';

export const GamePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { gamePhase } = useGame();
  const navigate = useNavigate();
  const { gameId } = useParams<{ gameId: GAME }>();
  
  useEffect(() => {
    if (gameId !== undefined) {
      if (!games[gameId]) {
        navigate('/*', { replace: true });
      } else {
        dispatch(setGameId(gameId));
        dispatch(resetGame());
      }
    }
  }, [gameId, navigate, dispatch]);

  return (
    <Page pageName={PAGES.GAME}>
      <GameInterface>
        {gamePhase === GAME_PHASE.START && <GameStartScreen />}
        {gamePhase === GAME_PHASE.COUNTDOWN && <GameCountdown />}
        {gamePhase === GAME_PHASE.RESULTS && <GameResults />}
        {gamePhase === GAME_PHASE.LOADING && <Loader size={150}/>}
      </GameInterface>
    </Page>
  )
}

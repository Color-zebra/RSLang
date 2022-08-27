import { resetGame, toggleGameFullscreen, toggleGameSound, useGame } from 'entities/game';
import { AppDispatch } from 'app/store';
import { useDispatch } from 'react-redux';
import { IconButton, Box, Grid, Tooltip } from '@mui/material';
import React from 'react';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

export const GameInterface = ({ children }: React.PropsWithChildren) => {
  const dispatch: AppDispatch = useDispatch();
  const { isSound, isFullscreen } = useGame();
  const navigate = useNavigate();

  const handleToTextbookClick = () => {
    dispatch(resetGame());
    navigate('/textbook', { replace: true });
  }
  
  const handleSoundClick = () => {
    dispatch(toggleGameSound());
  }

  const handleFullScreenClick = () => {
    dispatch(toggleGameFullscreen());
  }

  React.useEffect(() => {
    if (isFullscreen && document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen && document.fullscreenElement) {
      document.exitFullscreen();
    }
  }, [isFullscreen]);

  return (
    <Grid sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Tooltip title="Звук">
          <IconButton onClick={handleSoundClick} color="secondary">
            {isSound ? <VolumeUpIcon /> : <VolumeOffIcon sx={{ color: "grey.500"}}/>}
          </IconButton >
        </Tooltip>
        <Tooltip onClick={handleFullScreenClick} title="На весь экран">
          <IconButton color="secondary">
            {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Вернуться в учебник">
          <IconButton onClick={handleToTextbookClick} color="secondary">
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1, mt: 3 }}>
        {children}
      </Box>
    </Grid>
  )
}
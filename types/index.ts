import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SpotifyButtonProps {
  songTitle: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

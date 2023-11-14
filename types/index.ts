import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  link?: string;
}

export interface SpotifyButtonProps {
  songTitle: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

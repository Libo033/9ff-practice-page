export interface NewsCardProps {
  image: Array<string>;
  title: string;
  info: string;
  reverse: boolean;
}

export interface TimelineCardProps {
  year: number;
  car: string;
  description: string;
  image: string;
}

export interface MainServicesCard {
  image: string;
  title: string;
  info: string;
  button: string;
  id: number;
}

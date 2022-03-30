export interface ISeason {
  id: number;
  season: string;
  description: string;
  result: string;
  image: string;
  trophies?: [
    {
      event: string;
      place: number;
    }
  ];
}

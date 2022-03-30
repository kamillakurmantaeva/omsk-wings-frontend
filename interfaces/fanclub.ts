export interface ISocialMedia {
  id: number;
  name: string;
  url: string;
  logo: string;
}

export interface ICountries {
  id: number;
  country: string;
  cities: {
    id: number;
    city: string;
    lat: number;
    lon: number;
  }[];
}

export interface IFansPhotos {
  media_files: { id: number; file_url: string }[];
}

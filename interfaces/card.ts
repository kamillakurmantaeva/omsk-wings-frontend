export interface ICard {
  position: string;
  full_name: string;
  birthday: string;
  age: string;
  biography: string;
  about_short: string;
  about_dropdown: string;
  imageUrl: string;
  achievements: { employee_id: number; years: string; achievement: string }[];
}

export interface ITeamCard {
  name: string;
  position: string;
  experience: number[];
  birthday: number;
  imageUrl: string;
}

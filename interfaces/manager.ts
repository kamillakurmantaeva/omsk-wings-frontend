export interface IManagers {
  id: number;
  full_name: string;
  position: string;
  birthday_long: string;
  age: string;
  about: string;
  photo: string;
  achievements: { employee_id: number; years: string; achievement: string }[];
}

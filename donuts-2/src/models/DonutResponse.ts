export default interface DonutResponse {
  id: number;
  name: string;
  photo: string;
  extras?: string[];
  calories?: number;
}

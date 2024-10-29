export interface User {
  id?: string;  // Optional: Firestore will generate this
  name: string;
  age: number;
}
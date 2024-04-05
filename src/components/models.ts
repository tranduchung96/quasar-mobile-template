export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Product{
  id: number,
  name: string,
  category: string,
  price: number,
  stock: number,
  image: string,
  offer?: number
}

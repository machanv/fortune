export type SnakeItem<T> = {
  id?: number;
  name?: string;
  length?: number;
};

export class SnakeClass<T> {

  constructor(options: SnakeItem<T>) {
  }
}

export type SnakeItem<T> = {
  id?: number;
  name?: string;
  length?: number;
};

export class Snake<T> {

  constructor(options: SnakeItem<T>) {
  }
}

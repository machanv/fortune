export interface Article {
  id: number;
  title: string;
  images: string[];

  author: string;

  createTime: Date;
  updateTime: Date;
}

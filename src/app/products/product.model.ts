export class Product {
  public id: string;
  public name: string;
  public price: number;
  public imagePath: string;

  constructor(id: string, name: string, price: number, imagePath: string) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.imagePath = imagePath;
  }
}

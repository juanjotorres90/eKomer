export class Product {
  public id: string;
  public name: string;
  public price: number;
  public imagePath: string;
  public offer: string;
  public counter: number;

  constructor(id: string, name: string, price: number, imagePath: string, offer: string, counter: number) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.imagePath = imagePath;
      this.offer = offer;
      this.counter = counter;
  }
}

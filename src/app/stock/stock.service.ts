import { Injectable } from '@angular/core';

@Injectable()
export class StockService {
  private stocks: Stock[] = [
    new Stock(1, '第一只股票', 1.99, 3.5, '这是第一只股票', ['IT', '金融', '体育']),
    new Stock(2, '第二只股票', 2.01, 5.0, '这是第二只股票', ['IT', '金融', '体育']),
    new Stock(3, '第三只股票', 1.29, 3.0, '这是第三只股票', ['IT', '金融', '体育']),
    new Stock(4, '第四只股票', 1.45, 2.3, '这是第四只股票', ['IT', '金融', '体育']),
    new Stock(5, '第五只股票', 2.34, 1.9, '这是第五只股票', ['IT', '金融', '体育']),
    new Stock(6, '第六只股票', 1.01, 3.9, '这是第六只股票', ['IT', '金融', '体育']),
    new Stock(7, '第七只股票', 0.99, 4.7, '这是第七只股票', ['IT', '金融', '体育'])
  ];
  constructor() { }
  getStocks(): Stock[] {
    return this.stocks;
}
getStock(id: number): Stock {
    var stock=this.stocks.find(stock => stock.id == id);
    if(!stock){
      stock=new Stock(0, '', 0, 0, '', []);
    }
    return stock;
}
}
export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) { }
}

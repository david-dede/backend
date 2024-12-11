class Product{
    public id:number;
    public name:string;
    public price:number;

constructor(id:number,name:string,price:number){
    this.id=id;
    this.name=name;
    this.price=price;
}
displayDetails():string{
    return `product id${this.id},name${this.name},price${this.price}`
}

}
const prod = new Product(1,"laptop",500000)
console.log(prod.displayDetails());

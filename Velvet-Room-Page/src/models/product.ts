export class Product {
    id: string;
    name: string;
    description: string;
    price: string;
    status: string;
    type: string;
    image: string;

    constructor(id: string, name: string, description: string, price: string, status: string, type: string, image: string){

        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.status = status;
        this.type = type;
        this.image = image;
    }
}

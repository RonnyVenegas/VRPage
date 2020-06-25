import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  /** Models */
  product: Product;
  productList: Array<Product> = [];
  magicList: Array<Product> = [];
  pokemonList: Array<Product> = [];
  othersList: Array<Product> = [];

  /** Aux for Rows */
  rowQMTG: number;
  rowQPK: number;
  rowQOT: number;

  /** Modal Model */
  productModelForModal = new Product('id', 'Name', 'Description',
   'Price', 'Status', 'Type', 'productMTG1.png');

  /** Messages */
  notificationMessage = 'Medidas COVID-19: Actualmente sólo está disponible la zona de ventas en el local Gracias por su comprensión';

  ngOnInit(): void {

    this.productList.push(new Product('MTGCS0', 'Mtg Core Set 2020', 'Booster Box',
     '85000', 'Disponible', 'Magic The Gathering', 'MTGCORESET2020B.jpg'));
    this.productList.push(new Product('MTGCS0B', 'Mtg Core Set 2020', 'Booster Pack',
     '3200', 'Disponible', 'Magic The Gathering', 'MTGCORESET2020P.jpg'));
    this.productList.push(new Product('MTGELD', 'Mtg Throne of Eldraine', 'Booster Box',
     '85000', 'Disponible', 'Magic The Gathering', 'MTGTHRONEELDREINEB.png'));
    this.productList.push(new Product('MTGELDB', 'Mtg Throne of Eldraine', 'Booster Pack',
     '3200', 'Disponible', 'Magic The Gathering', 'MTGTHRONEELDREINEP.png'));
    this.productList.push(new Product('MTGTHB', 'Mtg Theros Beyond Death', 'Booster Box',
     '85000', 'Disponible', 'Magic The Gathering', 'MTGTHEROSB.png'));
    this.productList.push(new Product('MTGTHBB', 'Mtg Theros Beyond Death', 'Booster Pack',
     '3200', 'Disponible', 'Magic The Gathering', 'MTGTHEROSP.png'));
    this.productList.push(new Product('MTGIKO', 'Mtg Ikoria Lair of Behemoths', 'Booster Box',
     '85000', 'Disponible', 'Magic The Gathering', 'MTGIIKORIAB.png'));
    this.productList.push(new Product('MTGIKOB', 'Mtg Ikoria Lair of Behemoths', 'Booster Pack',
     '3200', 'Disponible', 'Magic The Gathering', 'MTGIIKORIAP.png'));
    this.productList.push(new Product('MTGCS1', 'Mtg Core Set 2021', 'Booster Box',
     '85000', 'Disponible', 'Magic The Gathering', 'MTGCORESET2021B.png'));
    this.productList.push(new Product('MTGCS1B', 'Mtg Core Set 2021', 'Booster Pack',
     '3200', 'Disponible', 'Magic The Gathering', 'MTGCORESET2021P.png'));
    this.productList.push(new Product('MTGMYS', 'Mtg Mystery', 'Booster Box', '85000',
     'Disponible', 'Magic The Gathering', 'MTGMYSTERYB.png'));
    this.productList.push(new Product('MTGMYSB', 'Mtg Mystery', 'Booster Pack', '4000',
     'Disponible', 'Magic The Gathering', 'MTGMYSTERYP.png'));
    this.productList.push(new Product('MTGJUM', 'Mtg Jumpstart', 'Booster Box', '90000',
     'Próximamente', 'Magic The Gathering', 'MTGJUMPSB.png'));
    this.productList.push(new Product('MTGJUMB', 'Mtg Jumpstart', 'Booster Pack', '4000',
     'Próximamente', 'Magic The Gathering', 'MTGJUMPSP.png'));

    this.productList.push(new Product('PKMRBC', 'Pokemon Rebel Clash', 'Booster Box', '85000',
     'Disponible', 'Pokemon', 'POKEREBELB.png'));
    this.productList.push(new Product('PKMRBCB', 'Pokemon Rebel Clash', 'Booster Pack', '3200',
     'Disponible', 'Pokemon', 'POKEREBELP.png'));
    this.productList.push(new Product('PKMSWRB', 'Pokemon Sword & Shield', 'Booster Pack', '3200',
     'Disponible', 'Pokemon', 'POKESW_SHP.png'));
    this.productList.push(new Product('PKMCOSB', 'Pokemon Cosmic Eclipse', 'Booster Pack', '3200',
     'Disponible', 'Pokemon', 'POKECOSMICP.png'));
    this.productList.push(new Product('PKMSWRD', 'Pokemon Sword & Shield Deck', 'Starter Deck',
     '9000', 'Disponible', 'Pokemon', 'POKESW_SHTD.png'));

    this.productList.push(new Product('PKMSHLD', 'Dragon Shield Matte Sleeves', 'Sleeves 100',
     '8000', 'Disponible varios colores', 'Accesorios', 'ODRAGONSLV.png'));
    this.productList.push(new Product('DCKBOX', 'Commander Deck Box', 'Deck Box', '3200',
     'Disponible varios colores', 'Accesorios', 'OCMMDECKB.png'));
    this.productList.push(new Product('PKMSLV', 'Pokeball Sleeves', 'Sleeves 65', '5000',
     'Disponible varios colores', 'Accesorios', 'OPOKES.png'));
    this.productList.push(new Product('PKMDCK', 'Pokeball Deck Box', 'Deck Box', '5000',
     'Disponible varios colores', 'Accesorios', 'OPOKDECKB.png'));

    this.fillListByType();

    this.rowQMTG = this.magicList.length / 3;
    this.rowQPK = this.pokemonList.length / 3;
    this.rowQOT = this.othersList.length / 3;

  }

  fillListByType() {

    this.productList.forEach((element) => {
      if (element.type === 'Magic The Gathering') {
        this.magicList.push(element);
      } else if (element.type === 'Pokemon') {
        this.pokemonList.push(element);
      } else {
        this.othersList.push(element);
      }
    });
  }

  modalInjection(product$: Product) {
    this.productModelForModal = product$;
  }
}

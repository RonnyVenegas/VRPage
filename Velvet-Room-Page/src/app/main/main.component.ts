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
  productModelForModal = new Product('', '', '',
   '', '', '', 'MTGCORESET2020B.jpg');

  /** Messages */
  notificationMessage = 'Medidas COVID-19: Actualmente sólo está disponible la zona de ventas en el local Gracias por su comprensión';

  YT: any;
  video: any;
  player: any;
  reframed = false;

  isRestricted = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  init() {
    // Return if Player is already created
    if (window[this.YT]) {
      this.startVideo();
      return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    /* 3. startVideo() will create an <iframe> (and YouTube player) after the API code downloads. */
    window['onYouTubeIframeAPIReady'] = () => this.startVideo();
  }


  ngOnInit(): void {

    /** Video URL after watch?= */
    this.video = 'xX0SmdXp5d4';
    this.init();

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
      } else if (element.type === 'Accesorios') {
        this.othersList.push(element);
      }
    });
  }

  modalInjection(product$: Product) {
    this.productModelForModal = product$;
  }

  startVideo() {
    this.reframed = false;
    this.player = new window['YT'].Player('player', {
      videoId: this.video,
      playerVars: {
        autoplay: 1,
        modestbranding: 1,
        controls: 1,
        disablekb: 1,
        rel: 0,
        showinfo: 0,
        fs: 0,
        playsinline: 1

      },
      events: {
        onStateChange: this.onPlayerStateChange.bind(this),
        onError: this.onPlayerError.bind(this),
        onReady: this.onPlayerReady.bind(this),
      }
    });
  }

  /* 4. It will be called when the Video Player is ready */
  onPlayerReady(event) {
    if (this.isRestricted) {
      event.target.mute();
      event.target.playVideo();
    } else {
      event.target.playVideo();
    }
  }

  /* 5. API will call this function when Player State changes like PLAYING, PAUSED, ENDED */
  onPlayerStateChange(event) {
    console.log(event);
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() === 0) {
          console.log('started ' + this.cleanTime());
        } else {
          console.log('playing ' + this.cleanTime());
        }
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() !== 0) {
          console.log('paused' + ' @ ' + this.cleanTime());
        }
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        break;
    }
  }

  cleanTime() {
    return Math.round(this.player.getCurrentTime());
  }

  onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('' + this.video);
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    }
  }

}

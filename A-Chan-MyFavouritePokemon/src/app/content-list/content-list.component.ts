import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
    pokemonArray: Content[];

  constructor() {

    this.pokemonArray = [{
      id: 0,
      title: 'Swampert',
      description: 'It can swim while towing a large ship. It bashes down foes with a swing of its thick arms.',
      creator: 'Game Freak',
      imgURL: 'https://img.pokemondb.net/artwork/swampert.jpg',
      type: 'Water/Ground'
    }, {
      id: 1,
      title: 'Blaziken',
      description: 'Flames spout from its wrists, enveloping its knuckles. Its punches scorch its foes.',
      creator: 'Game Freak',
      imgURL: 'https://img.pokemondb.net/artwork/blaziken.jpg',
      type: 'Fire/Fighting'
    }, {
      id: 2,
      title: 'Eevee',
      description: 'Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions.',
      creator: 'Game Freak',
      imgURL: 'https://img.pokemondb.net/artwork/eevee.jpg',
      type: 'Normal'
    }, {
      id: 3,
      title: 'Honchkrow',
      description: 'If one utters a deep cry, many Murkrow gather quickly. For this, it is called “Summoner of Night.',
      creator: 'Game Freak',
      imgURL: 'https://img.pokemondb.net/artwork/honchkrow.jpg',
      type: 'Dark/Flying'
    }, {
      id: 5,
      title: 'Garchomp',
      description: 'It is said that when one runs at high speed, its wings create blades of wind that can fell nearby trees.',
      creator: 'Game Freak',
      imgURL: 'https://img.pokemondb.net/artwork/garchomp.jpg',
      type: 'Dragon/Ground'
    }, {
      id: 4,
      title: 'Type: Null',
      description: 'The heavy control mask it wears suppresses its intrinsic capabilities. This Pokémon has some hidden special power.',
      creator: 'Game Freak',
      imgURL: "https://img.pokemondb.net/artwork/type-null.jpg"
    }, {
      id: 5,
      title: 'Charizard',
      description: 'It is said that Charizard’s fire burns hotter if it has experienced harsh battles.',
      creator: 'Game Freak',
      imgURL: 'https://img.pokemondb.net/artwork/charizard.jpg',
      type: 'Fire/Flying'
    }];
  }

  ngOnInit(): void {
  }

}

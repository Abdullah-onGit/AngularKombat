import { Component, OnInit } from '@angular/core';
import { player, playersList } from '../common/players'
@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  playersList=playersList;
  constructor() { }

  ngOnInit(): void {
  }

}

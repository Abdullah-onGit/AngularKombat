import { Component, OnInit } from '@angular/core';

import { player } from '../common/players'
@Component({
  selector: 'quick-play',
  templateUrl: './quick-play.component.html',
  styleUrls: ['./quick-play.component.css']
})
export class QuickPlayComponent implements OnInit {
  player1: player = {
    name: 'scorpion',
    img: 'assets/imgs/scorpion.jpeg',
    health: 500,
    basicAttack: 100,
    isAttacking: true
  };
  player2: player = {
    name: 'sub-zero',
    img: 'assets/imgs/subzero.jpg',
    health: 500,
    basicAttack: 110,
    isAttacking: false
  };
  constructor() { }

  ngOnInit(): void {
  }

  onAttacking(attacker: player, defender: player) {
    let AttackResult = this.Attack(0, attacker.basicAttack);
    defender.health -= Math.floor(AttackResult);
    if (defender.health <= 0) {
      defender.health = 0;

      attacker.won = true;
      defender.defeated = true;

      attacker.isAttacking = false;
      defender.isAttacking = false;

    } else {
      attacker.isAttacking = false;
      defender.isAttacking = true;
    }
  }

  Attack(min, max) {
    return Math.random() * (max - min) + min;
  }

}

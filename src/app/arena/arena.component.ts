import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {
  player1: players = {
    name: 'scorpion',
    img: 'assets/imgs/scorpion.jpeg',
    health: 1000,
    basicAttack: 100,
    isAttacking: true
  };
  player2: players = {
    name: 'sub-zero',
    img: 'assets/imgs/subzero.jpg',
    health: 1000,
    basicAttack: 120,
    isAttacking: false
  };
  constructor() { }

  ngOnInit(): void {
  }

  onAttacking(attacker: players, defender: players) {
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

class players {
  name: string;
  img: string;
  health: number;
  basicAttack: number;
  isAttacking: boolean;
  won?= false;
  defeated?= false;
}

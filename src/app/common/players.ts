export class player {
    name: string;
    img: string;
    health: number;
    basicAttack: number;
    isAttacking?: boolean;
    won?= false;
    defeated?= false;
}

export const playersList: player[] = [{
    name: 'Raiden',
    img: 'assets/imgs/raiden.jpg',
    health: 700,
    basicAttack: 130,
},
{
    name: 'Scorpion',
    img: 'assets/imgs/scorpion.jpeg',
    health: 500,
    basicAttack: 100,
},
{
    name: 'Sub-Zero',
    img: 'assets/imgs/subzero.jpg',
    health: 500,
    basicAttack: 110,
}
]
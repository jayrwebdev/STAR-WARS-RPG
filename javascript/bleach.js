// Global Variables
var baseAttack = 0
var player;
var defender;
var charArray = [];
var playerSelected = false ;
var defenderSelected = false;

//Constructor
function Spirits(name, hp, ap, counter, pic) {
    this.name = name;
    this.healthP = hp;
    this.attackStrength = ap;
    this.CounterAttackStrength = counter;
    this.pic = pic;
}

// Increase attack power
Spirits.prototype.increaseAttack = function() {
    this.attackStrength += baseAttack;
};

//


// Global Variables
var baseAttack = 0;
var attacker;
var defender;
var charArray = [];
var playerSelected = false;
var defenderSelected = false;
var AttackerHealth;
var AttackerAttack;
var AttackerBaseAttack;
var AttackerName;
var DefenderHealth;
var DefenderAttack;
var DefenderBaseAttack;
var DefenderName;


var spiritsName = [
    ichigoK = {
        firstName: "Ichigo",
        lastName: "Kurosaki",
        health: 150,
        AttackStrength: 15,
        counterAttackPower: 35,
        defense: 30,
        attackName: "Getsuga Tensho",
        playerSelected: false,
        defenderSelected: false,
        image: "<img src=https://pbs.twimg.com/profile_images/813441077143359488/19IuZ93__200x200.jpg></img>",
    },
    toshiroH = {
        firstName: "Toshiro",
        lastName: "Hitsugaya",
        health: 150,
        AttackStrength: 15,
        counterAttackPower: 35,
        defense: 50,
        attackName: "Ryusenka",
        playerSelected: false,
        defenderSelected: false,
        image: "<img src=https://coubsecure-s.akamaihd.net/get/b125/p/channel/cw_avatar/f31ff271247/e27870688af2926f28a46/profile_pic_big_1474489381_lqezkw_att-url-download.jpg></img>",
    },
    sosukeA = {
        firstName: "Aizen",
        lastName: "Sosuke",
        health: 150,
        AttackStrength: 15,
        counterAttackPower: 35,
        defense: 50,
        attackName: "Hado #99",
        playerSelected: false,
        defenderSelected: false,
        image: "<img src=https://avatarfiles.alphacoders.com/177/thumb-177298.png></img>",
    },
    byakuyaK = {
        firstName: "Byakuya",
        lastName: "Kuchiki",
        health: 150,
        attackStrength: 15,
        counterAttackPower: 35,
        defense: 50,
        attackName: "Senkei Senbonzakura Kageoyshi",
        playerSelected: false,
        defenderSelected: false,
        image: "<img src=http://images2.fanpop.com/image/answers/83000/83093_1265923976348_200_200.jpg></img>",
    },
]


$(document).ready(function () {
    // Put characters in character div
    for (i = 0; i < spiritsName.length; i++) {
        var objectPos = spiritsName[i];
        $(".characters").append('<div id =' + objectPos.firstName + '></div>');
        //  $("#players").attr('id', objectPos.idName);
        $("#" + objectPos.firstName).attr('class', objectPos.firstName);
        $("#" + objectPos.firstName).append(objectPos.image);
        $("#" + objectPos.firstName).append("<span> <br>" + objectPos.firstName + "</span>" + "<br>" + "<span class=" + objectPos.firstName + "Health>" + "HP: " + objectPos.health + "</span>");
    }

    // Defender Selection
    $(".Ichigo").on("click", function () {
        if (playerSelected === true && defenderSelected === false) {
            defenderSelected = true;
            $(".Ichigo").appendTo(".Defender")
            DefenderAttack = spiritsName[0].attackStrength;
            DefenderHealth = spiritsName[0].health;
            DefenderBaseAttack = spiritsName[0].attackStrength + baseAttack + 5;
            DefenderName = spiritsName[0].firstName.lastName;
        } else {
            playerSelected = true;
            $(".Ichigo").appendTo(".Attacker")
            $(".Toshiro").appendTo(".Enemies")
            $(".Aizen").appendTo(".Enemies")
            $(".Byakuya").appendTo(".Enemies")
            AttackerAttack = spiritsName[0].attackStrength;
            AttackerHealth = spiritsName[0].health
            AttackerBaseAttack = spiritsName[0].attackStrength + baseAttack + 8;
            AttackerName = spiritsName[0].firstName.lastName;
        }
    })

    $(".Toshiro").on("click", function () {
        if (playerSelected === true && defenderSelected === false) {
            defenderSelected = true;
            $(".Toshiro").appendTo(".Defender")
            DefenderAttack = spiritsName[1].firstName.attackStrength;
            DefenderHealth = spiritsName[1].health;
            DefenderBaseAttack = spiritsName[1].attackStrength + baseAttack + 8;
            DefenderName = spiritsName[1].firstName.lastName;
        } else {
            playerSelected = true;
            $(".Ichigo").appendTo(".Enemies")
            $(".Toshiro").appendTo(".Attacker")
            $(".Aizen").appendTo(".Enemies")
            $(".Byakuya").appendTo(".Enemies")
            AttackerAttack = spiritsName[1].attackStrength;
            AttackerHealth = spiritsName[1].health
            AttackerBaseAttack = spiritsName[1].attackStrength + baseAttack + 10;
            AttackerName = spiritsName[1].firstName.lastName;
        }
    })

    $(".Aizen").on("click", function () {
        if (playerSelected === true && defenderSelected === false) {
            defenderSelected = true;
            $(".Aizen").appendTo(".Defender")
            DefenderAttack = spiritsName[2].attackStrength;
            DefenderHealth = spiritsName[2].health;
            DefenderBaseAttack = spiritsName[2].attackStrength + baseAttack + 10;
            DefenderName = spiritsName[2].firstName.lastName;
        } else {
            playerSelected = true;
            $(".Ichigo").appendTo(".Enemies")
            $(".Toshiro").appendTo(".Enemies")
            $(".Aizen").appendTo(".Attacker")
            $(".Byakuya").appendTo(".Enemies")
            AttackerAttack = spiritsName[2].attackStrength;
            AttackerHealth = spiritsName[2].health
            AttackerBaseAttack = spiritsName[2].attackStrength.baseAttack + 10;
            AttackerName = spiritsName[2].firstName.lastName;
        }
    })

    $(".Byakuya").on("click", function () {
        if (playerSelected === true && defenderSelected === false) {
            defenderSelected = true;
            $(".Byakuya").appendTo(".Defender")
            DefenderAttack = spiritsName[3].attackStrength;
            DefenderHealth = spiritsName[3].health;
            DefenderBaseAttack = spiritsName[3].attackStrength.baseAttack + 9;
            DefenderName = spiritsName[3].firstName.lastName;
        } else {
            playerSelected = true;
            $(".Ichigo").appendTo(".Enemies")
            $(".Toshiro").appendTo(".Enemies")
            $(".Aizen").appendTo(".Enemies")
            $(".Byakuya").appendTo(".Attacker")
            AttackerAttack = spiritsName[3].attackStrength;
            AttackerHealth = spiritsName[3].health
            AttackerBaseAttack = spiritsName[3].attackStrength.baseAttack + 9;
            AttackerName = spiritsName[3].firstName.lastName;
        }
    })


    // 1. Perform Attack
    // 2. Openent counterattacks
    // 3. Defender gets defeated
    // 4. Reset Game

    function Attack() {
        if (playerSelected === true && defenderSelected === true) {



            switch (spiritsName) {
                case "ichigo":
                    attackerobj = spiritsname[0]
                    break;

                case "byakuya":
                    attackerobj = spiritsName[3]
                    break;

                case "aizen":
                    attackerObj = spiritsName[2]
                    break;

                case "toshiro":
                    attackerobj = spiritsName[1]
                    break;

            }
                switch (spiritsName) {
                    case "ichigo":
                        defenderobj = spiritsName[0]
                        break;
                    case "byakuya":
                        defenderobj = spiritsName[3]
                        break ;
                    case "aizen":
                        defenderobj = spiritsName[2]
                        break;
                    case "toshiro":
                        defenderobj = spiritsName[1]
                        break ;
            }


            atkvalue = attackerobj.AttackStrength
            defvalue = defenderobj.AttackStrength

            // if (attackerName) === “ichigo” {
            // attackerObj = array[0} ;
            // attackerObj.attackStrength
            // defenderobj.health
        }



        ;
    }
}
        Attack(attacker, defender);

$("#engaged").on("click", Attack);
});
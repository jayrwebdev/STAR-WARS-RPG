// Global Variables
var baseAttack = 0 ;
var attacker;
var defender;
var charArray = [];
var playerSelected = false ;
var defenderSelected = false;
var AttackerHealth;
var AttackerAttack;
var AttackerBaseAttack;
var AttackerName ;
var DefenderHealth ;
var DefenderAttack ;
var DefenderBaseAttack ;
var DefenderName ;


var spiritsName = [
    ichigoK = {
        firstName: "Ichigo",
        lastName: "Kurosaki",
        health: 150,
        AttackStrength: 15,
        counterAttackPower: 35 ,
        defense: 30 ,
        attackName: "Getsuga Tensho",
        playerSelected: false  ,
        defenderSelected: false  ,
        image : "<img src=https://pbs.twimg.com/profile_images/813441077143359488/19IuZ93__200x200.jpg></img>",
      },
     toshiroH = {
        firstName: "Toshiro",
        lastName: "Hitsugaya",
        health: 150,
        AttackStrength: 15,
        counterAttackPower: 35 ,
        defense: 50 ,
        attackName: "Ryusenka",
        playerSelected: false ,
        defenderSelected:false ,
        image : "<img src=https://coubsecure-s.akamaihd.net/get/b125/p/channel/cw_avatar/f31ff271247/e27870688af2926f28a46/profile_pic_big_1474489381_lqezkw_att-url-download.jpg></img>",
      },
      sosukeA = {
        firstName: "Aizen",
        lastName: "Sosuke",
        health: 150,
        AttackStrength: 15,
        counterAttackPower: 35 ,
        defense: 50 ,
        attackName: "Hado #99",
        playerSelected: false ,
        defenderSelected: false ,
        image : "<img src=https://avatarfiles.alphacoders.com/177/thumb-177298.png></img>",
      },
       byakuyaK = {
        firstName: "Byakuya",
        lastName: "Kuchiki",
        health: 150,
        attackStrength: 15,
        counterAttackPower: 35 ,
        defense: 50 ,
        attackName: "Senkei Senbonzakura Kageoyshi",
        playerSelected : false ,
        defenderSelected :false ,
        image :"<img src=http://images2.fanpop.com/image/answers/83000/83093_1265923976348_200_200.jpg></img>",
      },
]

 
$(document).ready(function(){
    // Put characters in character div
    for(i=0; i< spiritsName.length; i++)
    {
        var objectPos = spiritsName[i];
        $(".characters").append('<div id =' +objectPos.firstName +'></div>');
      //  $("#players").attr('id', objectPos.idName);
        $("#"+objectPos.firstName).attr('class', objectPos.firstName);
        $("#"+objectPos.firstName).append(objectPos.image);
        $("#"+objectPos.firstName).append("<span> <br>" + objectPos.firstName + "</span>" + "<br>" + "<span class="+objectPos.firstName + "Health>" + "HP: " + objectPos.health + "</span>");
    }

        // Defender Selection
        $(".Ichigo").on("click", function(){
            if ( playerSelected === true && defenderSelected === false) {
            defenderSelected = true;
            $(".Ichigo").appendTo(".Defender")
            DefenderAttack = spiritsName.ichigoK.attackStrength ;
            DefenderHealth = spiritsName.ichigoK.health;
            DefenderBaseAttack = spiritsName.ichigok.attackStrength.baseAttack + 5 ;
            DefenderName = spiritsName.ichigoK.firstName.lastName ;
        }}
        )
   
        $(".Toshiro").on("click", function(){
            if ( playerSelected === true && defenderSelected === false) {
            defenderSelected = true;
            $(".Toshiro").appendTo(".Defender")
            DefenderAttack = spiritsName.toshiroH.attackStrength ;
            DefenderHealth = spiritsName.toshiroH.health;
            DefenderBaseAttack = spiritsName.toshiroH.attackStrength.baseAttack + 8 ;
            DefenderName = spiritsName.toshiroH.firstName.lastName ;
        }})

        $(".Aizen").on("click", function(){
            if ( playerSelected === true && defenderSelected === false) {
            defenderSelected = true;
            $(".Aizen").appendTo(".Defender")
            DefenderAttack = spiritsName.sosukeA.attackStrength ;
            DefenderHealth = spiritsName.sosukeA.health;
            DefenderBaseAttack = spiritsName.sosukeA.attackStrength.baseAttack + 10 ;
            DefenderName = spiritsName.sosukeA.firstName.lastName ;
        }}
        )
    
        $(".Byakuya").on("click", function(){ 
            if ( playerSelected === true && defenderSelected === false) {
            defenderSelected = true;
            $(".Byakuya").appendTo(".Defender")
            DefenderAttack = spiritsName.byakuyaK.attackStrength ;
            DefenderHealth = spiritsName.byakuyaK.health;
            DefenderBaseAttack = spiritsName.byakuyaK.attackStrength.baseAttack + 9 ;
            DefenderName = spiritsName.byakuyaK.firstName.lastName ;
        }}
        )
    
    // when charcters selected move them to different div
    
        $(".Ichigo").on("click", function(){
            if (playerSelected === false & defenderSelected === false) {
            playerSelected = true;
            $(".Ichigo").appendTo(".Attacker")
            $(".Toshiro").appendTo(".Enemies")
            $(".Aizen").appendTo(".Enemies")
            $(".Byakuya").appendTo(".Enemies")
            AttackerAttack = spiritsName.ichigoK.attackStrength;
            AttackerHealth = spiritsName.ichigoK.health
            AttackerBaseAttack = spiritsName.ichigoK.attackStrength.baseAttack + 8 ;
            AttackerName = spiritsName.ichigoK.firstName.lastName ;
        }}
        )

        $(".Toshiro").on("click", function(){
            if (playerSelected === false && defenderSelected === false) {
            playerSelected = true;
            $(".Ichigo").appendTo(".Enemies")
            $(".Toshiro").appendTo(".Attacker")
            $(".Aizen").appendTo(".Enemies")
            $(".Byakuya").appendTo(".Enemies")
            AttackerAttack = spiritsName.toshiroH.attackStrength;
            AttackerHealth = spiritsName.toshiroH.health
            AttackerBaseAttack = spiritsName.toshiroH.attackStrength.baseAttack + 8 ;
            AttackerName = spiritsName.toshiroH.firstName.lastName ;
        }}
        )
    
        $(".Aizen").on("click", function(){
            if (playerSelected === false && defenderSelected === false) {
            playerSelected = true;
            $(".Ichigo").appendTo(".Enemies")
            $(".Toshiro").appendTo(".Enemies")
            $(".Aizen").appendTo(".Attacker")
            $(".Byakuya").appendTo(".Enemies")
            AttackerAttack = spiritsName.sosukeA.attackStrength;
            AttackerHealth = spiritsName.sosukeA.health
            AttackerBaseAttack = spiritsName.sosukeA.attackStrength.baseAttack + 10 ;
            AttackerName = spiritsName.sosukeA.firstName.lastName ;
        }}
        )

        $(".Byakuya").on("click", function(){
             if (playerSelected === false && defenderSelected === false) {
            playerSelected = true;
            $(".Ichigo").appendTo(".Enemies")
            $(".Toshiro").appendTo(".Enemies")
            $(".Aizen").appendTo(".Enemies")
            $(".Byakuya").appendTo(".Attacker")
            AttackerAttack = spiritsName.byakuyaK.attackStrength;
            AttackerHealth = spiritsName.byakuyaK.health
            AttackerBaseAttack = spiritsName.byakuyaK.attackStrength.baseAttack + 9 ;
            AttackerName = spiritsName.ichigoK.firstName.lastName ;
        }}
        )
        // 1. Perform Attack
        // 2. Openent counterattacks
        // 3. Defender gets defeated
        // 4. Brings in new openent
        
        function Attack() {
              if (playerSelected === true && defenderSelected === true) {
                   DefenderHealth -=  AttackerAttack
                   $("#attackerStatus").html(AttackerName + "used" + attackName + "for" + AttackerAttack + "damage" );
                   $("#defenderStatus").html(DefenderName + "took damage from" + AttackerName + "for" + AttackerAttack);
              }
        }
        Attack();

        $("#engaged").on("click", Attack);
});
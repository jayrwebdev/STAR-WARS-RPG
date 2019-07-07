// Global Variables
var baseAttack = 0
var player;
var defender;
var charArray = [];
var playerSelected = false ;
var defenderSelected = false;


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
        }}
        )
   
        $(".Toshiro").on("click", function(){
            if ( playerSelected === true && defenderSelected === false) {
            defenderSelected = true;
            $(".Toshiro").appendTo(".Defender")
        }})

        $(".Aizen").on("click", function(){
            if ( playerSelected === true && defenderSelected === false) {
            defenderSelected = true;
            $(".Aizen").appendTo(".Defender")
        }}
        )
    
        $(".Byakuya").on("click", function(){ 
            if ( playerSelected === true && defenderSelected === false) {
            defenderSelected = true;
            $(".Byakuya").appendTo(".Defender")
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

        }}
        )

        $(".Toshiro").on("click", function(){
            if (playerSelected === false && defenderSelected === false) {
            playerSelected = true;
            $(".Ichigo").appendTo(".Enemies")
            $(".Toshiro").appendTo(".Attacker")
            $(".Aizen").appendTo(".Enemies")
            $(".Byakuya").appendTo(".Enemies")
        }}
        )
    
        $(".Aizen").on("click", function(){
            if (playerSelected === false && defenderSelected === false) {
            playerSelected = true;
            $(".Ichigo").appendTo(".Enemies")
            $(".Toshiro").appendTo(".Enemies")
            $(".Aizen").appendTo(".Attacker")
            $(".Byakuya").appendTo(".Enemies")
        }}
        )

        $(".Byakuya").on("click", function(){
             if (playerSelected === false && defenderSelected === false) {
            playerSelected = true;
            $(".Ichigo").appendTo(".Enemies")
            $(".Toshiro").appendTo(".Enemies")
            $(".Aizen").appendTo(".Enemies")
            $(".Byakuya").appendTo(".Attacker")
        }}
        )
    
        // Increase attack strength
        spiritsName.prototype.increaseAttack = function() {
            this.attackStrength += baseAttack;
        }
        // Perform attack
        

    
});
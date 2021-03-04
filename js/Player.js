class Player{
    constructor(){
        this.name;
        this.index;
    }

     getCount(){
        var playerCountRef = database.ref('games/'+reference+'/playerCount');
        playerCountRef.on("value",(data)=>{
        playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('games/'+reference).update({
            playerCount: count
        });
    }

    update(){
        var playerIndex = "games/"+reference+"/players/player" + this.index;
        database.ref(playerIndex).set({
        name:this.name
        });
    }

    static getPlayerInfo(){
    var playerInfoRef = database.ref('games/'+reference+'/players');
    playerInfoRef.on("value",function(data){
      allPlayers = data.val();
    })
  }

    

}
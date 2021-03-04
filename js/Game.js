class Game{
    constructor(){}

    getState(){
        database.ref("games/"+reference+"/gameState").on("value",(data)=>{
            gameState = data.val();
        })
    }

    update(state){
        database.ref('games/'+reference).update({
        gameState: state
        });
    }

    async start(){
        player = new Player();
        player.name = form.nameI.value();
        var playerCountRef = await database.ref('games/'+reference+'/playerCount').once("value");
        if(playerCountRef.exists()){
            player.getCount();
        }
        Player.getPlayerInfo();
    }

    createForm(){
        form = new Form();
        form.display();
    }

    createGame(){
        console.log(randomCode);
        database.ref("games/"+randomCode).set({
            playerCount: 0,
            gameState: 0
        })
    }

    joinGame(){
        database.ref('games').once("value",(data)=>{
            if(data.hasChild(codeEntered)){
                reference = codeEntered;
                gameState0 = 4;
                form.button2.hide();
                form.nameI.hide();
                form.codeI.hide();
                game.start(); 
                
            }else{
                alert("Couldn't find the game you are looking for");
            }
        })
    }
}
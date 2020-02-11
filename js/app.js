const game = {
    loteriaCards:[
        {
            name: 'alacran',
            url:''
        },{
            name: 'arana',
            url:''
        },{
            name: 'arpa',
            url:''
        },{
            name: 'bailador',
            url:''
        },{
            name: 'bandera',
            url:''
        },{
            name: 'bandolon',
            url:''
        },{
            name: 'barril',
            url:''
        },{
            name: 'borracho',
            url:''
        },{
            name: 'bota',
            url:''
        },{
            name: 'botella',
            url:''
        },{
            name: 'calavera',
            url:''
        },{
            name: 'camaron',
            url:''
        },{
            name: 'campana',
            url:''
        },{
            name: 'cantarito',
            url:''
        },{
            name: 'catrin',
            url:''
        },{
            name: 'cazo',
            url:''
        },{
            name: 'chalupa',
            url:''
        },{
            name: 'corazon',
            url:''
        },{
            name: 'corona',
            url:''
        },{
            name: 'cotorro',
            url:''
        },{
            name: 'dama',
            url:''
        },{
            name: 'diablito',
            url:''
        },{
            name: 'domador',
            url:''
        },{
            name: 'escalera',
            url:''
        },{
            name: 'estrella',
            url:''
        },{
            name: 'gallo',
            url:''
        },{
            name: 'garza',
            url:''
        },{
            name: 'gorrito',
            url:''
        },{
            name: 'jaras',
            url:''
        },{
            name:'luna',
            url:''
        },{
            name:'maceta',
            url:''
        },{
            name: 'mano',
            url:''
        },{
            name: 'melon',
            url:''
        },{
            name: 'muerte',
            url:''
        },{
            name: 'mundo',
            url:''
        },{
            name: 'musico',
            url:''
        },{
            name: 'nopal',
            url:''
        },{
            name: 'pajaro',
            url:''
        },{
            name: 'palma',
            url:''
        },{
            name: 'paraguas',
            url:''
        },{
            name:'pera',
            url:''
        },{
            name: 'pescado',
            url:''
        },{
            name: 'pino',
            url:''
        },{
            name: 'rana',
            url:''
        },{
            name: 'rosa',
            url:''
        },{
            name: 'sandia',
            url:''
        },{
            name: 'sirena',
            url:''
        },{
            name: 'sol',
            url:''
        },{
            name: 'soldado',
            url:''
        },{
            name: 'tambor',
            url:''
        },{
            name: 'valiente',
            url:''
        },{
            name: 'venado',
            url:''
        },{
            name: 'violoncello',
            url:''
        }
    ],
    player:{
        
        board:[],
    },
    CPU:{
    
        board:[],
    },
    
    //initialize game
    init: function(){
        console.log('initializing....')
        let table = document.querySelector('table');
        table.parentNode.removeChild(table);
        let aside = document.querySelector('aside')
        aside.parentNode.removeChild(aside);
        let welcome = document.getElementById('welcome');
        welcome.innerHTML = "WELCOME!!"
        let instructions = document.getElementById('instructions')
        instructions.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        let startBtn = document.querySelector('.start-btn');
        startBtn.addEventListener('click', game.gameplayLoop);
    
    },

    gameplayLoop: function(){
        //shuffle objects in card array
        game.shuffleCards(game.loteriaCards);
        game.createPlayerBoard(game.loteriaCards);
        game.shuffleCards(game.loteriaCards);
        game.createCPUBoard(game.loteriaCards);
        
        //load game board
        //initialize boards for user and CPU
        //generate game board for user that they see - randomize photos to table
        //shuffle deck
        //draw cards
        //match cards
        //assess if theres a match for user or CPU
        //put used card into a new array?
        //print loteria when theres a winner
    },
    shuffleCards: function(array){
        console.log('shuffle is running')
        for (let i = array.length; i>0; i--){
            const j = Math.floor(Math.random()*(i+1));
            [array[i], array[j]]= [array[j], array[i]];
        }
            return (game.loteriaCards)
    },
    createPlayerBoard: function(array){
        //select 16 into an array for game.player.board
        console.log('creating board for player')
        for (let i=0; i<=15; i++){
            game.player.board.push(game.loteriaCards[i])
        }
        console.log(game.player.board)

    },

    createCPUBoard: function(array){
        //select 16 into an array for game.CPU.board
        console.log('creating board for CPU')
        for (let i=0; i<=15; i++){
            game.CPU.board.push(game.loteriaCards[i])
        }
        console.log(game.CPU.board)
    },
}
    
       

    


game.init()

//game.shuffleCards(game.loteriaCards);
//console.log(game.loteriaCards);




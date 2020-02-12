const game = {
    loteriaCards:[
        {
            name: 'alacran',
            url:'images/loteria_cards/alacran.jpg'
        },{
            name: 'arana',
            url:'images/loteria_cards/arana.jpg'
        },{
            name: 'arpa',
            url:'images/loteria_cards/arpa.jpg'
        },{
            name: 'bailador',
            url:'images/loteria_cards/bailador.jpg'
        },{
            name: 'bandera',
            url:'images/loteria_cards/bandera.jpg'
        },{
            name: 'bandolon',
            url:'images/loteria_cards/bandolon.jpg'
        },{
            name: 'barril',
            url:'images/loteria_cards/barril.jpg'
        },{
            name: 'borracho',
            url:'images/loteria_cards/borracho.jpg'
        },{
            name: 'bota',
            url:'images/loteria_cards/bota.jpg'
        },{
            name: 'botella',
            url:'images/loteria_cards/botella.jpg'
        },{
            name: 'calavera',
            url:'images/loteria_cards/calavera.jpg'
        },{
            name: 'camaron',
            url:'images/loteria_cards/camaron.jpg'
        },{
            name: 'campana',
            url:'images/loteria_cards/campana.jpg'
        },{
            name: 'cantarito',
            url:'images/loteria_cards/cantarito.jpg'
        },{
            name: 'catrin',
            url:'images/loteria_cards/catrin.jpg'
        },{
            name: 'cazo',
            url:'images/loteria_cards/cazo.jpg'
        },{
            name: 'chalupa',
            url:'images/loteria_cards/chalupa.jpg'
        },{
            name: 'corazon',
            url:'images/loteria_cards/corazon.jpg'
        },{
            name: 'corona',
            url:'images/loteria_cards/corona.jpg'
        },{
            name: 'cotorro',
            url:'images/loteria_cards/cotorro.jpg'
        },{
            name: 'dama',
            url:'images/loteria_cards/dama.jpg'
        },{
            name: 'diablito',
            url:'images/loteria_cards/diablito.jpg'
        },{
            name: 'domador',
            url:'images/loteria_cards/domador.jpg'
        },{
            name: 'escalera',
            url:'images/loteria_cards/escalera.jpg'
        },{
            name: 'estrella',
            url:'images/loteria_cards/estrella.jpg'
        },{
            name: 'gallo',
            url:'images/loteria_cards/gallo.jpg'
        },{
            name: 'garza',
            url:'images/loteria_cards/gallo.jpg'
        },{
            name: 'gorrito',
            url:'images/loteria_cards/gorrito.jpg'
        },{
            name: 'jaras',
            url:'images/loteria_cards/jaras.jpg'
        },{
            name:'luna',
            url:'images/loteria_cards/luna.jpg'
        },{
            name:'maceta',
            url:'images/loteria_cards/maceta.jpg'
        },{
            name: 'mano',
            url:'images/loteria_cards/mano.jpg'
        },{
            name: 'melon',
            url:'images/loteria_cards/melon.jpg'
        },{
            name: 'muerte',
            url:'images/loteria_cards/muerte.jpg'
        },{
            name: 'mundo',
            url:'images/loteria_cards/mundo.jpg'
        },{
            name: 'musico',
            url:'images/loteria_cards/musico.jpg'
        },{
            name: 'nopal',
            url:'images/loteria_cards/nopal.jpg'
        },{
            name: 'pajaro',
            url:'images/loteria_cards/pajaro.jpg'
        },{
            name: 'palma',
            url:'images/loteria_cards/palma.jpg'
        },{
            name: 'paraguas',
            url:'images/loteria_cards/paraguas.jpg'
        },{
            name:'pera',
            url:'images/loteria_cards/pera.jpg'
        },{
            name: 'pescado',
            url:'images/loteria_cards/pescado.jpg'
        },{
            name: 'pino',
            url:'images/loteria_cards/pino.jpg'
        },{
            name: 'rana',
            url:'images/loteria_cards/rana.jpg'
        },{
            name: 'rosa',
            url:'images/loteria_cards/rosa.jpg'
        },{
            name: 'sandia',
            url:'images/loteria_cards/sandia.jpg'
        },{
            name: 'sirena',
            url:'images/loteria_cards/sirena.jpg'
        },{
            name: 'sol',
            url:'images/loteria_cards/sol.jpg'
        },{
            name: 'soldado',
            url:'images/loteria_cards/soldado.jpg'
        },{
            name: 'tambor',
            url:'images/loteria_cards/tambor.jpg'
        },{
            name: 'valiente',
            url:'images/loteria_cards/valiente.jpg'
        },{
            name: 'venado',
            url:'images/loteria_cards/venado.jpg'
        },{
            name: 'violoncello',
            url:'images/loteria_cards/violoncello.jpg'
        }
    ],
    player:{
        
        board:[],
    },
    CPU:{
    
        board:[],
    },
    winningCombos: [

        /* horizontal combos */
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15]

        /* vertical combos */
        
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15]

        /*diagonal combos*/

        [0,5,10,15],
        [3,6,9,12]
    ],
    cardsInPlay: [

    ],
    
    //initialize game
    init: function(){
        console.log('initializing....')
        let table = document.querySelector('table').style.display = "none";
        let aside = document.querySelector('aside').style.display = "none";
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
        game.playerBoardSelects(game.loteriaCards);
        game.shuffleCards(game.loteriaCards);
        game.cpuBoardSelects();
        game.createPlayerBoard(game.player.board);
        game.loadGameBoard(game.loadGameBoard);
    },

    createPlayerBoard: function(array){
        console.log('ARRAY' + array);
        //generate game board for user that they see
        let squares = document.querySelectorAll('td');
        for (let i=0; i<game.player.board.length; i++){
            // let cardId = (game.player.board[i])
            for (let j=0; j<squares.length; j++) {
                if (j === i){
                    // console.log(squares[i]);
                    let image = document.createElement('img');
                    image.setAttribute('src', array[i].url)
                    squares[i].appendChild(image);
                }
            }
        }
    }, 
    
    loadGameBoard: function(){
        //load game board
        let welcomeContainer = document.querySelector('.welcome-container').style.display = "none"
        document.querySelector('table').style.display = 'flex'
        document.querySelector('aside').style.display = 'flex'
    },
        //initialize boards for user and CPU


        
        //shuffle deck
        //draw cards/flip cards
        //match cards
        //assess if theres a match for user or CPU
        //put used card into a new array?
        //print loteria when theres a winner
    
    shuffleCards: function (array){
        console.log('shuffle is running')
        for (let i = array.length - 1; i>0; i--){
            const j = Math.floor(Math.random()*(i + 1));
            [array[i], array[j]]= [array[j], array[i]];
        }
            return (game.loteriaCards)
    },
    playerBoardSelects: function(array){
        //select 16 into an array for game.player.board
        console.log('creating array for player board')
        for (let i=0; i<=15; i++){
            game.player.board.push(game.loteriaCards[i])
        }
        console.log(game.player.board)

    },
    cpuBoardSelects: function (array){
        //select 16 into an array for game.CPU.board
        console.log('creating array for cpu board')
        for (let i=0; i<=15; i++){
            game.CPU.board.push(game.loteriaCards[i])
        }
        console.log(game.CPU.board)
    },
}
    
game.init()






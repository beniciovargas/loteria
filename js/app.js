const game = {
    loteriaCards:[
        {
            name: 'alacran',
            url:'images/loteria_cards/alacran.jpg',
            value: 'null'
        },{
            name: 'arana',
            url:'images/loteria_cards/arana.jpg',
            value: 'null'
        },{
            name: 'arpa',
            url:'images/loteria_cards/arpa.jpg',
            value: 'null'
        },{
            name: 'bailador',
            url:'images/loteria_cards/bailador.jpg',
            value: 'null'
        },{
            name: 'bandera',
            url:'images/loteria_cards/bandera.jpg',
            value: 'null'
        },{
            name: 'bandolon',
            url:'images/loteria_cards/bandolon.jpg',
            value: 'null'
        },{
            name: 'barril',
            url:'images/loteria_cards/barril.jpg',
            value: 'null'
        },{
            name: 'borracho',
            url:'images/loteria_cards/borracho.jpg',
            value: 'null'
        },{
            name: 'bota',
            url:'images/loteria_cards/bota.jpg',
            value: 'null'
        },{
            name: 'botella',
            url:'images/loteria_cards/botella.jpg',
            value: 'null'
        },{
            name: 'calavera',
            url:'images/loteria_cards/calavera.jpg',
            value: 'null'
        },{
            name: 'camaron',
            url:'images/loteria_cards/camaron.jpg',
            value: 'null'
        },{
            name: 'campana',
            url:'images/loteria_cards/campana.jpg',
            value: 'null'
        },{
            name: 'cantarito',
            url:'images/loteria_cards/cantarito.jpg',
            value: 'null'
        },{
            name: 'catrin',
            url:'images/loteria_cards/catrin.jpg',
            value: 'null'
        },{
            name: 'cazo',
            url:'images/loteria_cards/cazo.jpg',
            value: 'null'
        },{
            name: 'chalupa',
            url:'images/loteria_cards/chalupa.jpg',
            value: 'null'
        },{
            name: 'corazon',
            url:'images/loteria_cards/corazon.jpg',
            value: 'null'
        },{
            name: 'corona',
            url:'images/loteria_cards/corona.jpg',
            value: 'null'
        },{
            name: 'cotorro',
            url:'images/loteria_cards/cotorro.jpg',
            value: 'null'
        },{
            name: 'dama',
            url:'images/loteria_cards/dama.jpg',
            value: 'null'
        },{
            name: 'diablito',
            url:'images/loteria_cards/diablito.jpg',
            value: 'null'
        },{
            name: 'domador',
            url:'images/loteria_cards/domador.jpg',
            value: 'null'
        },{
            name: 'escalera',
            url:'images/loteria_cards/escalera.jpg',
            value: 'null'
        },{
            name: 'estrella',
            url:'images/loteria_cards/estrella.jpg',
            value: 'null'
        },{
            name: 'gallo',
            url:'images/loteria_cards/gallo.jpg',
            value: 'null'
        },{
            name: 'garza',
            url:'images/loteria_cards/gallo.jpg',
            value: 'null'
        },{
            name: 'gorrito',
            url:'images/loteria_cards/gorrito.jpg',
            value: 'null'
        },{
            name: 'jaras',
            url:'images/loteria_cards/jaras.jpg',
            value: 'null'
        },{
            name:'luna',
            url:'images/loteria_cards/luna.jpg',
            value: 'null'
        },{
            name:'maceta',
            url:'images/loteria_cards/maceta.jpg',
            value: 'null'
        },{
            name: 'mano',
            url:'images/loteria_cards/mano.jpg',
            value: 'null'
        },{
            name: 'melon',
            url:'images/loteria_cards/melon.jpg',
            value: 'null'
        },{
            name: 'muerte',
            url:'images/loteria_cards/muerte.jpg',
            value: 'null'
        },{
            name: 'mundo',
            url:'images/loteria_cards/mundo.jpg',
            value: 'null'
        },{
            name: 'musico',
            url:'images/loteria_cards/musico.jpg',
            value: 'null'
        },{
            name: 'nopal',
            url:'images/loteria_cards/nopal.jpg',
            value: 'null'
        },{
            name: 'pajaro',
            url:'images/loteria_cards/pajaro.jpg',
            value: 'null'
        },{
            name: 'palma',
            url:'images/loteria_cards/palma.jpg',
            value: 'null'
        },{
            name: 'paraguas',
            url:'images/loteria_cards/paraguas.jpg',
            value: 'null'
        },{
            name:'pera',
            url:'images/loteria_cards/pera.jpg',
            value: 'null'
        },{
            name: 'pescado',
            url:'images/loteria_cards/pescado.jpg',
            value: 'null'
        },{
            name: 'pino',
            url:'images/loteria_cards/pino.jpg',
            value: 'null'
        },{
            name: 'rana',
            url:'images/loteria_cards/rana.jpg',
            value: 'null'
        },{
            name: 'rosa',
            url:'images/loteria_cards/rosa.jpg',
            value: 'null'
        },{
            name: 'sandia',
            url:'images/loteria_cards/sandia.jpg',
            value: 'null'
        },{
            name: 'sirena',
            url:'images/loteria_cards/sirena.jpg',
            value: 'null'
        },{
            name: 'sol',
            url:'images/loteria_cards/sol.jpg',
            value: 'null'
        },{
            name: 'soldado',
            url:'images/loteria_cards/soldado.jpg',
            value: 'null'
        },{
            name: 'tambor',
            url:'images/loteria_cards/tambor.jpg',
            value: 'null'
        },{
            name: 'valiente',
            url:'images/loteria_cards/valiente.jpg',
            value: 'null'
        },{
            name: 'venado',
            url:'images/loteria_cards/venado.jpg',
            value: 'null'
        },{
            name: 'violoncello',
            url:'images/loteria_cards/violoncello.jpg',
            value: 'null'
        }
    ],
    player:{
        
        board:[],
        win: false
    },
    CPU:{
    
        board:[],
        win: false
    },

    cardsInPlay: [],
    usedCards:[],
    
    
    init: function(){
    //initialize game
        console.log('initializing....')
        let table = document.querySelector('table').style.display = "none";
        let aside = document.querySelector('aside').style.display = "none";
        document.querySelector('.player-win-screen').style.display = "none";
        document.querySelector('.cpu-win-screen').style.display = "none";
        document.querySelector('.tie-screen').style.display= "none";
        let welcome = document.getElementById('welcome');
        welcome.innerHTML = "how to play:";
        let instructions = document.getElementById('instructions');
        instructions.innerHTML = "Play against the CPU and see who gets a match of 4 first! Click on the deck on draw cards.";
        let startBtn = document.querySelector('.start-btn');
        startBtn.addEventListener('click', game.gameplayLoop);
    
    },

    gameplayLoop: function(){
        game.shuffleBoards(game.loteriaCards);
        game.playerBoardSelects(game.loteriaCards);
        game.shuffleBoards(game.loteriaCards);
        game.cpuBoardSelects(game.loteriaCards);
        game.createPlayerBoard(game.player.board);
        game.loadGameBoard(game.loadGameBoard);
        game.shuffleDeck(game.loteriaCards);
        game.drawCards(game.cardsInPlay);
       
    },

    shuffleBoards: function (array){
        //shuffle objects in card array to create boards
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
        return game.player.board

    },
    cpuBoardSelects: function (array){
        //select 16 into an array for game.CPU.board
        console.log('creating array for cpu board')
        for (let i=0; i<=15; i++){
            game.CPU.board.push(game.loteriaCards[i])
        }
        return game.CPU.board
    },
    createPlayerBoard: function(array){
        //generate visual game board for user
        let squares = document.querySelectorAll('td');
        for (let i=0; i<game.player.board.length; i++){
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
        //load visual game board for player on main screen
        let welcomeContainer = document.querySelector('.welcome-container').style.display = "none"
        document.querySelector('table').style.display = 'flex'
        document.querySelector('aside').style.display = 'flex'
    },
    shuffleDeck: function(array){
        //shuffle objects in card array for drawing from
        console.log('shuffling deck')
        for (let i = array.length - 1; i>0; i--){
            const j = Math.floor(Math.random()*(i + 1));
            [array[i], array[j]]= [array[j], array[i]];
        }
        game.cardsInPlay.push(array);
        return (game.cardsInPlay)
    },
    drawCards: function(array){
        //drawing cards
        let deck = document.getElementById('deck');
        deck.addEventListener('click', game.checkPlayerMatch);
        deck.addEventListener('click', game.checkCPUMatch)
        deck.addEventListener('click', game.checkForPlayerWin)
        deck.addEventListener('click', game.checkForCPUWin)
        deck.addEventListener('click', game.removeUsedCard);
    },   
        checkPlayerMatch: function(){
            //check for match on board
            deck.src = game.cardsInPlay[0][0].url
            for (let i=0; i<game.player.board.length; i++){
                if (game.cardsInPlay[0][0] === game.player.board[i]){
                    console.log('we have a match!')
                    game.player.board[i].value = 'match'
                    game.addCircle(i)
                }
            }
        },
            addCircle: function(index){
                console.log('trying to create circle', index)
                let tableCells =  document.getElementsByClassName('carta');

                let circle = document.createElement('img');
                circle.setAttribute('src', 'images/circle.png')
                circle.setAttribute('class', 'match-circle')
                tableCells[index].appendChild(circle);
            },

        checkCPUMatch: function(){
            //check for match on board
            deck.src = game.cardsInPlay[0][0].url
            for (let i=0; i<game.CPU.board.length; i++){
                if (game.cardsInPlay[0][0] === game.CPU.board[i]){
                    console.log('CPU has a match!')
                    game.CPU.board[i].value = 'match'
                }
            }
        },

        removeUsedCard: function(){
            let usedCard =  (game.cardsInPlay[0]).shift()
            game.usedCards.push(usedCard)
        },

        checkForPlayerWin: function(){
            //EVAL FOR WINNING COMBO
            //CHECK FOR HORIZONTAL MATCHES
            if (game.player.board[0].value === 'match' && game.player.board[1].value === 'match' && game.player.board[2].value === 'match' && game.player.board[3].value=== 'match'){
                game.player.win = true;
                game.didWeTie();
                
            }else if (game.player.board[4].value === 'match' && game.player.board[5].value === 'match' && game.player.board[6].value === 'match' && game.player.board[7].value=== 'match'){
                game.player.win = true;
                game.didWeTie();

                
            }else if (game.player.board[8].value === 'match' && game.player.board[9].value === 'match' && game.player.board[10].value === 'match' && game.player.board[11].value=== 'match'){
                game.player.win = true;
                game.didWeTie();
                
            }else if (game.player.board[12].value === 'match' && game.player.board[13].value === 'match' && game.player.board[14].value === 'match' && game.player.board[15].value=== 'match'){
                game.player.win = true;
                game.didWeTie();
                
            }
            //CHECK FOR VERTICAL MATCHES
            else if (game.player.board[0].value === 'match' && game.player.board[4].value === 'match' && game.player.board[8].value === 'match' && game.player.board[12].value === 'match'){
                game.player.win = true;
                game.didWeTie();
                
            }else if (game.player.board[1].value === 'match' && game.player.board[5].value === 'match' && game.player.board[9].value === 'match' && game.player.board[13] === 'match'){
                game.player.win = true;
                game.didWeTie();
                
            }else if (game.player.board[2].value === 'match' && game.player.board[6].value === 'match' && game.player.board[10].value === 'match' && game.player.board[14].value === 'match'){
                game.player.win = true;
                game.didWeTie();
                
            }else if (game.player.board[3].value === 'match' && game.player.board[7].value === 'match' && game.player.board[11].value === 'match' && game.player.board[15].value === 'match'){
                game.player.win = true;
                game.didWeTie();   
                
            }
            //CHECK FOR DIAGONAL MATCHES
            else if (game.player.board[0].value === 'match' && game.player.board[5].value === 'match' && game.player.board[10].value === 'match' && game.player.board[15].value === 'match'){
                game.player.win = true;
                game.didWeTie();
                
            }else if (game.player.board[3].value === 'match' && game.player.board[6].value === 'match' && game.player.board[9].value === 'match' && game.player.board[12].value === 'match'){
                game.player.win = true;
                game.didWeTie();
                
            }
        },

        checkForCPUWin: function(){
            //EVAL FOR WINNING COMBO
            //CHECK FOR HORIZONTAL MATCHES
            if (game.CPU.board[0].value === 'match' && game.CPU.board[1].value === 'match' && game.CPU.board[2].value === 'match' && game.CPU.board[3].value === 'match'){
                game.CPU.win = true;
                game.didWeTie();
                
            }else if (game.CPU.board[4].value === 'match' && game.CPU.board[5].value === 'match' && game.CPU.board[6].value === 'match' && game.CPU.board[7].value === 'match'){
                game.CPU.win = true;
                game.didWeTie()
                
            }else if (game.CPU.board[8].value === 'match' && game.CPU.board[9].value === 'match' && game.CPU.board[10].value === 'match' && game.CPU.board[11].value === 'match'){
                game.CPU.win = true;
                game.didWeTie()
                
            }else if (game.CPU.board[12].value === 'match' && game.CPU.board[13].value === 'match' && game.CPU.board[14].value === 'match' && game.CPU.board[15].value === 'match'){
                game.CPU.win = true;
                game.didWeTie()
                
            }
            //CHECK FOR VERTICAL MATCHES
            else if (game.CPU.board[0].value === 'match' && game.CPU.board[4].value === 'match' && game.CPU.board[8].value === 'match' && game.CPU.board[12].value === 'match'){
                game.CPU.win = true;
                game.didWeTie()
                
            }else if (game.CPU.board[1].value === 'match' && game.CPU.board[5].value === 'match' && game.CPU.board[9].value === 'match' && game.CPU.board[13].value === 'match'){
                game.CPU.win = true;
                game.didWeTie()
                
            }else if (game.CPU.board[2].value === 'match' && game.CPU.board[6].value === 'match' && game.CPU.board[10].value === 'match' && game.CPU.board[14].value === 'match'){
                game.CPU.win = true;
                game.didWeTie()
                
            }else if (game.CPU.board[3].value === 'match' && game.CPU.board[7].value === 'match' && game.CPU.board[11].value === 'match' && game.CPU.board[15].value === 'match'){
                game.CPU.win = true;
                game.didWeTie() 
                  
            }
            //CHECK FOR DIAGONAL MATCHES
            else if (game.CPU.board[0].value === 'match' && game.CPU.board[5].value === 'match' && game.CPU.board[10].value === 'match' && game.CPU.board[15].value === 'match'){
                game.CPU.win = true;
                game.didWeTie()
                
            }else if (game.CPU.board[3].value === 'match' && game.CPU.board[6].value === 'match' && game.CPU.board[9].value === 'match' && game.CPU.board[12].value === 'match'){
                game.CPU.win = true;
                game.didWeTie()
                
            }
        },
                playerWinScreen: function(){
                    document.querySelector('table').style.display = "none";
                    document.querySelector('aside').style.display = "none";
                    let playerWin = document.querySelector('.player-win-screen');
                    playerWin.style.display = "flex";
                    let playerWinHeading = document.getElementById('player-win');
                    playerWinHeading.innerHTML = "LOTERIA! \n You win!";
                    let playAgainBtn = document.createElement('button');
                    playAgainBtn.innerHTML = 'play again';
                    playAgainBtn.setAttribute('class', 'play-again-btn');
                    playAgainBtn.addEventListener('click', game.reset)
                    playerWin.appendChild(playAgainBtn);
                },
                cpuWinScreen: function(){
                    document.querySelector('table').style.display = "none";
                    document.querySelector('aside').style.display = "none";
                    let cpuWin = document.querySelector('.cpu-win-screen');
                    cpuWin.style.display = "flex";
                    let cpuWinHeading = document.getElementById('cpu-win');
                    cpuWinHeading.innerHTML = "SORRY, CPU WINS!!";
                    let playAgainBtn = document.createElement('button');
                    playAgainBtn.innerHTML = 'play again';
                    playAgainBtn.setAttribute('class', 'play-again-btn');
                    playAgainBtn.addEventListener('click', game.reset)
                    cpuWin.appendChild(playAgainBtn);
                },
                tieScreen: function(){
                    document.querySelector('table').style.display = "none";
                    document.querySelector('aside').style.display = "none";
                    let tieScreen = document.querySelector('.tie-screen');
                    tieScreen.style.display = "flex";
                    let tieScreenHeading = document.getElementById('tie');
                    tieScreenHeading.innerHTML = "it's a tie!";
                    let playAgainBtn = document.createElement('button');
                    playAgainBtn.innerHTML = 'play again';
                    playAgainBtn.setAttribute('class', 'play-again-btn');
                    playAgainBtn.addEventListener('click', game.reset)
                    tieScreen.appendChild(playAgainBtn);
                },

                didWeTie: function(){
                    console.log(`did we tie is running`)
                    if (game.player.win && game.CPU.win === true){
                        console.log(`its a tie!!`)
                        game.tieScreen
                    }else if(game.CPU.win === true){
                        console.log(`CPU WON!`)
                        game.cpuWinScreen();
                    }else if(game.player.win === true){
                        console.log(`PLAYER WON!!`)
                        game.playerWinScreen();
                    }

                },


    reset: function(){
        location.reload();
        // let table = document.querySelector('table').style.display = "none";
        // let aside = document.querySelector('aside').style.display = "none";
        // document.querySelector('.player-win-screen').style.display = "none";
        // document.querySelector('.cpu-win-screen').style.display = "none";
        // document.querySelector('.tie-screen').style.display= "none";
        
        // game.player.board = [ ];
        // console.log(game.player.board)
        // game.CPU.board = [ ];
        // console.log(game.CPU.board)
        // game.cardsInPlay = [ ];
        // console.log(game.cardsInPlay)
        // game.usedCards = [ ];
        // console.log(game.usedCards)
        // game.loteriaCards.value = 'null'

        // return game.gameplayLoop(game.loteriaCards)

       
    }
    
}
    
game.init()






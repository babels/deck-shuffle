

function deal() {
  /* initialize arrays */

   function fillArrayWithNumbers(n) {
        var arr = Array.apply(null, Array(n));
        return arr.map(function (x, i) { return i });
    }

/* Randomize array in-place using Durstenfeld shuffle algorithm */
 function shuffleArray( array ) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

  function retCard( card ) {
    /* identifies paint and returns actual card by relative index */

    if( dx == (mod -1) ) st = st +1;		  // 1 - 4 suits

    if( dx < 2 || dx > 10 )	{							// identify paint;
      if( dx > 10) dx = dx - 9;						// paint index is 0, 1, 12, 13 for A J Q K

         card = paint[dx];
    } else {

      card = dx;     
    }
  }

  var dlen   =  52;                       // deck length

  var cards = fillArrayWithNumbers( dlen );
  var suits  =  [ "H", "D", "C", "S" ];        // suit
  var paint  =  [ "A", "J", "Q", "K" ];        // if( i > 10; cards = paint[i-10] )
  var mod    =  dlen / suits.length;     	// modulus for index to determain suit == 13
 
  var st = 0;															// current suit

  for (index = 0; index < cards.length; index++) { 

    var dx  =  index % mod;							  // gives us 1-13 per suit
      suit  =  suits[st];									// magic

    var card = retCard( card );						// cards are cool


   // console.log("card index " + index  + " dx "  + card + " suit " + suit);

    cards[index] = card + " " + suit;			// PRE HOOK HERE

  }  
  shuffleArray( cards );								 	// shuffle cards


  /* POST HOOK HERE */

 for (index = 0; index < cards.length; index++) { 	// print all in array
    console.log( cards[index]); 					// do some thing with card
  } 

} deal();

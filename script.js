$(function() {
	var size = 960/ 16
	makeSquares(16, size)


    function makeSquares(numSquares, size){
    	for (var x = 0; x < numSquares; x++) {
            for (var y = 0; y < numSquares; y++) {
                $("<div>").addClass("unit").appendTo('#container');
            }
        }

        $('.unit').css('width', size)
    	$('.unit').css('height', size)

        $(".unit").mouseover(function() {
        $(event.target).css( 'background-color', 'black');
        });
    };

    $('#button').click(function() {
    	$('div.unit').remove()

    	var numSquares = prompt("How many squares per side would you like?");
    	if(numSquares > 960){
    		numSquares = 960
    	}
    	var newSize = Math.floor(960/ numSquares)
    	makeSquares(numSquares, newSize)
    });
});


$(document).ready(function(){
	var playNum = 0;
  var playerSelect = true;
	$('#p1').click(function(){
		if(playerSelect){
			$('#p1').html('<h2>X</h2>');
			$('#p2').html('<h2>O</h2>');
			playerSelect = false;
			playNum = 1;
		}
		else{
			gameStart(playNum, 'X');
		}
	});
	$('#p2').click(function(){
		if(playerSelect){
			$('#p1').html('<h2>X</h2>');
			$('#p2').html('<h2>O</h2>');
			playerSelect = false;
			playNum = 2;
		}
		else{
			gameStart(playNum, 'O');
		}
	});
	function gameStart(num, character){
		$('.square').html('');
		var char = character;
		var squareArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
		var charArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
		var number = num;
		var index;
		var index2;
		$('#winner').toggleClass('invisible');
		$('#choose').toggleClass('invisible');
		$('#game').toggleClass('invisible');
		$('.square').click(function(){
			var squareName = $(this).attr('id');
			if(squareArr.indexOf(squareName) > -1){
				$(this).html(char);
			}
			else{
				return;
			}
			index = squareArr.indexOf(squareName);
			index2 = charArr.indexOf(squareName);
			charArr.splice(index2, 1, char);
			squareArr.splice(index, 1);
			char = charChange(char);
			var compIndex = Math.round(Math.random()*100)%(squareArr.length);
			var compChoice =  squareArr[compIndex];
			if(number === 1){
				$('#' + compChoice).html(char);
				index = squareArr.indexOf(compChoice);
				index2 = charArr.indexOf(compChoice);
				charArr.splice(index2, 1, char);
				squareArr.splice(index, 1);
				char = charChange(char);
			}
			if(checkWinner(charArr, squareArr)){
				console.log(checkWinner(charArr, squareArr));
				$('.square').html('');
				$('#game').toggleClass('invisible');
				$('#winner').toggleClass('invisible');
				$('#winner').html(checkWinner(charArr, squareArr) + ' wins! Play again?');
				$('body').append($('<button/>', {
					id: 'playAgain',
					text: 'Yes'
				}));
				$('#playAgain').click(function(){
					location.reload();
				});
			}
		});
	}
	function charChange(char){
		if(char === 'X'){
			return 'O';
		}
		else if(char === 'O'){
			return 'X';			
		}
	}
	function checkWinner(arr, refArr){
		var row1 = arr[0].concat(arr[1], arr[2]);
		var row2 = arr[3].concat(arr[4], arr[5]);
		var row3 = arr[6].concat(arr[7], arr[8]);
		var col1 = arr[0].concat(arr[3], arr[6]);
		var col2 = arr[1].concat(arr[4], arr[7]);
		var col3 = arr[2].concat(arr[5], arr[8]);
		var dig1 = arr[0].concat(arr[4], arr[8]);
		var dig2 = arr[6].concat(arr[4], arr[2]);
		if(row1 === 'XXX' || row2 === 'XXX' || row3 === 'XXX' || col1 === 'XXX' || col2 === 'XXX' || col3 === 'XXX' || dig1 === 'XXX' || dig2 === 'XXX'){
			return 'X';
		}
		else if(row1 === 'OOO' || row2 === 'OOO' || row3 === 'OOO' || col1 === 'OOO' || col2 === 'OOO' || col3 === 'OOO' || dig1 === 'OOO' || dig2 === 'OOO'){
			return 'O';
		}
	    else if(refArr.length === 0){
	      return 'Nobody';
	    }
		else{
			return false;
		}
	}
});
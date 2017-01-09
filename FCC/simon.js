$(document).ready(function(){
	var strict = false;
	var solution = [];
	var playPattern = [];
	var score = 0;
	var curPat = 0;
	var pass = true;
	$('#strict').click(function(){
		if(strict){
			strict = false;
		}
		else{
			strict = true;
		}
		$(this).toggleClass('deepButton');
		$('#strict p').toggleClass('moveText');
	});
	function makePattern(){
		var arr = [];
		var num = 0;
		for(i = 1; i < 21; i++){
			num = Math.ceil(Math.random()*4);
			arr.push(num);
		}
		return arr;
	}
	$('#reset').click(function(){
		solution = makePattern();
		score = 0;
		$('#score p').html(score);
		compTurn();
	});
	$('#button1').click(function(){
		playPattern.push(1);
		var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
		audio.play();
		checkResult();
	});
	$('#button2').click(function(){
		playPattern.push(2);
		var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
		audio.play();
		checkResult();
	});
	$('#button3').click(function(){
		playPattern.push(3);
		var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
		audio.play();
		checkResult();
	});
	$('#button4').click(function(){
		playPattern.push(4);
		var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
		audio.play();
		checkResult();
	});
	function checkResult(){
		for(k = 0; k < playPattern.length; k++){
			if(playPattern[k] !== curPat[k] && strict){
				alert('Wrong');
				score = 0;
				pass = false;
				playPattern = [];
				setTimeout(compTurn, 1000);
				break;
			}
			else if(playPattern[k] !== curPat[k]){
				alert('Wrong');
				playPattern = [];
				pass = false;
				setTimeout(compTurn, 1000);
				break;
			}
			else{
				pass = true;
			}
		}
		if(pass && playPattern.length === curPat.length){
			if(playPattern.length === 20){
				alert('You Win!');
			}
			else{
				playPattern = [];
				score++;
				setTimeout(compTurn, 1000);
			}
		}
		$('#score p').html(score);
	}
	function compTurn(){
		curPat = solution.slice(0,score+1);
		for(j = 0; j < curPat.length; j++){
			doTimer1(curPat[j], j);
			doTimer(curPat[j], j);
		}
	}
	function doTimer(num0, iter0){
		setTimeout(function(){lightUp(num0);}, 1000*(iter0) + 900);
	}
	function doTimer1(num1, iter1){
		setTimeout(function(){
			lightUp(num1);
			var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound' + num1 + '.mp3');
			audio.play();
		}, 1000*(iter1));
	}
	function lightUp(num2){
		$('#button' + num2).toggleClass('roboPress' + num2);
	}
});
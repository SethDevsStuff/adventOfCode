//Day 4 Part 1
var yes = document.getElementById("yes").innerHTML.split(","); //Bingo Numbers
var no = document.getElementById("no").innerHTML.split("\n\n");//Bingo Boards
var booleanBoards = [];
var bestSoFar = [Infinity,"temp"]
var i;
var j;
var l;
var yesNumber = 0;
for(i=0;i<no.length;i++){
	no[i] = no[i].split("\n"); //Seperating Columns from Rows
	for(j=0;j<no[i].length;j++){
		no[i][j] = no[i][j].split(" ")
	}
	for(j=0;j<no[i].length;j++){ //Removing Extra Spaces
		for(l=0;l<no[i][j].length;l++){
		if(no[i][j][l] == ""){
			no[i][j].splice(l,1);
			l-=1;
		}
		}
	}
}

for(i=0;i<no.length;i++){
	booleanBoards[i] = [];
	for(j=0;j<5;j++){
		booleanBoards[i][j] = [false,false,false,false,false];
	}
}

function checkWin(board){
	var a;
	var b;
	for(a=0;a<board.length;a++){
		for(b=0;b<board.length;b++){
			try{
			if(board[a][b]&&board[a][b+1]&&board[a][b+2]&&board[a][b+3]&&board[a][b+4]){
				return true;
			}
			} catch(err){
				
			}
			try{
							if(board[a][b]&&board[a+1][b]&&board[a+2][b]&&board[a+3][b]&&board[a+4][b]){
				return true;
			}
			} catch(err){
				
			}
		}
	}
}
function getScore(boardNumber, lastNumberCalled){
	var emptySpaces = [];
	var finalSum = 0;
	for(j=0;j<no[boardNumber].length;j++){
		for(l=0;l<no[boardNumber][j].length;l++){
			if(!booleanBoards[boardNumber][j][l]){
				emptySpaces[emptySpaces.length] = no[boardNumber][j][l];
			}
		}
	}
	for(j=0;j<emptySpaces.length;j++){
		finalSum+=JSON.parse(emptySpaces[j]);
	}
	return finalSum*lastNumberCalled;
}
function nextNumber(){
	for(i=0;i<no.length;i++){
		for(j=0;j<no[i].length;j++){
			for(l=0;l<no[i][j].length;l++){
				if(no[i][j][l] == yes[yesNumber]){
					booleanBoards[i][j][l] = true;
				}
			}
		}
		if(checkWin(booleanBoards[i])){
			console.log(getScore(i,yes[yesNumber]))
		}
	}
	yesNumber++;
}
yesNumber = 0;
//Day 4 Part 2
function nextNumberPtTwo(){
	for(i=0;i<no.length;i++){//Loops through boards
		for(j=0;j<no[i].length;j++){//Loops through rows
			for(l=0;l<no[i][j].length;l++){//Loops through columns
				if(no[i][j][l] == yes[yesNumber]){
					booleanBoards[i][j][l] = true;
				}
			}
		}
		if(checkWin(booleanBoards[i])){
					if(no.length == 1){
			console.log(getScore(i,yes[yesNumber]))
		} else {
			no.splice(i,1)
			booleanBoards.splice(i,1)
			i-=1;
		}
		}
	}
	yesNumber++;
}

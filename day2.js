//Day 2 Part 1
var yes = document.getElementById("yes").innerHTML;
yes = yes.split("\n")
var i;
var j = 0; //Horizontal Distance
var l = 0; //Depth
for(i=0;i<yes.length;i++){
	var yesArray = yes[i].split(" ")
	yesArray[1] = JSON.parse(yesArray[1])
	if(yesArray[0]=="forward"){
		j+=yesArray[1]
	} else if(yesArray[0]=="up"){
		l-=yesArray[1]
	} else if(yesArray[0]=="down"){
		l+=yesArray[1]
	}
}
console.log(j*l);

//Day 2 Part 2
/*down X increases your aim by X units.
up X decreases your aim by X units.
forward X does two things:
It increases your horizontal position by X units.
It increases your depth by your aim multiplied by X.*/
var a = 0;
j = 0;
l = 0;
for(i=0;i<yes.length;i++){
	var yesArray = yes[i].split(" ")
	yesArray[1] = JSON.parse(yesArray[1])
	if(yesArray[0]=="forward"){
		j+=yesArray[1]
		l+=(a*yesArray[1])
	} else if(yesArray[0]=="up"){
		a-=yesArray[1]
	} else if(yesArray[0]=="down"){
		a+=yesArray[1]
	}
}
console.log(j*l)
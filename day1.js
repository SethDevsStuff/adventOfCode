//Day 1 Part 1
var yes = document.getElementById("yes").innerHTML;
yes = yes.split("\n");
yes.splice(0,1);
yes.splice(2000,1)
var i;
var previousMove = Infinity;
var previousGroup = Infinity;
var j = 0;
for(i=0;i<yes.length;i++){
	yes[i] = JSON.parse(yes[i])
}
for(i=0;i<yes.length;i++){
	if(yes[i]>previousMove){
		j++;
	}
	previousMove = yes[i];
}
console.log(j);
j = 0;
var no = document.getElementById("no").innerHTML;
no = no.split("\n");
no.splice(0,1);
no.splice(2000,1);
for(i=0;i<no.length;i++){
	no[i] = JSON.parse(no[i]);
}
for(i=0;i<no.length;i++){
	if(no[i]+no[i+1]+no[i+2]>previousGroup){
		j++;
	}
	previousGroup = no[i]+no[i+1]+no[i+2];
}
//Day 1 Part 2
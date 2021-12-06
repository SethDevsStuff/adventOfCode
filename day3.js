//Day 3 Part 1
var yes = document.getElementById("yes").innerHTML;
yes = yes.split("\n");
var a = 0; //0s
var b = 0; //1s
var finalNumber = [];
var i;
var j;

for(i=0;i<yes[0].length;i++){
	a=0
	b=0
	for(j=0;j<yes.length;j++){
		if(yes[j][i] == "0"){
			a++;
		}
		else {
			b++
		}
	}
	if(a>b){
		finalNumber[i] = "0"
	} else {
		finalNumber[i] = "1"
	}
}
finalNumber = finalNumber.join("")
var newNumber = finalNumber.replaceAll("0","f")
newNumber = newNumber.replaceAll("1","0")
newNumber = newNumber.replaceAll("f","1")
//console.log(parseInt(finalNumber,2)*parseInt(newNumber,2))

//Day 3 Part 2
var no = document.getElementById("no").innerHTML;
no = no.split("\n");
var topNumber;
for(i=0;i<12;i++){
	a=0;
	b=0;
	for(j=0;j<no.length;j++){
		if(no[j][i] == "0"){
			a++;
		} else {
			b++;
		}
	}
	if(a<=b){
		topNumber = "1"
	} else {
		topNumber = "0"
	}
	for(j=0;j<no.length;j++){
		if(no[j][i] != topNumber){
			no.splice(j,1);
			j-=1;
		}
	}
}
var otherNo = no[0]
no = document.getElementById("no").innerHTML.split('\n');
for(i=0;i<12;i++){
	a=0;
	b=0;
	if(no.length == 1){
		console.log(parseInt(no[0],2)*parseInt(otherNo,2))
	}
	for(j=0;j<no.length;j++){
		if(no[j][i] == "0"){
			a++;
		} else {
			b++;
		}
	}
	if(a<=b){
		topNumber = "0"
	} else {
		topNumber = "1"
	}
	for(j=0;j<no.length;j++){
		if(no[j][i] != topNumber){
			no.splice(j,1);
			j-=1;
		}
	}
}
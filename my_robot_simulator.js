const direction = ["'north'", "'east'", "'south'", "'west'"];

function my_robot_simulator(param_1){
var dir = 0; //define variables inside function
var x = 0;
var y = 0;

for(var i = 0; i < param_1.length; i++){
if(dir == 0){
if(param_1[i]=="R"){
dir = 1;
}
if(param_1[i]=="L"){
dir = 3;
}
if(param_1[i]=="A"){
y--;
}
}

else if(dir == 1){
if(param_1[i]=="R"){
dir = 2;
}
if(param_1[i]=="L"){
dir = 0;
}
if(param_1[i]=="A"){
x++;
}
}

else if(dir == 2){
if(param_1[i]=="R"){
dir = 3;
}
if(param_1[i]=="L"){
dir = 1;
}
if(param_1[i]=="A"){
y++;
}
}

else if(dir == 3){
if(param_1[i]=="R"){
dir = 0;
}
if(param_1[i]=="L"){
dir = 2;
}
if(param_1[i]=="A"){
x--;
}
}
}
return '{x: '+x+', y: '+y+', bearing: '+ direction[dir]+'}';
}


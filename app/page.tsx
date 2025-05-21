'use client';
const numbers=[{
  id:1, blocks: "⬛⬛⬛⬜\n⬛⬛⬛⬜\n⬛⬛⬛⬜\n⬛⬛⬛⬜\n⬛⬛⬛⬜\n",
},
{
id:2, blocks: "⬜⬜⬜⬜\n⬛⬛⬛⬜\n⬜⬜⬜⬜\n⬜⬛⬛⬛\n⬜⬜⬜⬜\n",
},
{
  id:3, blocks: "⬜⬜⬜⬜\n⬛⬛⬛⬜\n⬜⬜⬜⬜\n⬛⬛⬛⬜\n⬜⬜⬜⬜\n",
},
{
  id:4, blocks:"⬜⬛⬛⬜\n⬜⬛⬛⬜\n⬜⬜⬜⬜\n⬛⬛⬛⬜\n⬛⬛⬛⬜\n",
},
{
  id:5, blocks:"⬜⬜⬜⬜\n⬜⬛⬛⬛\n⬜⬜⬜⬜\n⬛⬛⬛⬜\n⬜⬜⬜⬜\n",
},
{
  id:6, blocks:"⬜⬛⬛⬛\n⬜⬛⬛⬛\n⬜⬜⬜⬜\n⬜⬛⬛⬜\n⬜⬜⬜⬜\n",
},
{
  id:7, blocks:"⬜⬜⬜⬜\n⬛⬛⬛⬜\n⬛⬛⬛⬜\n⬛⬛⬛⬜\n⬛⬛⬛⬜\n",
},
{
  id:8, blocks:"⬜⬜⬜⬜\n⬜⬛⬛⬜\n⬜⬜⬜⬜\n⬜⬛⬛⬜\n⬜⬜⬜⬜\n",
},
{
  id:9, blocks:"⬜⬜⬜⬜\n⬜⬛⬛⬜\n⬜⬜⬜⬜\n⬛⬛⬛⬜\n⬜⬜⬜⬜\n",
},
{
  id:0, blocks:"⬜⬜⬜⬜\n⬜⬛⬛⬜\n⬜⬛⬛⬜\n⬜⬛⬛⬜\n⬜⬜⬜⬜\n",
}

]
const unit =[]
const unitTime= []

function formatTimeUnit(unit) {
  return unit.toString().padStart(2, "0");

}

function displayClock() {
  const now = new Date();
  const h = formatTimeUnit(now.getHours());
  const m = formatTimeUnit(now.getMinutes());
  const s = formatTimeUnit(now.getSeconds());

  //const time = `${h} : ${m} : ${s}`;
  const time = `19 : 30 : 00`;

console.clear();
console.log(h,":",m,":",s)
var rollingConcatenation = '';
console.log("time", time)
for(const char of time){
  if(char===":"){
      unit.push("⬛\n⬜\n⬛\n⬜\n⬛\n")
    continue;
    }
    
    else if(char===" "){
      unit.push("⬛\n⬛\n⬛\n⬛\n⬛\n")
      continue;
    }

  for(const number of numbers){
    if(number.id===Number(char)){
      //console.log("Character", char
      unit.push(number.blocks);
      
      //console.log(number.blocks);
    }
    
  } 
}
//console.log("unit", unit)
unit.forEach((item, index) => {
  for(const char of item){
    //console.log("Character in unit", char)
    if(char !=="\n"){
          unitTime.push[char]
      
    }
    else ;
    rollingConcatenation += char;
    //console.log("RollingConcatenation", rollingConcatenation)

  }
   
  
});
//console.log("unitTime" ,unitTime)
console.log(rollingConcatenation)
//console.groupEnd();


 // console.log("This is time string",time)

}

displayClock();

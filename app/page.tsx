'use client';
const numbers=[
{id:1, blocks: "⬛⬛⬛⬜\n⬛⬛⬛⬜\n⬛⬛⬛⬜\n⬛⬛⬛⬜\n⬛⬛⬛⬜",},
{id:2, blocks: "⬜⬜⬜⬜\n⬛⬛⬛⬜\n⬜⬜⬜⬜\n⬜⬛⬛⬛\n⬜⬜⬜⬜",},
{id:3, blocks: "⬜⬜⬜⬜\n⬛⬛⬛⬜\n⬜⬜⬜⬜\n⬛⬛⬛⬜\n⬜⬜⬜⬜",},
{id:4, blocks: "⬜⬛⬛⬜\n⬜⬛⬛⬜\n⬜⬜⬜⬜\n⬛⬛⬛⬜\n⬛⬛⬛⬜",},
{id:5, blocks: "⬜⬜⬜⬜\n⬜⬛⬛⬛\n⬜⬜⬜⬜\n⬛⬛⬛⬜\n⬜⬜⬜⬜",},
{id:6, blocks: "⬜⬛⬛⬛\n⬜⬛⬛⬛\n⬜⬜⬜⬜\n⬜⬛⬛⬜\n⬜⬜⬜⬜",},
{id:7, blocks: "⬜⬜⬜⬜\n⬛⬛⬛⬜\n⬛⬛⬛⬜\n⬛⬛⬛⬜\n⬛⬛⬛⬜",},
{id:8, blocks: "⬜⬜⬜⬜\n⬜⬛⬛⬜\n⬜⬜⬜⬜\n⬜⬛⬛⬜\n⬜⬜⬜⬜",},
{id:9, blocks: "⬜⬜⬜⬜\n⬜⬛⬛⬜\n⬜⬜⬜⬜\n⬛⬛⬛⬜\n⬜⬜⬜⬜",},
{id:0, blocks: "⬜⬜⬜⬜\n⬜⬛⬛⬜\n⬜⬛⬛⬜\n⬜⬛⬛⬜\n⬜⬜⬜⬜",}
]
function formatTimeUnit(unit) {
  return unit.toString().padStart(2, "0");
}
function displayClock() {
  const unit =[]
  const unitTime= []
  const unitDate=[]
  const now = new Date();
  const h = formatTimeUnit(now.getHours());
  const m = formatTimeUnit(now.getMinutes());
  const s = formatTimeUnit(now.getSeconds());
  var time = `${h.split("").join(" ")} : ${m.split("").join(" ")} : ${s.split("").join(" ")}`;
  console.clear();
  var rollingConcatenation = '';
  for(const char of time){
    if(char===":"){
        unit.push("⬛\n⬜\n⬛\n⬜\n⬛")
      continue;
      } 
      else if(char===" "){
        unit.push("⬛\n⬛\n⬛\n⬛\n⬛")
        continue;
      }
    for(const number of numbers){
      if(number.id===Number(char)){
        unit.push(number.blocks);
      } 
    } 
  }
  unit.forEach((item, index) => {
    var joined = "";
    const pieces = item.split("\n");
    unitTime.push(pieces);
  })
    for(let i=0; i<5; i++)
    {
      for(let j=0; j<unitTime.length; j++)
      {
        rollingConcatenation += unitTime[j][i];
      }
      unitDate.push(rollingConcatenation);
      console.log(rollingConcatenation)
      rollingConcatenation = '';
    }
}
setInterval(displayClock, 1000)

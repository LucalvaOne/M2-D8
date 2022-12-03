/*let x = "John";
let y = "Doe";
console.log(x+' <> '+y);

const person={
    name:'luca',
    surname:'calvani',
    email:'lusan@asdf.it'
}

console.log(person);
delete person.email;
console.log(person);

const arr=["ciao", "mi","chiamo","luca","calvani","ed","ho","40","anni","compiuti"];
console.log(arr);

const array=[];
for(let i=0; i<100; i++){
  array.push(Math.floor(Math.random()*100)+1);
  console.log(array[i]);
}

let minimo = 0;
let massimo=0;
for(let i = 0; i < array.length; i++){
  if(minimo <= array[i] && minimo !== 0){
    minimo = minimo;
  } else {
    minimo = array[i];
  }
}
for(let i = 0; i < array.length; i++){
    if(massimo >= array[i] && massimo !== 0){
      massimo = massimo;
    } else {
      massimo = array[i];
    }
  }
console.log(array);
console.log(minimo, massimo);

const arrayArray1=[];
for(let i=0; i< 3; i++){
const arrayArray2 =[]
  for (let z = 0; z < 10; z++)
  arrayArray2.push(Math.floor(Math.random() * 100));
  arrayArray1.push(arrayArray2);
}
console.log(arrayArray1);

function lunghezza(array1,array2){
if(array1.length>array2.length){
  return array1;
}
  else if(array1.length<array2.length){
    return array2;
  }
  else(array1.length===array2.length)
  {
    console.log("Gli array hanno la stessa grandezza");
  }
}
let arr=lunghezza([1,2,3,4],[5,6,7,8]);
console.log("L'array più lungo è:",arr);

let sum1=0;
let sum2=0;
function chose(arra1,arra2){
  if(typeof arra1==='object'&& typeof arra2==='object'){
  for(let i=0;i<3;i++){
    sum1=sum1+arra1[i];
    console.log(arra1[i])
  }
  for(let i=0;i<3;i++){
    sum2=sum2+arra2[i];
    console.log(arra2[i]);
  }
  if(sum1>sum2){
    return arra1;
  }
  else if(sum1<sum2){
    return sum2;
  }
  else{
    console.log("Le somme degli array sono uguali");
  }
}
else{
  console.log("Non sono valori numerici");
}
}
let s=chose([4,5,6],[1,2,90]);
console.log("L'array con la sommatoria più grande è:"+s);



let container=document.getElementById('container');
console.log(container)

let td=document.getElementsByTagName("td");
console.log(td);

let td1=document.getElementsByTagName("td");
for(let i=0;i<td1.length;i++){
  console.log(td1[i].textContent);
}

document.getElementById("btn").addEventListener("click", function() {
  document.querySelector("h1").innerText = "Spam"
})

function addRow() {
  let table = document.getElementById('tabella');
  let row=table.insertRow();
}

function addClass(){
  let tr=document.getElementsByClassName('red');
  for(let i=0;i<tr.length;i++){
  tr[i].classList.add('blue');
}
}

function changeColor(){
  let b=document.querySelectorAll("a")
  for(let i=0;i<b.length;i++){
    b[i].style.backgroundColor = "red";
  }
}
window.onload = function () {
  console.log('Page loaded');
}

function addElements(){  
  let li = document.createElement('li');
    li.innerText="Spam";
    let ul=document.getElementsByTagName("ul")[0];
            ul.appendChild(li);
}

function removeElements(){
  let listElements = document.querySelectorAll("li");
for (let i = 0; (li = listElements[i]); i++) {
  li.parentNode.removeChild(li);
}
}

const aHref = document.querySelectorAll('a');
  for(const el of aHref) {
    el.onmouseover = () => {
  alert("https://www.google.com/");
  }
};

const btnHide = document.getElementById('btn5');
btnHide.onclick = () => {
  const imgs = document.querySelectorAll('img');
  for (const img of imgs) {
    img.style.display = img.style.display === 'none' ? 'block' : 'none';
  }
}

const btnHideTable=document.getElementById('btn6');
btnHideTable.onclick = () => {
  const myTable=document.getElementById('tabella');
  myTable.style.display=myTable.style.display==='none'?'block' :'none';
}

const sumRows = () => {

  const td = document.querySelectorAll('td');
  let total = 0;
  let rowsNumbers = [];

  for(let i = 0; i < td.length; i++){

    rowsNumbers.push(parseInt(td[i].textContent)); //convert string in number and add to temp array

    if(!isNaN(rowsNumbers[i])){ 
      total+= rowsNumbers[i];
    }
  }
  return total;
}
console.log(sumRows());

const h1=document.querySelector("h1");
h1.onclick=()=>{
  h1.innerText=h1.innerText.slice(0,-1);
}

const tdGreen=document.querySelectorAll("td");
for(const td of tdGreen){
  td.onclick=()=>{
    td.style.backgroundColor="green";
  }
}

const removeRandomTd=()=>{
  const removeFirstTd=document.getElementById("btn7");
  const td=document.getElementsByTagName("td");
  removeFirstTd.onclick=()=>{
    const randomTd=Math.floor(Math.random()*td.length);
    td[randomTd].remove();
  }
}
console.log(removeRandomTd());

const tdBorders=document.querySelectorAll("td");
for(const tdBorder of tdBorders){
  tdBorder.onmouseover=()=>{
    tdBorder.style.border="1px solid pink";
  }
}

const createNewTable=()=>{
  const footer=document.querySelector("footer");
  const newTable=document.createElement("table");
  newTable.classList.add("table");
  newTable.setAttribute("id","new-table");
  footer.appendChild(newTable);
  for(let i=0;i<4;i++){
    const newTr=document.createElement("tr");
    for(let j=0;j<3;j++){
      const newTd=document.createElement("td");
      newTr.appendChild(newTd);
      newTd.innerText="Ciao";
    }
    newTable.appendChild(newTr);
  }
}
console.log(createNewTable());

const removeTable=()=>{
  document.getElementById("new-table").remove();
}
console.log(removeTable());
*/
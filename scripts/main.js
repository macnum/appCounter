let countEl = document.getElementById('count-el');
let countSum = document.getElementById('count-sum');

let count = 0;

function increaseCount() {
  count += 1;
  countEl.textContent = count;
  console.log("working");


}
function save() {
  countSum.textContent += count +"-" ;
}

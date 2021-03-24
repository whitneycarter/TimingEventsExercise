// Timing Events/Methods Exercise

// 1
setTimeout(() => {
  const div1 = document.querySelector(`#first`);
  const p1 = document.createElement(`p`);
  p1.innerText = `Hi`;
  div1.append(p1);
}, 1000);

// 2
setTimeout(() => {
  const divTM = document.querySelector(`#timeout-nesting`);
  const p1 = document.createElement(`p`);
  p1.innerText = `One`;
  divTM.append(p1);
  setTimeout(() => {
    const p2 = document.createElement(`p`);
    p2.innerText = `Two`;
    divTM.append(p2);
  }, 1000);
}, 2000);

// 3a
// let time = 0;
// const clock = setInterval(() => {
//   console.log(time);
//   time++;
// }, 1000);

// 3b
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
  clearInterval(clock);
});

// BONUS
// 4
const div3 = document.querySelector(`#countdown`);
const p4 = document.createElement(`p`);
p4.innerText = `2:00`;
div3.append(p4);
let startingSeconds = 120;

const countdown = setInterval(() => {
  startingSeconds--;
  const minutes = Math.floor(startingSeconds / 60);
  const seconds = startingSeconds % 60;
  // p4.innerText = `${minutes}:${seconds}`;

  if (seconds < 10) {
    p4.innerText = `${minutes}:0${seconds}`;
  } else {
    p4.innerText = `${minutes}:${seconds}`;
  }
  // Using a ternary
  // p4.innerText = (seconds < 10) ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;

  if (startingSeconds === 0){
    p4.innerText = `TIME IS UP`;
    clearInterval(countdown);
  }
}, 1000);


/*
var count = 3;
const divCD = document.querySelector(`#countdown`);
const p3 = document.createElement(`p`);
const clock = setInterval(() => {
  if (count > 0){
    m = Math.trunc(count / 60);
    s = count % 60;
    sc = s.toString();
    if (s < 10){
      sc = `0` + s.toString();
    }
    var time = m.toString() + ":" + sc;
    p3.innerText = time;
    divCD.append(p3);
  } else {
    clearInterval(clock);
    p3.innerText = `TIME IS UP`;
    divCD.append(p3);
  }
  count--;
}, 1000);
*/
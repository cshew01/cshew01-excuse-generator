/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // create arrays with excuses
  const blaming = ["my pet alligator","the car","the plane","my daughter","my computer","the treadmill"];
  const problem = ["broke","ate","burned","banished","crashed","used a fart gun on"];
  const target = ["my foot","my dinner","the house","the christmas tree","the front door"];
  const when = ["on my birthday","when hell froze over","this morning","three days ago","while I was on the toilet","when the dogs barked"];
  
  // write a function to randomly select one item from each array
  function generator() {
      let rndBlaming = blaming[Math.floor(Math.random()*blaming.length)];
      let rndProblem = problem[Math.floor(Math.random()*problem.length)];
      let rndTarget = target[Math.floor(Math.random()*target.length)];
      let rndWhen = when[Math.floor(Math.random()*when.length)];
      return `...because ${rndBlaming} ${rndProblem} ${rndTarget} ${rndWhen}!`;
  }
  
  // send the excuse string to index.html
  let completeExcuse = generator();
  console.log (completeExcuse);
  document.querySelector("#excuse").innerHTML = completeExcuse;
  document.querySelector("#refresh").onclick = () => {
    let completeExcuse = generator();
    console.log (completeExcuse);
    document.querySelector("#excuse").innerHTML = completeExcuse;
  }
  
};

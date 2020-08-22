const checks = document.querySelectorAll('p>input[type="checkbox"]');
const counter = document.querySelector('#counter');
let count = 0;


function countChecked() {
  if(this.checked) {
    count++;
    counter.value = count;
    console.log(count + ' checked');
    console.log("checkbox " + this.dataset["number"]);
  } else if(!this.checked) {
    count--;
    console.log(count + ' checked');
    counter.value = count;
  }
}

// for (i = 0; i < checks.length; i++) {
//   checks[i].addEventListener('change', countChecked);
// }

/* the same as above but using forEach */
checks.forEach(check => {
    check.addEventListener('change', countChecked);
});
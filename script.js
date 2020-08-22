const checks = document.querySelectorAll('input[type="checkbox"]');
const counter = document.querySelector('#counter');
let count = 0;


function countChecked() {
  if(this.checked) {
    count++;
    counter.value = count;
    console.log('checked ' + count);
  } else if(!this.checked) {
    count--;
    console.log('checked ' + count);
    counter.value = count;
  }
}

for (i = 0; i < checks.length; i++) {
  checks[i].addEventListener('change', countChecked);
}
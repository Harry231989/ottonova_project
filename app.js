// Animation on the inputs
const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join('');
});

// toggling between icons
function maleClick() {
  toggle.style.left = '0';
}

function femaleClick() {
  toggle.style.left = '110px';
}

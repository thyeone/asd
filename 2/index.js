// 1
const target1El = document.getElementById('target-1');
target1El.classList.remove('border');

// 2
target1El.style.position = 'relative';
target1El.style.left = '250px';

// 3
const target2El = document.querySelector('.target-2');
target2El.classList.remove('border');
target2El.classList.add('blue');

// 4
target2El.style.left = '50px';
target2El.style.marginTop = '-15px';

// 5
fadeOut(document.getElementById('target-3'), () => {
  document.getElementById('target-4').classList.add('green');
});

let opacity = 1;

function fadeOut(element, callback) {
  const fadeEffect = setInterval(() => {
    if (opacity > 0) {
      opacity -= 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeEffect);
      callback();
    }
  }, 100);
}

const $icon = document.querySelector('.icon');
const $arrow = document.querySelector('.arrow');

$icon.onclick = () => {
  $arrow.animate([
    {left: '0'},
    {left: '100px'},
    {left: '0'}
  ],{
    duration: 700,
    iterations: Infinity
  });
}
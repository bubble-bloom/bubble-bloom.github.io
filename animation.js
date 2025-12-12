window.onload = function () {
  function updateBg() {
    const sectionIndex = Math.round((window.scrollY-titleBar.offsetHeight) / window.innerHeight);
    bgStyle.backgroundColor = bgColors[sectionIndex] || 'blue';
  }
  const bgColors = ['blue', 'yellow', 'red'];
  const titleBar = document.getElementById('title-bar');
  const bgStyle = document.getElementById('background').style;
  document.addEventListener('scroll', updateBg);
  updateBg();
}
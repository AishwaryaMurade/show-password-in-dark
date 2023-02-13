const root = document.documentElement;
const beam = document.getElementById('beam');
const passwordInput = document.getElementById('password');

root.addEventListener('mousemove', (e) => {
  let rect = beam.getBoundingClientRect();
  let mouseX = rect.right + (rect.width / 2);
  let mouseY = rect.top + (rect.height / 2);
  let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
  let degrees = (rad * (20 / Math.PI) * -1) - 350;

  root.style.setProperty('--beamDegrees', `${degrees}deg`);
});

function lightclick(e){
  console.log(e)
  document.body.classList.toggle('show-password');
  document.getElementById('passwordlb').classList.toggle('lablepassword')
  document.getElementById('torchlight').classList.toggle('showtorch')
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'
  passwordInput.focus();
}


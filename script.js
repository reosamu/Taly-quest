let hp = 1000;
let attackCount = 0;
const hpElement = document.getElementById('hp');
const messageElement = document.getElementById('message');
const attackButton = document.getElementById('attackButton');
const monsterImage = document.getElementById('monster');
const weaponImage = document.getElementById('weapon');


attackButton.addEventListener('click', () => {
  attackCount++;
  hp -= 20;
  if (hp < 0) hp = 0;
  hpElement.textContent = hp;

  if (attackCount === 10) {
    weaponImage.src = "weapon2.png";
  } else if (attackCount === 30) {
    weaponImage.src = "weapon1.jpg";
  }

  if (hp === 0) {
    messageElement.classList.remove('hidden');
    attackButton.disabled = true;
    monsterImage.src = "33.jpg";
  }

  showAttackEffect();
});

const attackEffect = document.getElementById('attackEffect');

function showAttackEffect() {
  attackEffect.classList.add('show');
  setTimeout(() => {
    attackEffect.classList.remove('show');
  }, 200); // 0.2秒後に消す
}

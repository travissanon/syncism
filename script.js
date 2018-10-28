const guide = ("Summer evenings spent looking at the magical night sky remind us of the beauty of the universe. The vastness of space seems to go on forever and remain unchanging, perfect.").split('');

let div = document.querySelector('div');

class Sprint {
  constructor(sprint) {
    this.sprint = sprint;
    this.position = 0;
    this.currentCharacter;
    this.init();
  }
  init() {
    this.generateLetters();
    this.placeTypeFace(this.position);
    document.addEventListener('keypress', e => this.keyListener(e));
  }
  keyListener(e) {
    const code = e.keyCode || e.which,
      str = String.fromCharCode(code),
      currentChar = this.sprint[this.position],
      el = document.getElementsByClassName(this.position)[0];

    if (str === currentChar) {
      this.removeTypeFace(el);
      this.placeTypeFace(this.position + 1);
      this.position++
    } else {
      this.incorrectLetter(el);
    }
  }
  placeTypeFace(pos) {
    const span = document.getElementsByClassName(pos)[0];
    span.style.background = 'orange';
  }
  removeTypeFace(el) {
    el.style.color = '#e5e5e5';
    el.style.background = 'white';
  }
  incorrectLetter(el) {
    el.style.color = 'red';
  }
  generateLetters() {
    this.sprint.forEach((letter, i) => {
      let el = document.createElement('span');
      el.className = i;
      el.innerHTML += letter;
      div.appendChild(el);
    });
  }
}

new Sprint(guide);
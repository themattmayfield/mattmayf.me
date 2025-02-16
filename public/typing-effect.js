class TypingEffect {
  constructor(element, phrases, options = {}) {
    this.element = element;
    this.phrases = phrases;
    this.currentPhrase = 0;
    this.currentChar = 0;
    this.isDeleting = false;

    this.options = {
      typeSpeed: 50,
      deleteSpeed: 50,
      pauseDuration: 1000,
      ...options,
    };

    this.type();
  }

  type() {
    const phrase = this.phrases[this.currentPhrase];
    const speed = this.isDeleting
      ? this.options.deleteSpeed
      : this.options.typeSpeed;

    if (this.isDeleting) {
      this.currentChar--;
    } else {
      this.currentChar++;
    }

    this.element.textContent = phrase.substring(0, this.currentChar);

    if (!this.isDeleting && this.currentChar === phrase.length) {
      setTimeout(() => {
        this.isDeleting = true;
        this.type();
      }, this.options.pauseDuration);
      return;
    }

    if (this.isDeleting && this.currentChar === 0) {
      this.isDeleting = false;
      this.currentPhrase = (this.currentPhrase + 1) % this.phrases.length;
      setTimeout(() => this.type(), this.options.typeSpeed);
      return;
    }

    setTimeout(() => this.type(), speed);
  }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const phrases = [
    'hero of the web',
    'digital architect',
    'the bam margera of typescript',
    'react connoisseur',
  ];

  const typingElement = document.getElementById('typing-text');
  new TypingEffect(typingElement, phrases);
});

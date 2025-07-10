export const createFloatingPetals = () => {
  const container = document.createElement('div');
  container.className = 'floating-petals';
  document.body.appendChild(container);

  const createPetal = () => {
    const petal = document.createElement('div');
    petal.className = 'petal';
    
    // Random starting position
    const startPosition = Math.random() * window.innerWidth;
    petal.style.left = `${startPosition}px`;
    petal.style.top = '-20px';
    
    // Random animation duration between 10-20s
    const duration = 10 + Math.random() * 10;
    petal.style.animation = `floatPetal ${duration}s linear infinite`;
    
    // Random delay
    petal.style.animationDelay = `${Math.random() * 20}s`;
    
    // Random rotation
    const rotation = Math.random() * 360;
    petal.style.transform = `rotate(${rotation}deg)`;
    
    container.appendChild(petal);
    
    // Remove petal after animation
    setTimeout(() => {
      petal.remove();
    }, duration * 1000);
  };

  // Create initial petals
  for (let i = 0; i < 20; i++) {
    createPetal();
  }

  // Continue creating petals
  setInterval(createPetal, 3000);
};

export const createJapanesePattern = () => {
  const pattern = document.createElement('div');
  pattern.className = 'japanese-pattern';
  document.body.appendChild(pattern);

  const fujiSilhouette = document.createElement('div');
  fujiSilhouette.className = 'fuji-silhouette';
  document.body.appendChild(fujiSilhouette);

  const wavePattern = document.createElement('div');
  wavePattern.className = 'wave-pattern';
  document.body.appendChild(wavePattern);
};

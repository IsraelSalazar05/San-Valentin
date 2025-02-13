function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Tamaño aleatorio entre 20 y 30px
  const size = Math.random() * 10 + 20;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';

  // Posición inicial: horizontal aleatoria y en la parte inferior de la pantalla
  const posX = Math.random() * window.innerWidth;
  heart.style.left = posX + 'px';
  heart.style.top = '100%';

  // Duración aleatoria de la animación (entre 8 y 12 segundos)
  const duration = Math.random() * 4 + 8;
  heart.style.animationDuration = duration + 's';

  // Añadir el corazón al contenedor
  const container = document.querySelector('.hearts-container');
  container.appendChild(heart);

  // Eliminar el corazón una vez que termina la animación
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Crear un nuevo corazón cada 500 milisegundos
setInterval(createHeart, 500);

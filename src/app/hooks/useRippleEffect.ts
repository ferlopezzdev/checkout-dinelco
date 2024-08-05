import { useCallback } from 'react';

const useRippleEffect = () => {
  const handleRippleEffect = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;

    // Crear un nuevo ripple
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    button.appendChild(ripple);

    // Calcular el tamaño y la posición
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const left = e.clientX - rect.left - size / 2;
    const top = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;

    // Agregar la animación
    ripple.classList.add('animate-ripple');

    // Remover el ripple una vez finalice la animación
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }, []);

  return { handleRippleEffect };
};

export default useRippleEffect;

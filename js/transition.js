export function createTransition() {
  const veil = document.getElementById('transition-veil');
  return async function move(work) {
    veil.classList.add('is-moving');
    await new Promise(resolve => setTimeout(resolve, 650));
    work();
    await new Promise(resolve => setTimeout(resolve, 650));
    veil.classList.remove('is-moving');
  };
}

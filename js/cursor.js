export function startGraphiteCursor() {
  const canvas = document.getElementById('graphite-cursor');
  const ctx = canvas.getContext('2d');
  const marks = [];
  const resize = () => {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  };
  window.addEventListener('resize', resize);
  resize();
  window.addEventListener('pointermove', event => {
    marks.push({ x: event.clientX, y: event.clientY, life: 1, size: 1 + Math.random() * 2.5 });
    if (marks.length > 160) marks.shift();
  });
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    marks.forEach(mark => {
      mark.life -= 0.012;
      ctx.beginPath();
      ctx.fillStyle = `rgba(42,38,32,${Math.max(mark.life, 0) * 0.22})`;
      ctx.arc(mark.x, mark.y, mark.size, 0, Math.PI * 2);
      ctx.fill();
    });
    for (let i = marks.length - 1; i >= 0; i -= 1) if (marks[i].life <= 0) marks.splice(i, 1);
    requestAnimationFrame(draw);
  }
  draw();
}

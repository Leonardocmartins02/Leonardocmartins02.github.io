// Portfólio — interações e animações
// - Canvas de partículas (leve e responsivo)
// - Reveal on scroll (IntersectionObserver)
// - Utilidades: ano automático, navegação

(function () {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // Atualiza ano no footer
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Acessibilidade: ao clicar em um link de âncora, move o foco para a seção
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      // Permite que a rolagem aconteça suavemente (via CSS)
      // Depois de um pequeno delay, foca a seção
      setTimeout(() => {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }, 400);
    });
  });

  // IntersectionObserver para revelar elementos
  const revealEls = $$('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  // Canvas de partículas de fundo
  const canvas = $('#bg-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  let W = 0, H = 0, particles = [], mouse = { x: 0, y: 0, has: false };

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.floor(W * DPR);
    canvas.height = Math.floor(H * DPR);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    initParticles();
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function initParticles() {
    const density = Math.min(80, Math.floor((W * H) / 16000)); // leve
    particles = new Array(density).fill(0).map(() => ({
      x: rand(0, W),
      y: rand(0, H),
      vx: rand(-0.2, 0.2),
      vy: rand(-0.2, 0.2),
      r: rand(0.6, 1.8),
      alpha: rand(0.25, 0.8)
    }));
  }

  function step() {
    ctx.clearRect(0, 0, W, H);

    // leve glow
    particles.forEach(p => {
      // leve atração/repulsão ao mouse
      if (mouse.has) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        const influence = 12000; // distância^2
        if (d2 < influence) {
          const f = (influence - d2) / influence;
          p.vx += (dx / Math.sqrt(d2 + 0.0001)) * 0.02 * f;
          p.vy += (dy / Math.sqrt(d2 + 0.0001)) * 0.02 * f;
        }
      }

      p.x += p.vx;
      p.y += p.vy;

      // wrap simples
      if (p.x < -10) p.x = W + 10; else if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10; else if (p.y > H + 10) p.y = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 229, 255, ${p.alpha})`;
      ctx.shadowColor = 'rgba(0,229,255,0.35)';
      ctx.shadowBlur = 8;
      ctx.fill();
    });

    // desenhar linhas suaves entre partículas próximas
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) {
          const opacity = (1 - dist / 120) * 0.25;
          ctx.strokeStyle = `rgba(0, 229, 255, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(step);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.has = true;
  });
  window.addEventListener('mouseleave', () => (mouse.has = false));

  resize();
  requestAnimationFrame(step);

  // Formulário: deixar submissão nativa (FormSubmit) sem interceptar
  // A validação mínima já está no HTML com atributos required
})();

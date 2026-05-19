// =============================================
// CafeteriaHub — Shared Utilities
// =============================================

function showToast(msg, type = '', ms = 3000) {
  const c = document.getElementById('toasts');
  if (!c) return;
  const t = document.createElement('div');
  t.className = 'toast' + (type ? ' ' + type : '');
  const icons = { ok: '✅', err: '❌', warn: '⚠️' };
  t.innerHTML = `<span>${icons[type] || 'ℹ️'}</span> ${msg}`;
  c.appendChild(t);
  setTimeout(() => {
    t.style.transition = 'opacity 0.3s, transform 0.3s';
    t.style.opacity = '0';
    t.style.transform = 'translateX(40px)';
    setTimeout(() => t.remove(), 300);
  }, ms);
}

(function seedData() {
  const existing = JSON.parse(localStorage.getItem('ch_users') || '[]');
  if (existing.length) return;

  const users = [
    {
      id: 1,
      name: 'Canteen Administrator',
      email: 'admin@school.edu',
      password: 'admin2024',
      role: 'admin',
      createdAt: new Date().toISOString()
    }
  ];
  localStorage.setItem('ch_users', JSON.stringify(users));

  // Seed sample menu
  const menu = [
    { id: 101, name: 'Chicken Adobo Rice', cat: 'Rice Meals', price: 65, desc: 'Braised chicken with steamed rice', available: true, img: null },
    { id: 102, name: 'Pork Sinigang', cat: 'Soups', price: 70, desc: 'Tamarind sour soup with vegetables', available: true, img: null },
    { id: 103, name: 'Buko Juice', cat: 'Drinks', price: 25, desc: 'Fresh young coconut juice', available: true, img: null },
    { id: 104, name: 'Banana Cue', cat: 'Snacks', price: 15, desc: 'Deep-fried caramelized banana', available: true, img: null },
    { id: 105, name: 'Halo-Halo', cat: 'Desserts', price: 45, desc: 'Mixed shaved ice dessert', available: true, img: null },
    { id: 106, name: 'Fried Rice', cat: 'Rice Meals', price: 40, desc: 'Garlic fried rice with egg', available: true, img: null },
  ];
  localStorage.setItem('ch_menu', JSON.stringify(menu));
})();
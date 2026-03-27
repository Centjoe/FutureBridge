// ===== INTEREST TAG TOGGLE =====
function toggleTag(el) {
  el.classList.toggle('selected');
}

// ===== MENTOR/STUDENT FORM TOGGLE =====
function toggleMentorFields() {
  const role = document.getElementById('role').value;
  document.getElementById('schoolField').style.display = role === 'student' ? 'block' : 'none';
  document.getElementById('professionField').style.display = role === 'mentor' ? 'block' : 'none';
}

// ===== REGISTER FORM SUBMIT =====
const form = document.getElementById('registerForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('🎉 Welcome to FutureBridge! Your profile has been created.');
    window.location.href = 'dashboard.html';
  });
}

// ===== CAREER FILTER (Explore Page) =====
function filterByCategory(category, btn) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.career-card').forEach(card => {
    card.style.display =
      category === 'all' || card.dataset.category === category ? 'block' : 'none';
  });
}

// ===== CAREER SEARCH =====
function filterCareers() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.career-card').forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? 'block' : 'none';
  });
}

// ===== OPPORTUNITIES FILTER =====
function filterOpp(type, btn) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.opp-card').forEach(card => {
    card.style.display =
      type === 'all' || card.dataset.type === type ? 'block' : 'none';
  });
}

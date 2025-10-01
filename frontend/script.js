const form = document.getElementById('birthForm');
const list = document.getElementById('birthList');

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const birthdate = document.getElementById('birthdate').value;

  await fetch('http://localhost:3000/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name, date: birthdate })
  });

  form.reset();
  loadBirthdates();
});

async function loadBirthdates() {
  const res = await fetch('http://localhost:3000/all');
  const data = await res.json();
  list.innerHTML = '';
  data.forEach(function (entry) {
    const li = document.createElement('li');
    li.textContent = `${entry.name} - ${entry.birthdate.slice(0, 10)}`;
    list.appendChild(li);
  });
}

loadBirthdates();
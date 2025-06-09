let clubId = 0;

function addClub() {
  const container = document.getElementById('clubs-container');
  const clubDiv = document.createElement('div');
  clubDiv.className = 'club';
  clubDiv.id = 'club-' + clubId;

  clubDiv.innerHTML = `
    <label>اسم النادي:
      <input type="text" value="نادي جديد" oninput="updateClubName(${clubId}, this.value)">
    </label><br>
    <label>اختيار الشعار:
      <input type="file" accept="image/*" onchange="loadLogo(event, ${clubId})">
    </label><br>
    <img id="logo-${clubId}" src="https://via.placeholder.com/100" alt="شعار النادي"><br>
    <div class="controls">
      <button onclick="addPoints(${clubId}, 3)">🏆 فوز (+3)</button>
      <button onclick="addPoints(${clubId}, 1)">🤝 تعادل (+1)</button>
      <button onclick="addPoints(${clubId}, 0)">❌ خسارة (+0)</button>
      <button onclick="resetPoints(${clubId})">🔄 إعادة تعيين</button>
    </div>
    <div class="points">النقاط: <span id="points-${clubId}">0</span></div>
  `;

  container.appendChild(clubDiv);
  clubId++;
}

function addPoints(id, pointsToAdd) {
  const pointsElement = document.getElementById(`points-${id}`);
  let currentPoints = parseInt(pointsElement.innerText);
  pointsElement.innerText = currentPoints + pointsToAdd;
}

function resetPoints(id) {
  document.getElementById(`points-${id}`).innerText = '0';
}

function loadLogo(event, id) {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById(`logo-${id}`).src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function updateClubName(id, name) {
  // الاسم يتم تحديثه تلقائيًا في input
}

window.onload = () => {
  addClub();
};

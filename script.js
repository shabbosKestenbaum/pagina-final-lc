// DATA

const reviews = [
  {
    id: "batman-38",
    title: "Batman #38",
    series: "Batman",
    seriesId: "batman",
    type: "issue",
    content: "This issue focuses on..."
  },
  {
    id: "usm-1",
    title: "Ultimate Spider-Man (2009) #1",
    series: "Ultimate Spider-Man (2009)",
    seriesId: "usm",
    type: "issue",
    content: "A fresh start..."
  },
  {
    id: "amm-10",
    title: "Absolute Martian Manhunter #10",
    series: "Absolute Martian Manhunter",
    seriesId: "amm",
    type: "issue",
    content: "Strong psychological themes..."
  },
  {
    id: "amm-vol1",
    title: "Absolute Martian Manhunter Vol. 1 (TPB)",
    series: "Absolute Martian Manhunter",
    seriesId: "amm",
    type: "tpb",
    content: "Collects issues..."
  }
];

// PÁGINA DE INICIO

function goHome() {
  const app = document.getElementById("app");

  let html = `
    <div class="container">
      <h2>Latest Reviews</h2>
      <div class="grid">
  `;

  reviews.forEach(review => {
    html += `
      <div class="card" onclick="openReview('${review.id}')">
        <img src="${review.image}" alt="${review.title}">
        <div class="card-content">
          <h3>${review.title}</h3>
          <p>${review.series}</p>
        </div>
      </div>
    `;
  });

  html += `</div></div>`;
  app.innerHTML = html;
}

// RESEÑAS

function openReview(id) {
  const review = reviews.find(r => r.id === id);
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="container">
      <div style="display:flex; gap:20px; flex-wrap:wrap;">
        
        <img src="${review.image}" style="width:250px; border-radius:10px;">

        <div style="max-width:600px;">
          <h2>${review.title}</h2>
          <p><em>${review.series}</em></p>

          <p>${review.content}</p>

          <button onclick="openSeries('${review.seriesId}')">
            View Full Series
          </button>
        </div>

      </div>
    </div>
  `;
}

// SERIES

function openSeries(seriesId) {
  const app = document.getElementById("app");

  const seriesReviews = reviews.filter(r => r.seriesId === seriesId);
  const seriesName = seriesReviews[0]?.series || "Series";

  let html = `
    <div class="container">
      <h2>${seriesName}</h2>
      <div class="grid">
  `;

  seriesReviews.forEach(r => {
    html += `
      <div class="card" onclick="openReview('${r.id}')">
        <img src="${r.image}">
        <div class="card-content">
          <h4>${r.title}</h4>
          <p>${r.type}</p>
        </div>
      </div>
    `;
  });

  html += `</div></div>`;
  app.innerHTML = html;
}

// INICIO

goHome();
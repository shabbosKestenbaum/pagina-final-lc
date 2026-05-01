// DATA

const reviews = [
  {
    id: "bone-1",
    title: "Bone #1",
    series: "Bone",
    seriesId: "bone",
    type: "issue",
    image: "",
    file: "reseñas/reseñas/bone/bone1.html",
    featured: true
  },
  {
    id: "usm-1",
    title: "Ultimate Spider-Man (2009) #1",
    series: "Ultimate Spider-Man (2009)",
    seriesId: "usm",
    type: "issue",
    image: "",
    content: "A fresh start...",
    featured: true
  },
{
  id: "amm-10",
  title: "Absolute Martian Manhunter #10",
  series: "Absolute Martian Manhunter",
  seriesId: "amm",
  type: "issue",
  image: "images/amm10.jpg",
  content: "Strong psychological themes...",  // ✅ comma
  featured: true
},
  {
    id: "amm-vol1",
    title: "Absolute Martian Manhunter Vol. 1 (TPB)",
    series: "Absolute Martian Manhunter",
    seriesId: "amm",
    type: "tpb",
    image: "",
    content: "Collects issues #1 - #6 of Absolute Martian Manhunter",
    featured: false
  }
];

// PÁGINA DE INICIO

function goHome() {
  const app = document.getElementById("app");

  const featuredReviews = reviews.filter(r => r.featured);

  let html = `
    <div class="container">
      <h2>Featured Reviews</h2>
      <div class="grid">
  `;

  featuredReviews.forEach(review => {
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

async function openReview(id) {
  const review = reviews.find(r => r.id === id);
  const app = document.getElementById("app");

  const response = await fetch(review.file);
  const content = await response.text();

  app.innerHTML = `
    <div class="container">
      <div style="display:flex; gap:20px; flex-wrap:wrap;">
        
        <img src="${review.image}" style="width:250px; border-radius:10px;">

        <div style="max-width:600px;">
          ${content}

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
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
    id: "bone-41",
    title: "Bone #41",
    series: "Bone",
    seriesId: "bone",
    type: "issue",
    image: "",
    file: "reseñas/reseñas/bone/bone41.html",
    featured: false
  },
   {
    id: "bone-42",
    title: "Bone #42",
    series: "Bone",
    seriesId: "bone",
    type: "issue",
    image: "",
    file: "reseñas/reseñas/bone/bone42.html",
    featured: false
  },
  {
    id: "bb-vol1",
    title: "Invincible Universe: Battle Beast Vol. 1",
    series: "Battle Beast",
    seriesId: "bb",
    type: "tpb",
    image: "",
    file: "reseñas/reseñas/bb/bb-vol1.html",
    featured: true
  },
  {
    id: "bb-7",
    title: "Invincible Universe: Battle Beast #7",
    series: "Battle Beast",
    seriesId: "bb",
    type: "issue",
    image: "",
    file: "reseñas/reseñas/bb/bb7.html",
    featured: false
  },
  {
    id: "teotfw-fs",
    title: "THE END OF THE FUCKING WORLD (Full Series)",
    series: "The End of The Fucking World",
    seriesId: "teotfw",
    type: "tpb",
    image: "",
    file: "reseñas/reseñas/teotfw/teotfw.html",
    featured: true
  },
  {
    id: "crossed-wywh",
    title: "Crossed: Wish You Were Here",
    series: "Crossed",
    seriesId: "crossed",
    type: "tpb",
    image: "",
    file: "reseñas/reseñas/crossed/wywh.html",
    featured: true
  },
  {
    id: "crossed-og",
    title: "Crossed #0 - #9 (Original Garth Ennis Run)",
    series: "Crossed",
    seriesId: "crossed",
    type: "tpb",
    image: "",
    file: "reseñas/reseñas/crossed/og.html",
    featured: false
  },
  {
    id: "usm-1",
    title: "Ultimate Spider-Man (2009) #1",
    series: "Ultimate Spider-Man (2009)",
    seriesId: "usm",
    type: "issue",
    image: "",
    file: "reseñas/reseñas/usm/usm1.html",
    featured: true
  },
  {
    id: "usm-2",
    title: "Ultimate Spider-Man (2009) #2",
    series: "Ultimate Spider-Man (2009)",
    seriesId: "usm",
    type: "issue",
    image: "",
    file: "reseñas/reseñas/usm/usm2.html",
    featured: false
  },
  {
    id: "hb-1",
    title: "Hellblazer #1",
    series: "Hellblazer",
    seriesId: "hellblazer",
    type: "issue",
    image: "",
    file: "reseñas/reseñas/hellblazer/hb1.html",
    featured: true
  },
  {
    id: "hb-2",
    title: "Hellblazer #2",
    series: "Hellblazer",
    seriesId: "hellblazer",
    type: "issue",
    image: "",
    file: "reseñas/reseñas/hellblazer/hb2.html",
    featured: false
  },
{
  id: "amm-10",
  title: "Absolute Martian Manhunter #10",
  series: "Absolute Martian Manhunter",
  seriesId: "amm",
  type: "issue",
  image: "images/amm10.jpg",
  file: "reseñas/reseñas/amm/amm10.html",
  featured: true
},
{
  id: "amm-9",
  title: "Absolute Martian Manhunter #9",
  series: "Absolute Martian Manhunter",
  seriesId: "amm",
  type: "issue",
  image: "images/amm10.jpg",
  file: "reseñas/reseñas/amm/amm9.html",
  featured: false
},
  {
    id: "amm-vol1",
    title: "Absolute Martian Manhunter Vol. 1 (TPB)",
    series: "Absolute Martian Manhunter",
    seriesId: "amm",
    type: "tpb",
    image: "",
    file: "reseñas/reseñas/amm/amm-vol1.html",
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
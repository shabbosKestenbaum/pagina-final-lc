// DATA

const reviews = [
  {
    id: "bone-1",
    title: "Bone #1",
    series: "Bone",
    seriesId: "bone",
    type: "issue",
    image: "imgs/bone/bone1.jpg",
    file: "reseñas/reseñas/bone/bone1.html",
    excerpt: "Lorem ipsum...",
    featured: true
  },
   {
    id: "bone-41",
    title: "Bone #41",
    series: "Bone",
    seriesId: "bone",
    type: "issue",
    image: "imgs/bone/bone41.jpg",
    file: "reseñas/reseñas/bone/bone41.html",
    excerpt: "Lorem ipsum...",
    featured: false
  },
   {
    id: "bone-42",
    title: "Bone #42",
    series: "Bone",
    seriesId: "bone",
    type: "issue",
    image: "imgs/bone/bone42.jpg",
    file: "reseñas/reseñas/bone/bone42.html",
    excerpt: "Lorem ipsum...",
    featured: false
  },
  {
    id: "bb-vol1",
    title: "Invincible Universe: Battle Beast Vol. 1",
    series: "Battle Beast",
    seriesId: "bb",
    type: "tpb",
    image: "imgs/bb/bbvol1.jpg",
    file: "reseñas/reseñas/bb/bb-vol1.html",
    excerpt: "Kirkman se junta con Ottley una vez más para traer de vuelta a un favorito del universo de Invincible, está vez más fantástico y violento que nunca.",
    featured: true
  },
  {
    id: "bb-7",
    title: "Invincible Universe: Battle Beast #7",
    series: "Battle Beast",
    seriesId: "bb",
    type: "issue",
    image: "imgs/bb/bb7.jpg",
    file: "reseñas/reseñas/bb/bb7.html",
    excerpt: "Lorem ipsum...",
    featured: false
  },
  {
    id: "teotfw-fs",
    title: "THE END OF THE FUCKING WORLD (Full Series)",
    series: "The End of The Fucking World",
    seriesId: "teotfw",
    type: "tpb",
    image: "imgs/teotfw/teotfw.png",
    file: "reseñas/reseñas/teotfw/teotfw.html",
    excerpt: "Lorem ipsum...",
    featured: true
  },
  {
    id: "crossed-wywh",
    title: "Crossed: Wish You Were Here",
    series: "Crossed",
    seriesId: "crossed",
    type: "full run",
    image: "imgs/crossed/wywh.webp",
    file: "reseñas/reseñas/crossed/wywh.html",
    excerpt: "Lorem ipsum...",
    featured: true
  },
  {
    id: "crossed-og",
    title: "Crossed #0 - #9 (Original Garth Ennis Run)",
    series: "Crossed",
    seriesId: "crossed",
    type: "tpb",
    image: "imgs/crossed/crossedog.webp",
    file: "reseñas/reseñas/crossed/og.html",
    excerpt: "Lorem ipsum...",
    featured: false
  },
  {
    id: "usm-1",
    title: "Ultimate Spider-Man (2009) #1",
    series: "Ultimate Spider-Man (2009)",
    seriesId: "usm",
    type: "issue",
    image: "imgs/usm/usm1.jpg",
    file: "reseñas/reseñas/usm/usm1.html",
    excerpt: "Lorem ipsum...",
    featured: true
  },
  {
    id: "usm-2",
    title: "Ultimate Spider-Man (2009) #2",
    series: "Ultimate Spider-Man (2009)",
    seriesId: "usm",
    type: "issue",
    image: "imgs/usm/usm2.jpg",
    file: "reseñas/reseñas/usm/usm2.html",
    excerpt: "Lorem ipsum...",
    featured: false
  },
  {
    id: "pwbf-1",
    title: "The Punisher (2000) #1",
    series: "The Punisher: Welcome Back, Frank",
    seriesId: "pwbf",
    type: "issue",
    image: "imgs/pwbf/pwbf1.jpg",
    file: "reseñas/reseñas/pwbf/pwbf1.html",
    excerpt: "Punisher está de vuelta, y esta vez más violento que nunca. Garth Ennis reintroduce al personaje con su característica irreverencia y da pie al futuro de Frank Castle.",
    featured: true
  },
  {
    id: "pwbf-2",
    title: "The Punisher (2000) #2",
    series: "The Punisher: Welcome Back, Frank",
    seriesId: "pwbf",
    type: "issue",
    image: "imgs/pwbf/pwbf2.jpg",
    file: "reseñas/reseñas/pwbf/pwbf2.html",
    excerpt: "Mientras Punisher continúa su vendetta contra los Gnucci, descubrimos nuevos aliados (¿o problemas?) y la violencia no cesa.",
    featured: false
  },
{
  id: "amm-10",
  title: "Absolute Martian Manhunter #10",
  series: "Absolute Martian Manhunter",
  seriesId: "amm",
  type: "issue",
  image: "imgs/amm/amm10.jpeg",
  file: "reseñas/reseñas/amm/amm10.html",
  excerpt: "John se enfrenta a Rainbow mientras que el séquito de White Martian diseca a su compañero. La manipulación de Tyler va de mal en peor.",
  featured: true
},
{
  id: "amm-9",
  title: "Absolute Martian Manhunter #9",
  series: "Absolute Martian Manhunter",
  seriesId: "amm",
  type: "issue",
  image: "imgs/amm/amm9.webp",
  file: "reseñas/reseñas/amm/amm9.html",
  excerpt: "John enfrenta nuevos demonios (o marcianos) mientras su familia se derrumba. La Agencia abre al Marciano Verde desde adentro. ¿La desesperación? La única opción.",
  featured: false
},
  {
    id: "amm-vol1",
    title: "Absolute Martian Manhunter Vol. 1: Martian Vision (HC)",
    series: "Absolute Martian Manhunter",
    seriesId: "amm",
    type: "hc",
    image: "imgs/amm/ammvol1.png",
    file: "reseñas/reseñas/amm/amm-vol1.html",
    excerpt: "El detective del FBI John Jones busca la verdad detrás de una serie de eventos inexplicables por la psicología humana.",
    featured: false
  }
];

// test

function goHomeAndReset() {
  window.history.pushState({}, "", "index.html");
  goHome();
}

function renderSidebar() {
  const sidebar = document.getElementById("sidebar");

  // get unique series
  const seriesMap = {};

  reviews.forEach(r => {
    seriesMap[r.seriesId] = r.series;
  });

  let html = `<h3>Archive</h3>`;

  Object.entries(seriesMap).forEach(([id, name]) => {
    html += `
      <a href="#" class="sidebar-link" onclick="openSeries('${id}'); return false;">
        ${name}
      </a>
    `;
  });

  sidebar.innerHTML = html;
}

// CARD RENDERER

function renderCard(review) {
  return `
    <div class="card">
      <img src="${review.image}" alt="${review.title}">

      <div class="card-content">
        <h4>${review.title}</h4>
        <p><strong>${review.series || ""}</strong></p>

        <p class="type-label">[${review.type}]</p>

        <p class="excerpt">${review.excerpt || ""}</p>

        <a href="#" onclick="openReview('${review.id}'); return false;" class="read-more">
          Leer más >>
        </a>
      </div>
    </div>
  `;
}

// PÁGINA DE INICIO

function goHome() {
  const app = document.getElementById("app");

  const featuredReviews = reviews.filter(r => r.featured);

  let html = `
    <div class="container">
      <h2>Reseñas Recomendadas</h2>
      <div class="grid">
  `;

  featuredReviews.forEach(review => {
  html += renderCard(review);
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
            Ver Serie Completa
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
  html += renderCard(r);
});

  html += `</div></div>`;
  app.innerHTML = html;
}


//test 2

function init() {
  renderSidebar();
  goHome();

  const params = new URLSearchParams(window.location.search);
  const reviewId = params.get("review");

  if (reviewId) {
    openReview(reviewId);
  } else {
    goHome();
  }
}

init();

// INICIO

goHome();


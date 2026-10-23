const attractions = [
  {
    name: 'Bistro Chapultepec',
    folder: 'bistro-chapultepec',
    principal: 'images (5)-principal.jpg',
    photos: [
      'images (5)-principal.jpg',
      'images.jpg',
      'ta-img-20200229-165903.jpg',
      'transferir.jpg',
      'unnamed (1).webp',
      'unnamed (2).webp',
      'unnamed.webp'
    ],
    description:
      'Nestled in the tranquil green expanse of Mexico City’s famous Chapultepec Forest, Bistro Chapultepec is a charming lakeside restaurant that seamlessly blends classic European bistro warmth with vibrant Mexican culinary traditions. With its rustic-chic interior and open-air terrace overlooking the lake, it is a favorite spot for long family breakfasts, relaxed weekend lunches, and peaceful afternoon coffee breaks away from the urban rush.',
    location:
      'Calle Lago Mayor S/N, Second Section of Chapultepec Forest, Mexico City.',
    highlights: [
      'Warm European bistro decor',
      'Scenic lakeside seating',
      'An elevated menu featuring hearty breakfast classics and refined fusion dishes'
    ],
    didYouKnow:
      'The menu features a delicious combination of French techniques and Mexican ingredients, making traditional dishes like Chilaquiles or French onion soup feel uniquely fresh and elevated.'
  },
  {
    name: 'Casa Polanco',
    folder: 'casa-polanco',
    principal: 'images (4)-principal.jpg',
    photos: [
      '673aa44b342deb5c46e32381_Casa Polanco (1).jpg',
      '695b2e3dc431ae14af0d3189_24.CasaPolanco.jpg',
      'images (1).jpg',
      'images (4)-principal.jpg',
      'images.jpg'
    ],
    description:
      'Casa Polanco is an ultra-exclusive luxury boutique hotel housed in a meticulously restored 1940s neo-colonial mansion. Overlooking the lush greenery of Lincoln Park in the prestigious Polanco district, this hideaway offers the sophisticated ambiance of a private, high-end residence paired with world-class personalized service.',
    location: 'Polanco District (facing Parque Lincoln), Mexico City.',
    highlights: [
      'Curated original art',
      'Bespoke interior design and tranquil courtyards',
      'A rooftop terrace and tailored concierge services'
    ],
    didYouKnow:
      "Rather than functioning like a standard commercial hotel, Casa Polanco is designed to feel like visiting a wealthy art collector's home. Guests enjoy complimentary afternoon tea and artisanal cocktails served in its elegant library."
  },
  {
    name: 'Chapultepec Castle',
    folder: 'castillo-chapultepec',
    principal:
      'castillo-de-chapultepec-museu-nacional-de-historia-principal.jpg',
    photos: [
      'castillo-de-chapultepec-museu-nacional-de-historia-principal.jpg',
      'images (2).jpg',
      'images (4).jpg',
      'garden-on-the-roof.jpg',
      'A_trip_to_Mexico,_being_notes_of_a_journey_from_Lake_Erie_to_Lake_Tezcuco_and_back,_with_an_appendix,_containing_and_being_a_paper_about_the_ancient_nations_a.jpg',
      'images (1).jpg',
      'images (3).jpg',
      'images.jpg',
      'mural_feudalismo.jpg',
      'mural_retablo_1.jpg',
      '21051602160260a080620645510-92244_mural_la_fusión_de_dos_culturas.png',
      'unnamed (1).webp',
      'unnamed.jpg',
      'unnamed.webp'
    ],
    description:
      "Perched atop Chapultepec Hill, Chapultepec Castle is one of Mexico City's most iconic monuments. Today, it serves as the National Museum of History (Museo Nacional de Historia), housing historic murals, royal carriages, armor, and lavish period furniture. Its elevated gardens offer breathtaking panoramic views across the city skyline and Paseo de la Reforma.",
    location: 'First Section of Chapultepec Forest, Mexico City.',
    highlights: [
      'Stately royal rooms',
      'Stained-glass corridors and lush rooftop gardens',
      'Extensive historic art collections'
    ],
    didYouKnow:
      'It is the only royal castle in North America that actually served as an official residence for royalty. It was home to Emperor Maximilian I of Mexico and Empress Carlota in the 1860s.'
  },
  {
    name: 'Chichen Itza',
    folder: 'chichen-itza',
    principal: 'images (1)-principal.jpg',
    photos: [
      'images (1)-principal.jpg',
      'chichen-itza-cancun.jpg',
      'images (2).jpg',
      'images (3).jpg',
      'images.jpg'
    ],
    description:
      "A UNESCO World Heritage Site and one of the New Seven Wonders of the World, Chichén Itzá is Mexico's most renowned ancient Maya archaeological city. Dominating the landscape is the monumental Temple of Kukulcán, also known as El Castillo, an architectural masterwork demonstrating the Maya civilization's extraordinary knowledge of astronomy, geometry, and engineering.",
    location:
      'Tinúm Municipality, Yucatán State (roughly 2 hours west of Cancún).',
    highlights: [
      'El Castillo pyramid',
      'The Great Ball Court',
      'The Temple of the Warriors and the Sacred Cenote'
    ],
    didYouKnow:
      'During the Spring and Autumn equinoxes, the natural angle of the sun creates a shadow effect down the staircase of El Castillo that resembles a massive serpent slithering down to the earth to honor the deity Kukulcán.'
  },
  {
    name: 'Grand Fiesta Americana Coral Beach',
    folder: 'grand-fiesta-americana-coral-beach',
    principal: 'resort-view-principal.jpg',
    photos: [
      'resort-view-principal.jpg',
      'images (1).jpg',
      'images (2).jpg',
      'images (3).jpg',
      'images (4).jpg',
      'images (5).jpg',
      'images (6).jpg',
      'images.jpg'
    ],
    description:
      "Grand Fiesta Americana is one of Mexico's premier flagship luxury hotel brands, renowned for its refined hospitality, architectural elegance, and prime locations in major cultural and resort destinations such as Los Cabos, Cancún, and Mexico City. Guests experience upscale dining, world-class spas, and comprehensive leisure amenities designed for both vacationers and executive travelers.",
    location:
      'Key destinations across Mexico, including Riviera Maya, Los Cabos, Mexico City, and Guadalajara.',
    highlights: [
      'Oceanfront suites',
      'Full-service wellness spas',
      'High-end gastronomy and personalized concierge services'
    ],
    didYouKnow:
      'Grand Fiesta Americana Los Cabos All-Golf & Spa Resort features a championship golf course consistently ranked among the best in Latin America, set directly where the desert meets the Sea of Cortez.'
  },
  {
    name: 'Isla Mujeres',
    folder: 'isla-mujeres',
    principal: 'images (1)-principal.jpg',
    photos: [
      'images (1)-principal.jpg',
      'caption.jpg',
      'images (1).jpg',
      'images (2).jpg',
      'images (3).jpg',
      'images.jpg',
      'Isla_Mujeres,_México.jpg',
      'MexicoIslaMujeres-111-683x1024.jpg',
      'TAL-isla-mujeres-town-ISLAMUJERES0723-f36e6157e0624a098889cdb963166004.jpg'
    ],
    description:
      'Located just a short 20-minute ferry ride across the turquoise waters from Cancún, Isla Mujeres (Island of Women) is a tranquil, laid-back Caribbean island paradise. Famous for its powdery white-sand beaches, crystal-clear waters, and golf-cart transportation, it offers an idyllic escape from the bustling mainland resorts.',
    location: 'Caribbean Sea, Quintana Roo State (opposite Cancún).',
    highlights: [
      "Playa Norte, frequently named among the world's best beaches",
      'Garrafón Reef Park',
      'Punta Sur cliffside and underwater snorkeling routes'
    ],
    didYouKnow:
      'The island earned its name when Spanish explorer Francisco Hernández de Córdoba landed in 1517 and discovered numerous statues dedicated to Ixchel, the Maya goddess of fertility, childbirth, and medicine.'
  },
  {
    name: 'National Museum of Anthropology',
    folder: 'museo-nacional-antropologia',
    principal: 'images (3)-principal.jpg',
    photos: [
      'images (3)-principal.jpg',
      'caption.jpg',
      'e3bed430dc7513ffdcad812368928f47f21186fb-1600x1066.jpg',
      'images (1).jpg',
      'images (2).jpg',
      'images.jpg',
      'museu-nacional-antropologia-mexico.jpg',
      'photo8jpg.jpg'
    ],
    description:
      "The National Museum of Anthropology is Mexico's largest and most visited museum, widely regarded as a world-class architectural and cultural triumph. Designed by visionary architect Pedro Ramírez Vázquez, its 23 exhibition halls contain the world's most comprehensive collection of pre-Columbian Mesoamerican heritage.",
    location:
      'Paseo de la Reforma & Calzada Gandhi, First Section of Chapultepec Forest, Mexico City.',
    highlights: [
      'The Aztec Sun Stone (Aztec Calendar)',
      'The jade burial mask of King Pakal',
      'Giant Olmec colossal heads and the iconic El Paraguas courtyard fountain canopy'
    ],
    didYouKnow:
      'The courtyard is centered around a massive single-column umbrella structure, El Paraguas, that pours an artificial waterfall into a lower basin, symbolizing a sacred Mesoamerican tree.'
  },
  {
    name: 'Palace of Fine Arts',
    folder: 'palacio-bellas-artes',
    principal: 'images (2)-principal.jpg',
    photos: [
      'images (2)-principal.jpg',
      '2c_MEX_Palace_Art_JPEG_img-01.avif',
      'images (1).jpg',
      'images.jpg',
      'interior-of-the-palacio-bellas-artes-in-mexico-city-df-RT5E4R.jpg',
      'Liberacion_o_La_humanidad_se_libera_de_la_miseria_de_Jorge_González_Camarena.jpg',
      'MayaArtDecoBADF.JPG',
      'Mural._El_hombre_en_el_cruce_de_caminos._Diego_rivera_(1934).JPG',
      'Palacio_de_Bellas_Artes,_México_D.F.,_México,_2013-10-13,_DD_40.jpg',
      'Palacio_de_las_Bellas_Artes_Vitral_del_Techo.jpg',
      'Panel_central_del_mural_Nueva_Democracia_en_el_Palacio_de_Bellas_Artes.jpg'
    ],
    description:
      "Considered Mexico's premier cultural center, the Palacio de Bellas Artes is a stunning architectural landmark in Mexico City's historic center. Combining opulent Neoclassical and Art Nouveau exterior architecture with a rich Art Deco interior, it hosts top-tier opera, classical music, dance performances, and major art exhibitions.",
    location:
      'Historic Center (Centro Histórico), Avenida Juárez, Mexico City.',
    highlights: [
      'Iconic orange and yellow tiled dome',
      'Massive internal murals by Diego Rivera, David Alfaro Siqueiros, and José Clemente Orozco',
      'The famous Tiffany stained-glass stage curtain'
    ],
    didYouKnow:
      'The main theater stage features a massive 22-ton crystal fold curtain crafted by Tiffany & Co. in New York, composed of nearly one million pieces of colored glass depicting the Valley of Mexico and its volcanoes.'
  },
  {
    name: 'Maya Village',
    folder: 'pueblo-maya',
    principal: 'transferir (1)-principal.jpg',
    photos: [
      'transferir (1)-principal.jpg',
      'beautiful-open-restaurant.jpg',
      'images.jpg',
      'pueblo-maya.jpg',
      'a-little-of-everythig.jpg',
      'pueblo-maya (1).jpg'
    ],
    description:
      'Pueblo Maya refers to both historical Mayan settlements and living Maya heritage communities scattered across Southeastern Mexico, including the Yucatán Peninsula, Chiapas, and Quintana Roo. Visiting a contemporary or reconstructed Pueblo Maya gives travelers deep immersion into ancient culinary traditions, artisan craftsmanship, language, and centuries-old agricultural customs.',
    location:
      'Southeastern Mexico (Yucatán, Quintana Roo, Campeche, and Chiapas regions).',
    highlights: [
      'Authentic Maya cuisine, such as Cochinita Pibil',
      'Traditional thatched-roof homes (palapas)',
      'Hand-loom weaving and organic cocoa workshops'
    ],
    didYouKnow:
      'Despite the fall of ancient cities centuries ago, over 6 million Maya people still live in Mexico and Central America today, keeping their ancestral languages, agricultural practices, and spiritual ceremonies vibrant and alive.'
  }
]

const homeView = document.querySelector('#home-view')
const detailView = document.querySelector('#detail-view')
const attractionsGrid = document.querySelector('#attractions-grid')
const carouselImage = document.querySelector('#carousel-image')
const carouselBackdrop = document.querySelector('#carousel-backdrop')
const backgroundMusic = document.querySelector('#background-music')
const musicTracks = ['background.mp3', 'background-2.mp3', 'background-3.mp3']
let currentTrack = 0
let currentAttraction = null
let currentSlide = 0
let slideTimer

const imagePath = (attraction, file) =>
  `${encodeURIComponent(attraction.folder).replace(/%2F/g, '/')}/${encodeURIComponent(file).replace(/%2F/g, '/')}`

function renderCards() {
  attractionsGrid.innerHTML = attractions
    .map(
      (attraction, index) => `
    <button class="attraction-card" type="button" data-index="${index}">
      <img src="${imagePath(attraction, attraction.principal)}" alt="${attraction.name}" loading="lazy">
      <span class="card-overlay"><span class="card-number">0${index + 1}</span><span class="card-title">${attraction.name}</span></span>
    </button>
  `
    )
    .join('')
  attractionsGrid
    .querySelectorAll('.attraction-card')
    .forEach((card) =>
      card.addEventListener('click', () =>
        openAttraction(Number(card.dataset.index))
      )
    )
}

function renderDots() {
  document.querySelector('#carousel-dots').innerHTML = currentAttraction.photos
    .map(
      (_, index) =>
        `<button class="dot ${index === currentSlide ? 'active' : ''}" type="button" aria-label="Go to photo ${index + 1}" data-slide="${index}"></button>`
    )
    .join('')
  document
    .querySelectorAll('.dot')
    .forEach((dot) =>
      dot.addEventListener('click', () => showSlide(Number(dot.dataset.slide)))
    )
}

function showSlide(index) {
  currentSlide =
    (index + currentAttraction.photos.length) % currentAttraction.photos.length
  const currentImage = imagePath(
    currentAttraction,
    currentAttraction.photos[currentSlide]
  )
  carouselBackdrop.src = currentImage
  carouselImage.src = currentImage
  carouselImage.alt = `${currentAttraction.name} - photo ${currentSlide + 1}`
  document.querySelector('#slide-counter').textContent =
    `${String(currentSlide + 1).padStart(2, '0')} / ${String(currentAttraction.photos.length).padStart(2, '0')}`
  renderDots()
  carouselImage.style.animation = 'none'
  requestAnimationFrame(() => {
    carouselImage.style.animation = 'image-in .55s ease both'
  })
}

function startCarousel() {
  clearInterval(slideTimer)
  slideTimer = setInterval(() => showSlide(currentSlide + 1), 5000)
}

function openAttraction(index) {
  currentAttraction = attractions[index]
  currentSlide = 0
  document.querySelector('#detail-title').textContent = currentAttraction.name
  document.querySelector('#detail-location').textContent =
    currentAttraction.location
  document.querySelector('#detail-description-text').textContent =
    currentAttraction.description
  document.querySelector('#detail-highlights').innerHTML =
    currentAttraction.highlights
      .map((highlight) => `<li>${highlight}</li>`)
      .join('')
  document.querySelector('#detail-did-you-know-text').textContent =
    currentAttraction.didYouKnow
  homeView.hidden = true
  detailView.hidden = false
  showSlide(0)
  startCarousel()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function showHome() {
  clearInterval(slideTimer)
  detailView.hidden = true
  homeView.hidden = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

renderCards()
const markMusicAsPlaying = () => {
  document.querySelector('#music-button').classList.add('is-playing')
  document
    .querySelector('#music-button')
    .setAttribute('aria-label', 'Turn off background music')
  document.querySelector('#music-status').textContent = 'Ambient sound on'
}

const playMusic = () => backgroundMusic.play().then(markMusicAsPlaying)

backgroundMusic.addEventListener('ended', () => {
  currentTrack = (currentTrack + 1) % musicTracks.length
  backgroundMusic.src = musicTracks[currentTrack]
  playMusic().catch(() => {})
})

playMusic().catch(() => {
  const resumeMusic = () =>
    backgroundMusic
      .play()
      .then(markMusicAsPlaying)
      .catch(() => {})
  document.addEventListener('pointerdown', resumeMusic, { once: true })
  document.addEventListener('keydown', resumeMusic, { once: true })
})
document.querySelector('#brand-button').addEventListener('click', showHome)
document.querySelector('#back-button').addEventListener('click', showHome)
document.querySelector('#previous-button').addEventListener('click', () => {
  showSlide(currentSlide - 1)
  startCarousel()
})
document.querySelector('#next-button').addEventListener('click', () => {
  showSlide(currentSlide + 1)
  startCarousel()
})

document.querySelector('#music-button').addEventListener('click', () => {
  const button = document.querySelector('#music-button')
  if (backgroundMusic.paused) {
    playMusic().then(() => {
      button.classList.add('is-playing')
      button.setAttribute('aria-label', 'Turn off background music')
      document.querySelector('#music-status').textContent = 'Ambient sound on'
    })
  } else {
    backgroundMusic.pause()
    button.classList.remove('is-playing')
    button.setAttribute('aria-label', 'Turn on background music')
    document.querySelector('#music-status').textContent = 'Ambient sound off'
  }
})

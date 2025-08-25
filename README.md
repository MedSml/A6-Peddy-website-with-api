# Peddy Website with API — Responsive Pet UI & JSON Backend 🐾

[![Releases](https://img.shields.io/badge/Releases-Download-blue?logo=github)](https://github.com/MedSml/A6-Peddy-website-with-api/releases)  

![Peddy Hero](https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=80)

Badges
- ![HTML5](https://img.shields.io/badge/HTML5-%23E34F26?logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-%231572B6?logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?logo=javascript&logoColor=black)
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-%2338B2AC?logo=tailwindcss&logoColor=white)
- ![DaisyUI](https://img.shields.io/badge/DaisyUI-%23A78BFA?logo=tailwindcss&logoColor=white)
- ![JSON API](https://img.shields.io/badge/JSON-API-green)
- Topics: api · css3 · daisyui · dom-manipulation · fetch-api · flexbox · fontawesome · googlefonts · grid · html5 · javascript · json · json-api · tailwindcss

What this repo contains
- A responsive single-page site for browsing pets.
- A mock JSON API and sample JSON files to drive the UI.
- Client code that demonstrates fetch API calls, DOM updates, and basic routing.
- Styles built with Tailwind CSS and DaisyUI. Icons from Font Awesome. Fonts from Google Fonts.
- Grid and flex layouts for cards and responsive lists.

Download and run the release
- The project release assets live at: https://github.com/MedSml/A6-Peddy-website-with-api/releases  
- Download the release asset from that page and execute the file included in the release. The asset contains the build and a static server script to run the site locally.

If that link fails, open the repository Releases section to find the latest packaged build:
[https://github.com/MedSml/A6-Peddy-website-with-api/releases](https://github.com/MedSml/A6-Peddy-website-with-api/releases)

Demo and screenshots
![Gallery](https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1200&q=80)
- Live demo shows a searchable pet list, detail modals, and filters.
- Cards use grid layout. Details use flexbox for responsive stacks.
- The UI adapts from mobile to desktop with a minimal CSS footprint.

Core features
- Fetch API calls to a JSON endpoint that returns pet data.
- Client-side filtering and sorting (by species, size, age).
- Modal UI for pet details with image carousel.
- Local favorites stored in localStorage.
- Accessible markup for keyboard navigation.
- Light-weight CSS using Tailwind and DaisyUI components.

Tech stack
- HTML5, CSS3, JavaScript (ES6+)
- Tailwind CSS + DaisyUI
- Font Awesome icons
- Google Fonts (Inter, Nunito)
- JSON API (static JSON files used as mock API)
- No build step required for the demo build. Optional tools: Node.js, live-server.

Quick start (development)
1. Clone the repo
   git clone https://github.com/MedSml/A6-Peddy-website-with-api.git
2. Open index.html in your browser
   - Or serve it:
     npx live-server
3. The app uses /data/pets.json as the API. You can run a static server or connect a real API.

Release artifact (packaged build)
- If you prefer the packaged build, download the file from the Releases page:
  https://github.com/MedSml/A6-Peddy-website-with-api/releases
- After download, extract and execute the included run script:
  - On macOS / Linux:
    chmod +x run.sh
    ./run.sh
  - On Windows:
    run.bat
- The script starts a local static server and opens the default browser.

API reference (mock)
- GET /api/pets
  - Returns an array of pet objects.
  - Query params: q (search), species, size, page, limit
- GET /api/pets/:id
  - Returns a single pet object by id.
- Example pet object
  {
    "id": "p001",
    "name": "Buddy",
    "species": "Dog",
    "breed": "Beagle",
    "age": 3,
    "size": "Medium",
    "images": ["..."],
    "description": "Friendly and curious",
    "location": "Shelter A"
  }

Examples: client fetch
- List fetch
  fetch('/api/pets?q=buddy&species=Dog')
    .then(r => r.json())
    .then(data => renderPetList(data))
- Detail fetch
  fetch('/api/pets/p001')
    .then(r => r.json())
    .then(pet => showDetailModal(pet))

Client patterns used
- Module pattern for UI components.
- Event delegation on the list container.
- Debounced search input (simple setTimeout).
- localStorage for favorites and last search state.
- Progressive image loading with low-res placeholders.

UI components
- Header with search and filters.
- Responsive grid of PetCard components.
- PetDetail modal with image carousel.
- Favorite button with state sync to localStorage.
- Footer with API status and version info.

Accessibility
- All interactive elements use semantic HTML.
- Modal traps focus while open.
- Buttons use aria-label where icon-only controls appear.
- Keyboard handlers for list navigation.

Styling and design
- Tailwind utility classes drive layout and spacing.
- DaisyUI provides themed components: cards, modals, badges.
- CSS variables hold primary colors for easy theme swapping.
- Font Awesome provides intuitive glyphs for species, location, and actions.
- Google Fonts set for readable UI copy.

Folder structure (example)
- /index.html
- /css/ (compiled tailwind or CDN)
- /js/
  - app.js
  - api.js
  - ui/
    - petCard.js
    - modal.js
- /data/
  - pets.json
- /assets/
  - images/
  - icons/

Testing
- Manual test flows included:
  - Search and filter across species.
  - Open detail modal; navigate images with arrow keys.
  - Add and remove favorites; verify localStorage persistence.
  - Mobile viewport checks for responsive breakpoints.
- Automated tests are not included in the demo build.

Performance tips
- Serve images in modern formats (WebP).
- Use image srcset for responsive images.
- Defer non-critical scripts and set script type="module".
- Cache JSON responses with IndexedDB or service worker for offline use.

Extending the project
- Replace mock JSON with a real REST API or GraphQL endpoint.
- Add authentication to save favorites per user.
- Add server-side rendering for SEO if needed.
- Add unit tests for API wrapper and UI logic.

Contributing
- Fork the repository.
- Create a branch for your feature: feature/your-feature
- Commit with clear messages.
- Open a pull request targeting main.
- Include a short description and screenshots if UI changes appear.

License
- MIT License. Feel free to reuse components.

Credits and assets
- Photos: Unsplash (public)
- Icons: Font Awesome
- UI: Tailwind CSS and DaisyUI

Contact
- For issues, use the GitHub Issues section on the repo.
- For release downloads, visit:
  https://github.com/MedSml/A6-Peddy-website-with-api/releases

Thank you for checking this project.
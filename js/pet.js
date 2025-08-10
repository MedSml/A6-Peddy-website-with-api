// function:: fetching all pets data from server (All Pets)
const loadAllPetsData = async () => {
  try {
    const responseToPets = await fetch(
      `https://openapi.programming-hero.com/api/peddy/pets`
    );
    const allPetsData = await responseToPets.json();

    // call for display
    displayPetIntoCard(allPetsData.pets);
  } catch (err) {
    console.error("Error has Found:", err);
  }
};

// function::display all pets data  as card
const displayPetIntoCard = (pets) => {
  const petCardsContainer = document.querySelector("#pet-cards-container");
  //   petCardsContainer.innerHTML = "";

  pets.forEach((pet) => {
    const petCard = document.createElement("div");
    petCard.classList = "card bg-base-100 border border-[#1313131A] p-[1rem]";
    petCard.innerHTML = `
    <figure class="w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                class="rounded-xl w-full object-cover"
              />
            </figure>
            <div class="mt-[1.24rem]">
              <!-- pet information  -->
              <div
                class="space-y-2 border-b border-[#1313131A] pb-[0.825rem] mb-[0.825rem]"
              >
                <h5 class="font-inter font-bold text-[1.1rem] text-[#131313]">
                  Mister Tartosh
                </h5>
                <p class="text-[1rem] text-[#131313B3]">
                  <i class="fa-solid fa-qrcode"></i> Breed: Golder retriever
                </p>
                <p class="text-[1rem] text-[#131313B3]">
                  <i class="fa-solid fa-calendar"></i> Birth: 2024
                </p>
                <p class="text-[1rem] text-[#131313B3]">
                  <i class="fa-solid fa-mercury"></i> Gender: Female
                </p>
                <p class="text-[1rem] text-[#131313B3]">
                  <i class="fa-solid fa-dollar-sign"></i> Price : 199$
                </p>
              </div>

              <!-- action buttons  -->
              <div
                class="flex gap-[0.825rem] justify-evenly items-center md:flex-wrap lg:flex-nowrap"
              >
                <button
                  class="btn border border-[#0E7A8126] bg-white rounded text-[#13131399] hover:bg-[#0E7A81B3] hover:border-[#0E7A81] hover:text-white hover:rounded-lg transition-all duration-[2000ms]"
                  type="button"
                >
                  <i class="fa-solid fa-thumbs-up"></i>
                </button>
                <button
                  class="btn border border-[#0E7A8126] bg-white rounded text-[#0E7A81] hover:bg-[#0E7A81B3] hover:border-[#0E7A81] hover:text-white hover:rounded-xl transition-all duration-[2000ms]"
                  type="button"
                >
                  Adopt
                </button>
                <button
                  class="btn border border-[#0E7A8126] bg-white rounded text-[#0E7A81] hover:bg-[#0E7A81B3] hover:border-[#0E7A81] hover:text-white hover:rounded-2xl transition-all duration-[2000ms]"
                  type="button"
                >
                  Details
                </button>
              </div>
            </div>
    `;

    petCardsContainer.appendChild(petCard);
  });
};

// calling function globally
loadAllPetsData();

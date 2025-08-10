//  get elements
const loader = document.querySelector("#spinner");
const petContainer = document.querySelector("#pet-container");
const petCardsContainer = document.querySelector("#pet-cards-container");
const errorContainer = document.querySelector("#no-information");

// show spinner before data load
petContainer.classList.add("hidden");
loader.classList.replace("hidden", "flex");

// function:: fetching all pets data from server (All Pets)
const loadAllPetsData = async () => {
  try {
    const responseToPets = await fetch(
      `https://openapi.programming-hero.com/api/peddy/pets`
    );
    const allPetsData = await responseToPets.json();

    // call for display
    displayPetIntoCard(allPetsData?.pets);
  } catch (err) {
    console.error("Error has Found:", err);
  }
};

// function::display all pets data  as card
const displayPetIntoCard = (pets) => {
  petCardsContainer.innerHTML = "";

  pets.forEach((pet) => {
    const petCard = document.createElement("div");
    petCard.classList = "card bg-base-100 border border-[#1313131A] p-[1rem]";
    petCard.innerHTML = `
    <figure class="w-full">
              <img
                src="${pet?.image}"
                alt="${pet?.breed}"
                class="rounded-xl w-full object-cover"
              />
            </figure>
            <div class="mt-[1.24rem]">
              <!-- pet information  -->
              <div
                class="space-y-2 border-b border-[#1313131A] pb-[0.825rem] mb-[0.825rem]"
              >
                <h5 class="font-inter font-bold text-[1.1rem] text-[#131313]">
                  ${pet?.pet_name}
                </h5>
                <p class="text-[1rem] text-[#131313B3]">
                  <i class="fa-solid fa-qrcode"></i> Breed: ${
                    pet?.breed ? pet?.breed : "Not Available"
                  }
                </p>
                <p class="text-[1rem] text-[#131313B3]">
                  <i class="fa-solid fa-calendar"></i> Birth: ${
                    pet?.date_of_birth
                      ? dateFormate(pet?.date_of_birth)
                      : "Not Available"
                  }
                </p>
                <p class="text-[1rem] text-[#131313B3]">
                  <i class="fa-solid fa-mercury"></i> Gender: ${
                    pet?.gender ? pet?.gender : "Not Available"
                  }
                </p>
                <p class="text-[1rem] text-[#131313B3]">
                  <i class="fa-solid fa-dollar-sign"></i> Price : ${
                    pet?.price ? `${pet?.price}$` : "Not Available"
                  }
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

// function:: for formate the pets date of birth(like: 15 Jan 2023)
const dateFormate = (birth_date) => {
  const date = new Date(birth_date);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

// function:fetching all category(menu) from server
const loadCategoryMenu = async () => {
  try {
    const responseForCategoryMenu = await fetch(
      `https://openapi.programming-hero.com/api/peddy/categories`
    );
    const allCategory = await responseForCategoryMenu.json();
    displayCategoryButtons(allCategory?.categories);
  } catch (err) {
    console.error("Error Has Arrived:", err);
  }
};

// function: display all category as menu or navbar
const displayCategoryButtons = (categories) => {
  const categoriesContainer = document.querySelector("#categories-container");
  categories.forEach((category) => {
    const categoryButton = document.createElement("button");

    categoryButton.id = `btn-${category?.category}`;

    categoryButton.type = "button";

    categoryButton.classList =
      "font-inter font-bold text-[#131313] text-[1.24rem] bg-white border border-[#0E7A8126] capitalize py-[1.24rem] rounded-md inline-flex justify-center items-center gap-[0.825rem] transition-all duration-[1000ms] ease-in-out cursor-pointer button-identifier";

    categoryButton.innerHTML = `   
          <img src="${category?.category_icon}" alt="${category?.category}" />
          <span>${category?.category}</span>
    `;

    categoriesContainer.appendChild(categoryButton);

    //   event listener: for category button
    categoryButton.onclick = () => {
      // show the spinner
      petContainer.classList.add("hidden");
      loader.classList.replace("hidden", "flex");

      // load categorize data (by category name)
      loadCategorizePetData(category?.category);

      // deactive the buttons
      deactiveButtons();

      // active the buttons

      categoryButton.classList.add("active");
    };
  });
};

// function: deactive the category buttons
const deactiveButtons = () => {
  const buttons = document.getElementsByClassName("button-identifier");
  for (button of buttons) {
    button.classList.remove("active");
  }
};

// function:load all pet data categorize
const loadCategorizePetData = async (categoryName) => {
  try {
    const responseForCategoryName = await fetch(
      `https://openapi.programming-hero.com/api/peddy/category/${categoryName}`
    );
    const categorizeData = await responseForCategoryName.json();
    const categorizePetData = categorizeData.data;

    // running the spinner before loading the data
    setTimeout(() => {
      petContainer.classList.remove("hidden");
      loader.classList.replace("flex", "hidden");

      if (categorizePetData.length === 0) {
        petCardsContainer.classList.add("hidden");
        errorContainer.classList.replace("hidden", "flex");
      } else {
        errorContainer.classList.replace("flex", "hidden");
        petCardsContainer.classList.remove("hidden");

        // call for display
        displayPetIntoCard(categorizePetData);
      }
    }, 2000);
  } catch (err) {
    console.error("Error Has Found:", err);
  }
};

// calling function globally
loadCategoryMenu();

// running the spinner before loading the data
setTimeout(() => {
  petContainer.classList.remove("hidden");
  loader.classList.replace("flex", "hidden");
  // fetching the data
  loadAllPetsData();
}, 2000);

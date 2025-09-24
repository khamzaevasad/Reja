const form = document.getElementById("create-form");
const inputEl = document.getElementById("create-file");
// const plansCon = document.querySelector(".plans-container");

function itemTemplate(item) {
  return `
    <div class="plan-list">
              <p class="plan-subtitle">${item.reja}</p>
              <div>
                <button data-id="${item._id}" class="btn-primary edit-btn">
                  <i class="fa-solid fa-pen fa-xs" style="color: #ffffff"></i>
                </button>
                <button data-id="${item._id}" class="delete-btn btn-primary">
                  O'chirish
                </button>
              </div>
            </div>
    
    
    
    `;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  axios
    .post("/create-item", { reja: inputEl.value })
    .then((data) => {
      document
        .querySelector(".plans-container")
        .insertAdjacentHTML("beforeend", itemTemplate(data.data));
      inputEl.value = "";
      inputEl.focus();
    })
    .catch((err) => {
      alert("Something went wrong");
      console.log("Something went wrong", err);
    });
});

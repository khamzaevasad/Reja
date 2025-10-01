const form = document.getElementById("create-form");
const inputEl = document.getElementById("create-file");
// const plansCon = document.querySelector(".plans-container");

// delete btn toggle

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

// delete
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("list-delete")) {
    if (confirm("Aniq o'chirmoqchimisiz?")) {
      axios
        .post("delete-item", { id: e.target.getAttribute("data-id") })
        .then((res) => {
          console.log(res.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          alert("Something went wrong");
          console.log("Something went wrong", err);
        });
    }
  }

  // edit
  if (e.target.classList.contains("edit-btn")) {
    let userInput = prompt(
      "O'zgartirishni kiriting",
      e.target.parentElement.parentElement.querySelector(".plan-subtitle")
        .innerHTML
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response);
          e.target.parentElement.parentElement.querySelector(
            ".plan-subtitle"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("Something went wrong", err);
        });
    }
  }
});

document.querySelector(".delete-all").addEventListener("click", () => {
  axios
    .post("/delete-all", { delete_all: true })
    .then((response) => {
      alert(response.data.state);
      document.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
});

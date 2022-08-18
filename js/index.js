const products = [
  {
    name: "Audi",
    img: "../images/audi-a3.jpg",
    model: "A3",
    review: 10,
    price: 250,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius pariatur non dolorem aspernatur, sed ipsam qui nemo. Sequi, sunt.",
  },
  {
    name: "Audi",
    img: "../images/Audi-A4.jpg",
    model: "A4",
    review: 14,
    price: 320,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius pariatur non dolorem aspernatur, sed ipsam qui nemo. Sequi, sunt.",
  },
  {
    name: "Audi",
    img: "../images/Audi-Q7.jpg",
    model: "Q7",
    review: 20,
    price: 550,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius pariatur non dolorem aspernatur, sed ipsam qui nemo. Sequi, sunt.",
  },
  {
    name: "BMW",
    img: "../images/bmw-3.jpg",
    model: "3 Series",
    review: 80,
    price: 850,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius pariatur non dolorem aspernatur, sed ipsam qui nemo. Sequi, sunt.",
  },
  {
    name: "BMW",
    img: "../images/BMW_Z4.jpg",
    model: "Z4",
    review: 84,
    price: 880,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius pariatur non dolorem aspernatur, sed ipsam qui nemo. Sequi, sunt.",
  },
  {
    name: "BMW",
    img: "../images/bmw-x6.jpg",
    model: "X6",
    review: 90,
    price: 999,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius pariatur non dolorem aspernatur, sed ipsam qui nemo. Sequi, sunt.",
  },
  {
    name: "Lexus",
    img: "../images/lexus-ls-460.jpg",
    model: "LS 460",
    review: 92,
    price: 1020,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius pariatur non dolorem aspernatur, sed ipsam qui nemo. Sequi, sunt.",
  },
  {
    name: "Lexus",
    img: "../images/Lexus-RX-350.jpg",
    model: "RX 350",
    review: 92,
    price: 1050,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius pariatur non dolorem aspernatur, sed ipsam qui nemo. Sequi, sunt.",
  },
  {
    name: "Porsche",
    img: "../images/P14.jpg",
    model: "Cayenne",
    review: 77,
    price: 990,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius pariatur non dolorem aspernatur, sed ipsam qui nemo. Sequi, sunt.",
  },
  {
    name: "Porsche",
    img: "../images/Porsche-Panamera.jpg",
    model: "Boxter",
    review: 100,
    price: 1500,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius pariatur non dolorem aspernatur, sed ipsam qui nemo. Sequi, sunt.",
  },
  {
    name: "Porsche",
    img: "../images/Porsche.jpg",
    model: "Panamera",
    review: 132,
    price: 1900,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius pariatur non dolorem aspernatur, sed ipsam qui nemo. Sequi, sunt.",
  },
];

function productsGenarate(products) {
  const productsContainer = document.getElementById("products");
  for (let product of products) {
    const div = document.createElement("div");
    const productStringify = JSON.stringify(product);
    div.classList.add("col");
    div.innerHTML = `
    <div class="card h-100 border-0">
                <img src=${product.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h5 class="card-title fw-semibold">${product.name} ${product.model}</h5>
                      <p><span class="fw-semibold">${product.review}</span> reviews</p>
                    </div>
                    <p class="d-flex fw-semibold">
                      <span class="mt-2">$</span><span class="fs-1">${product.price}</span>
                    </p>
                  </div>
                </div>
                <button onclick='openModal(${productStringify})' type="button" class="border-0 btn-bg py-3 fw-semibold" data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                Parchase Now
                </button>
              </div>
    `;
    productsContainer.appendChild(div);
  }
}
productsGenarate(products);

function openModal(product) {
  const modalTitle = document.getElementById("modal-title");
  modalTitle.innerText = `${product.name} ${product.model}`;
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
  <img src=${product.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h5 class="card-title fw-semibold">${product.name} ${product.model}</h5>
                      <p><span class="fw-semibold">${product.review}</span> reviews</p>
                    </div>
                    <p class="d-flex fw-semibold">
                      <span class="mt-2">$</span><span class="fs-1">${product.price}</span>
                    </p>
                  </div>
                  <div class="text-center d-flex justify-content-center align-items-center">
                      <button class="btn btn-danger p-2 px-3"><i class="fa-solid fa-minus"></i></button>
                      <span class="fw-semibold fs-2 ms-3 me-3">0</span>
                      <button class="btn btn-success p-2 px-3"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
  `;
}

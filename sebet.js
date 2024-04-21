const products = [
  {
    id: 0,
    img: "https://basket-our.netlify.app/assets/img/cake.jpeg",
    name: "Product 1",
    count: 1,
  },
  {
    id: 1,
    img: "https://basket-our.netlify.app/assets/img/drink.jpeg",
    name: "Product 2",
    count: 1,
  },
  {
    id: 2,
    img: "https://basket-our.netlify.app/assets/img/pizza-1.jpeg",
    name: "Product 3",
    count: 1,
  },
  {
    id: 3,
    img: "https://basket-our.netlify.app/assets/img/pizza-mix.jpeg",
    name: "Product 4",
    count: 1,
  },
  {
    id: 4,
    img: "https://basket-our.netlify.app/assets/img/soup-1.jpeg",
    name: "Product 5",
    count: 1,
  },
  {
    id: 5,
    img: "https://basket-our.netlify.app/assets/img/sous.jpeg",
    name: "Product 6",
    count: 1,
  },
];
const basketCount = document.querySelector("#sup");

const productList = document.querySelector("#productList");

for (let i = 0; i < products.length; i++) {
  productList.innerHTML += `
    <div class="col-lg-4 mt-5" >
        <div class="card" style="width: 18rem" data-id="1">
        <img src="${products[i].img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${products[i].name}</h5>
            <p class="card-text">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
            </p>
            <button href="#" onclick="addToArr(${products[i].id})" class="btn btn-primary">Baskete Elave Et</button>
        </div>
        </div>
    </div>
    `
}

let sebet = [];

if (localStorage.getItem("sebet")) {
  sebet = JSON.parse(localStorage.getItem("sebet"));
}

basketCount.innerHTML = `${sebet.length}`;

function addToArr(id) {
  const mehsul = sebet.find((x) => x.id == id);
  if (mehsul) {
    mehsul.count++;
    localStorage.setItem("sebet", JSON.stringify(sebet));
  } else {
    const itmes = products.find((prod) => prod.id == id);
    sebet.push(itmes);
    localStorage.setItem("sebet", JSON.stringify(sebet));
  }
  basketCount.innerHTML = `${sebet.length}`;
}

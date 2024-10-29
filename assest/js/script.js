
// api-1
fetch(
    "https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/"
)
    .then((res) => res.json())
    .then((data) => cards(data));

let card = document.getElementById("card");

function cards(data) {
    console.log(data);

    let startIndex = Math.max(0, data.length - 4);

    for (let x = startIndex; x < data.length; x++) {
        card.innerHTML += ` 
    <div class=" col-md-6 col-lg-3 mb-2 p-3">
   <div class="border border-1 p-4 bg-coler mb-4"><img class="style" src=${data[x].simple_thumb} >
   </div>
<div class="books ">
<h3>${data[x].author}</h3>
<p>${data[x].title}</p>
</div>
</div>
</div>
`;
    }
}
// api-2
fetch("https://wolnelektury.pl/api/books/studnia-i-wahadlo/")
    .then((res) => res.json())
    .then((onebook) => caver(onebook));

let bookCaver = document.getElementById("book");
function caver(onebook) {
    console.log(onebook);
    bookCaver.innerHTML += ` 
        <div class="col-md-6 d-flex  justify-content-center  align-items-center ">
<img class="style" src=${onebook.simple_thumb} ></div> 
    <div class="col-md-6 pt-5   ">
    <h2 class="font1 subscription-title">Best Selling Book</h2>

    <h4>${onebook.author}</h4>
    <p>${onebook.title}</p>
    <p>${onebook.fragment_data}</p>
:

<button type="button" class="bg-coler border-0">shop it now <i class="fa-solid fa-arrow-right "></i></button>
    </div>
    
    `;
}

// api-3
fetch("https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/")
    .then((res) => res.json())
    .then((popbook) => books(popbook));

let popluarBook = document.getElementById("popluar");

function books(popbook) {
    console.log(popbook);
    let bookIndex = Math.max(0, popbook.length - 8);
    for (let x = bookIndex; x < popbook.length; x++) {
        popluarBook.innerHTML += ` 
    <div class="ol-12 col-md-6 col-lg-3">
 <div class="border border-1 p-4 bg-coler "><img class="style" src=${popbook[x].simple_thumb} ></div>
<div class="books ">
<h3>${popbook[x].author}</h3>
<p>${popbook[x].title}</p>
</div>
</div>
</div>
`;
    }
}

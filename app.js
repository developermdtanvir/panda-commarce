const backpackContainer = document.getElementById('backpack-items');
const showContainer = document.getElementById('show-items');

// backpack container data 


fetch('backpack.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.backpacks.forEach(element => {
            console.log(element)
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="col">
                <div class="card">
                  <img src=${element.image} class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <h3>$ ${element.price}</h3>
                    <button class="panda-btn-buy-now">Bye Now</button>
                  </div>
                </div>
              </div>
                `
            backpackContainer.appendChild(div);
        })
    });


// show container data 

fetch('show.json')
    .then(res => res.json())
    .then(data => {
        data.shows.forEach(element => {
            const showDiv = document.createElement('div');
            showDiv.innerHTML = `
                <div class="col">
                <div class="card">
                <img src=${element.image} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <h3>$ ${element.price}</h3>
                    <button class="panda-btn-buy-now">Bye Now</button>
                </div>
                </div>
            </div>
            `
            showContainer.appendChild(showDiv)

        })
    })



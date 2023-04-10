const container = document.getElementById('backpack-items');
fetch('data.json')
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
                  </div>
                </div>
              </div>
                `

            container.appendChild(div);
        })
    });
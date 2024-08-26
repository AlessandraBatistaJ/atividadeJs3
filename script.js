const titulo = document.createElement("h1")
titulo.id = "titulo"
titulo.innerText = "Real Store"

document.body.appendChild(titulo)


const camisas = document.createElement("div")

camisas.innerHTML = `
    <h2>Camisa Real Madrid 24/25</h2>
    <p>Camisa com malha tailandesa e com a qualidade que só a Real Store tem</p>
    <p>Preço: R$ 139,90</p>
    <img src="https://acdn.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-01-833f2b642e2e93233c17175428969204-1024-1024.jpeg" alt="Camisa Real Madrid - Espanha" width="200px" height="200px">
`

document.body.appendChild(camisas);












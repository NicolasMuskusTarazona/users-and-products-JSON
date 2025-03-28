const saveProduct = async(data) => {
    const url = new URL("https://67e686856530dbd311105617.mockapi.io")
    url.pathname = "/products"
    const header = new Headers()
    header.append("Content-Type", "application/json")
    const config = {
        method: "POST", //Guardar
        headers: header,
        body: JSON.stringify(data)
    }
    const reponse = await fetch(url.toString(),config)
    const result = await reponse.json()
    return result
}

while(confirm("¿ Deasea insertar un dato ?")) {
    const data = {
        id : prompt("Ingresa el id", "Mic330"),
        name: prompt("Ingrese el nombre", "Mac mini"),
        price: Number(prompt("Ingrese el precio", 600)),
        category: prompt("Ingrese la categoria", "Technology"),
    }
    saveProduct(data)
    .then(result => alert(JSON.stringify(result)))
    .catch(error => alert(error))
}

const editProduct = async(data) =>{
    const {id, ...dataUpdate} = data
    const url = new URL("https://67e686856530dbd311105617.mockapi.io")
    url.pathname = `/products/${id}`
    const header = new Headers()
    header.append("Content-Type", "application/json")
    const config = {
        method: "PUT", //Actualizar
        headers: header,
        body: JSON.stringify(dataUpdate)
    }
    const reponse = await fetch(url.toString(),config)
    const result = await reponse.json()
    return result
}

while (confirm("¿ Deseas actualizar un producto?")){
    const data = {}
    data.id = prompt("Ingrese el id del producto a actualizar", "Mic330")
    data.name = (confirm("¿Desea actualizar el nonmbre del producto ?")) ? prompt("Ingrese el nonbre del producto") : undefined
    if(confirm("¿Desea actulizar el precio del producto?")) data.price = Number(prompt("Ingrese el nuevo precio del producto"))
    if(confirm("¿Desea actualizar la categoria del producto?")) data.category = prompt("Ingrese la nueva categoria del producto")
    editProduct(data)
    .then(result => alert(JSON.stringify(result)))
    .catch(error => alert(error))
}
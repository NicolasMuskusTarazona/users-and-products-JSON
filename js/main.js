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

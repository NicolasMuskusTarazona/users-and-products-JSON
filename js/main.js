const productsUser = 
Number(prompt(
"-------------------------------------------------------------------------------\n"+
"Opciones de Producto: \n" + 
"   1.Añadir producto.\n" +
"   2.Editar Producto.\n" +
"   3.Eliminar Producto.\n" +
"-------------------------------------------------------------------------------\n"+
"Opciones de Usuario: \n"+
"4. Añadir Usuario.\n" +
"5. Editar Usuario.\n" +
"6. Eliminar Usuario."))

switch (productsUser) {
    case value:
        
        break;

    default:
        break;
}
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

const deleteProduct = async(data) =>{
    const {id, ...dataUpdate} = data
    const url = new URL("https://67e686856530dbd311105617.mockapi.io")
    url.pathname = `/products/${id}`
    const header = new Headers()
    header.append("Content-Type", "application/json")
    const config ={
        method: "DELETE",
        headers: header,
        body: JSON.stringify(dataUpdate)
    }
    const reponse = await fetch(url.toString(),config)
    const result = await reponse.json()
    return result
}
while (confirm("¿ Deseas eliminar un producto?")){
    const data = {}
    data.id = prompt("Ingrese el id del producto a eliminar")
    if(confirm("¿Desea eliminar el producto?"))
    deleteProduct(data)
    .then(result => alert(JSON.stringify(result)))
    .catch(error => alert(error))
}

const saveUser = async(data) => {
    const url = new URL("https://67e686856530dbd311105617.mockapi.io")
    url.pathname = "/users"
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

while(confirm("¿ Deasea insertar un usuario ?")) {
    const data = {
        id : prompt("Ingresa el id", "6"),
        name: prompt("Ingrese el nombre", "Nicolas"),
        last: prompt("Ingrese el apellido", "Muskus"),
    }
    saveUser(data)
    .then(result => alert(JSON.stringify(result)))
    .catch(error => alert(error))
}

const editUser = async(data) =>{
    const {id, ...dataUpdate} = data
    const url = new URL("https://67e686856530dbd311105617.mockapi.io")
    url.pathname = `/users/${id}`
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

while (confirm("¿ Deseas actualizar un usuario")){
    const data = {}
    data.id = prompt("Ingrese el id del usuario a actualizar", "1")
    data.name = (confirm("¿Desea actualizar el nombre del usuario ?")) ? prompt("Ingrese el nuevo nombre del usuario") : undefined
    if(confirm("¿Desea actualizar el apellido del usuario ?")) data.last = prompt("Ingrese el nuevo apellido del usuario")
    editUser(data)
    .then(result => alert(JSON.stringify(result)))
    .catch(error => alert(error))
}

const deleteUser = async(data) =>{
    const {id, ...dataUpdate} = data
    const url = new URL("https://67e686856530dbd311105617.mockapi.io")
    url.pathname = `/users/${id}`
    const header = new Headers()
    header.append("Content-Type", "application/json")
    const config ={
        method: "DELETE",
        headers: header,
        body: JSON.stringify(dataUpdate)
    }
    const reponse = await fetch(url.toString(),config)
    const result = await reponse.json()
    return result
}
while (confirm("¿ Deseas eliminar un producto?")){
    const data = {}
    data.id = prompt("Ingrese el id del usuario a eliminar")
    if(confirm("¿Desea eliminar el usuario?"))
    deleteUser(data)
    .then(result => alert(JSON.stringify(result)))
    .catch(error => alert(error))
}
let opcion
do {
    opcion =Number(prompt(
    "-------------------------------------------------------------------------------\n" +
    "Opciones de Producto: \n" + 
    "   1. Añadir producto.\n" +
    "   2. Editar Producto.\n" +
    "   3. Eliminar Producto.\n" +
    "-------------------------------------------------------------------------------\n" +
    "Opciones de Usuario: \n" +
    "   4. Añadir Usuario.\n" +
    "   5. Editar Usuario.\n" +
    "   6. Eliminar Usuario.\n" +
    "-------------------------------------------------------------------------------\n" +
    "Seleccione una opcion:"
));
} while (isNaN(opcion) || opcion < 1 || opcion > 6);

if (opcion === 1) {
    const data = {
        id: Number(prompt("Ingresa el id", "6")),
        name: prompt("Ingrese el nombre", "Mac mini"),
        price: Number(prompt("Ingrese el precio", 600)),
        category: prompt("Ingrese la categoría", "Technology"),
    };

    saveProduct(data)
        .then(result => alert("Producto guardado:\n" + JSON.stringify(result)))
        .catch(error => alert(error))
}
else if (opcion === 2) {
    const data = {};
    data.id = Number(prompt("Ingrese el ID del producto a actualizar", 1));

    if (!data.id) {
        alert("ID inválido");
        return;
    }

    if (confirm("¿Desea actualizar el nombre del producto?")) {
        data.name = prompt("Ingrese el nuevo nombre del producto");
    }

    if (confirm("¿Desea actualizar el precio del producto?")) {
        data.price = Number(prompt("Ingrese el nuevo precio del producto"));
    }

    if (confirm("¿Desea actualizar la categoría del producto?")) {
        data.category = prompt("Ingrese la nueva categoría del producto");
    }

    console.log("Enviando datos:", data);

    editProduct(data)
        .then(result => {
            console.log("Respuesta de la API:", result);
            alert("Producto actualizado:\n" + JSON.stringify(result));
        })
        .catch(error => {
            console.error("Error al actualizar:", error);
            alert("Error al actualizar el producto: " + error.message);
        });
}
else if (opcion === 3) {
    const id = Number(prompt("Ingrese el ID del producto a eliminar", 1));

    if (!id) {
        alert("ID inválido");
        return;
    }

    if (confirm(`¿Está seguro de eliminar el producto con ID ${id}?`)) {
        deleteProduct(id)
            .then(result => {
                console.log("Producto eliminado:", result);
                alert("Producto eliminado correctamente.");
            })
            .catch(error => {
                console.error("Error al eliminar:", error);
                alert("Error al eliminar el producto: " + error.message);
            });
    }
} 

else if (opcion === 4) {
    const user = {
        id: Number(prompt("Ingrese el ID del usuario", "1")),
        name: prompt("Ingrese el nombre del usuario", "Juan Pérez"),
        email: prompt("Ingrese el correo del usuario", "juan@example.com"),
    };

    saveUser(user)
        .then(result => alert("Usuario guardado:\n" + JSON.stringify(result)))
        .catch(error => alert(error));
} 

else if (opcion === 5) {
    const user = {};
    user.id = Number(prompt("Ingrese el ID del usuario a actualizar", 1));

    if (!user.id) {
        alert("ID inválido");
        return;
    }

    if (confirm("¿Desea actualizar el nombre del usuario?")) {
        user.name = prompt("Ingrese el nuevo nombre del usuario");
    }

    if (confirm("¿Desea actualizar el correo del usuario?")) {
        user.email = prompt("Ingrese el nuevo correo del usuario");
    }

    console.log("Enviando datos de usuario:", user);

    editUser(user)
        .then(result => {
            console.log("Usuario actualizado:", result);
            alert("Usuario actualizado:\n" + JSON.stringify(result));
        })
        .catch(error => {
            console.error("Error al actualizar:", error);
            alert("Error al actualizar el usuario: " + error.message);
        });
} 

else if (opcion === 6) {
    const id = Number(prompt("Ingrese el ID del usuario a eliminar", 1));

    if (!id) {
        alert("ID inválido");
        return;
    }

    if (confirm(`¿Está seguro de eliminar el usuario con ID ${id}?`)) {
        deleteUser(id)
            .then(result => {
                console.log("Usuario eliminado:", result);
                alert("Usuario eliminado correctamente.");
            })
            .catch(error => {
                console.error("Error al eliminar:", error);
                alert("Error al eliminar el usuario: " + error.message);
            });
    }
} 

else {
    alert("Opción no válida. Inténtalo de nuevo.");
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

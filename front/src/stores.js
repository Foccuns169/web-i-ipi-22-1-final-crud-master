import { writable } from "svelte/store";

export const currentPage = writable('home');
export const users = writable([]);
export const currentUser = writable(null);
export const products = writable([]);

users.subscribe(v => {
    const user = v.at(-1);
    
    if (!user) return;

    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('email', user.email);
    formData.append('password', user.pw);

    fetch('http://localhost:8000/add-user.php', {
        method: 'post',
        body: formData
    }); // non blocking
    console.log('oi');
})

export function addProduct(name, descri, preco, data, usuario_id) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('descri', descri);
    formData.append('preco', preco);
    formData.append('data', data);
    formData.append('usuario_id', usuario_id);

    fetch('http://localhost:8000/add-product.php', {
        method: 'post',
        body: formData
    });

    loadProducts(usuario_id)
}

export async function removeProduct(id, usuario_id) {
    await fetch('http://localhost:8000/remove-product.php?id=' + id, {
        method: 'get'
    });
    loadProducts(usuario_id)
}

async function loadProducts(usuario_id) {
    // console.log('deve carregar os produtos do usuário ' + user_id)
    const response = await fetch('http://localhost:8000/get-products.php?usuario_id=' + usuario_id, {
        method: 'get'
    });
    const data = await response.json();
    products.set(data);
}

export const login = async (username, pw) => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', pw);
    const response = await fetch('http://localhost:8000/login.php', {
        method: 'post',
        body: formData
    });
    if (!response.ok) {
        alert('usuário ou senha incorretos');
        return;
    }
    const data = await response.json();
    currentUser.set(data);
    loadProducts(data.id)
}
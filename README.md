# 🔐 Sistema de Login, Registo e Recuperação de Password

Este projeto é uma interface web moderna que simula um sistema de autenticação com três funcionalidades principais: Login, Registo (Sign Up) e Recuperação de Password.

## 📌 Funcionalidades
* 🔑 Login do utilizador
* 📝 Registo de novos utilizadores
* 🔁 Recuperação de password
* 🔄 Alternância dinâmica entre formulários (sem recarregar a página)
* 🎨 Interface moderna com design responsivo
* ⚡ Manipulação do DOM com JavaScript

## 🖥️ Interface
O sistema inclui 3 ecrãs principais:
* Login
* Sign Up (Registo)
* Forgot Password (Recuperação de Password)

A navegação entre eles é feita dinamicamente através de JavaScript.

## 🛠️ Tecnologias Utilizadas
* HTML5 – Estrutura da aplicação
* CSS3 – Estilização moderna com gradientes
* JavaScript– Lógica de interação

## 📋 Como Funciona
O sistema utiliza JavaScript para mostrar e esconder formulários:
* Clique em "Sign up" → mostra o registo
* Clique em "Login" → volta ao login
* Clique em "Forgot your password?" → abre recuperação

## 💡 Lógica Principal
### 📌 Alternar entre Login e Sign Up
````ruby
function mudar_login(){
    const login = document.querySelector('.container');
    const signup = document.querySelector('.container_signup');

    if(login.style.display === 'block'){
        login.style.display = 'none';
        signup.style.display = 'block';
    } else {
        login.style.display = 'block';
        signup.style.display = 'none';
    }
} 
`````

### 📌 Alternar para Recuperação de Password
`````ruby
function mudar_forgot_password(){
    const forgot_password = document.querySelector('.container_forgotPassword');
    const login = document.querySelector('.container');

    if(login.style.display === 'block'){
        login.style.display = 'none';
        forgot_password.style.display = 'block';
    } else {
        login.style.display = 'block';
        forgot_password.style.display = 'none';
    }
}
`````

## ⚠️ Nota Importante

Este projeto é apenas frontend, ou seja:

* ❌ Não possui autenticação real
* ❌ Não utiliza base de dados
* ❌ Não valida credenciais

Serve para fins educativos e demonstração de UI/UX

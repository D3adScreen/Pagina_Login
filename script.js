function mudar_login(){
    const login = document.querySelector('.container');
    const signup = document.querySelector('.container_signup');
    if(login.style.display === 'block')
    {
        login.style.display = 'none';
        signup.style.display = 'block';
    }   
    else
    {
        login.style.display = 'block';
        signup.style.display = 'none';
    }
}
document.getElementById('Sign_Up').addEventListener('click', mudar_login);
document.getElementById('Login').addEventListener('click', mudar_login);

function mudar_forgot_password(){
    const forgot_password = document.querySelector('.container_forgotPassword');
    const login = document.querySelector('.container');
    if(login.style.display === 'block')
    {
        login.style.display = 'none';
        forgot_password.style.display = 'block';
    }   
    else
    {
        login.style.display = 'block';
        forgot_password.style.display = 'none';
    }
}
document.getElementById('forgot_password').addEventListener('click', mudar_forgot_password);
document.getElementById('Login2').addEventListener('click', mudar_forgot_password);
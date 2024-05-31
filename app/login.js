document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register");
  const loginForm = document.getElementById("login");

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    const user = {
      name,
      phone,
      dob,
      email,
      username,
      password,
    };

    localStorage.setItem(username, JSON.stringify(user));
    alert("Cadastro realizado com sucesso!");
    registerForm.reset();
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const user = JSON.parse(localStorage.getItem(username));

    if (user && user.password === password) {
      alert("Login bem-sucedido!");
    } else {
      alert("Usuário ou senha incorretos!");
    }

    loginForm.reset();
  });
});

export default function logoutApp() {
  try {
    localStorage.removeItem("user");
    alert("Logout efetuado com sucesso!");

    window.location.href = '/'; // Redireciona para a rota "/"
  } catch (error) {
    alert("Erro ao fazer logout: " + error);
  }
}
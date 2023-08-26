export default function logoutApp() {
  try {
    localStorage.removeItem("user");
    alert("Logout efetuado com sucesso!");

    window.location.href = '/';
  } catch (error) {
    alert("Erro ao fazer logout: " + error);
  }
}
// Botão de excluir
const btnToast = document.querySelector("#add-toast");
const btnCad = document.querySelector("#btn-cad");

btnToast.addEventListener("click", () => 
 Toastify({
    text: "Excluído com sucesso",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #0000cc, #000080)",
    },
    onClick: function(){}, // Callback after click
  }).showToast()
);

btnCad.addEventListener("click", () => 
 Toastify({
    text: "Cadastrado com sucesso!",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #0000cc, #000080)",
    },
    onClick: function(){}, // Callback after click
  }).showToast()
);





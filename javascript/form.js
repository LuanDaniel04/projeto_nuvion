const limpar = document.getElementById("limpar");
const nome = document.getElementById("nome");

limpar.addEventListener("click", () => {
    alert(`Ola ${nome.value}, agradecemos pelo seu contato, iremos lhe atender assim que possivel`);
    document.getElementById("form").reset();
})

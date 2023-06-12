var form = document.getElementById("novoItem");
var quant = [];

quant.forEach(Element => {
    criarElemento(Element)

})

form.addEventListener("submit", (e) => {

    e.preventDefault();

    let descricao = e.target.elements['Descricao']
    let quant = e.target.elements['quant']
    let valor = e.target.elements['preco']

    const itemAtual = {
        "descricao": descricao.value,
        "quant": quant.value,
        "valor": preco.value
    }

    criarElemento(itemAtual)

    descricao.value = ""
    quant.value = ""
    valor.value = ""
})

function criarElemento(e) {

    const novoItem = document.createElement("li")

    const itemnumero = document.createElement("li")

    const itempreco = document.createElement("li")

    novoItem.classList.add("e")

    novoItem.innerHTML += `Descrição: ${e.descricao}`

    itemnumero.innerHTML += `Unidade: ${e.quant}`

    itempreco.innerHTML += `<strong>R$ ${e.valor}</strong>`

    lista.appendChild(novoItem)
    novoItem.appendChild(itemnumero)
    novoItem.appendChild(itempreco)


}
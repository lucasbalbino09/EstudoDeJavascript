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

    const fechamento = document.createElement("tr");
    const novoItem = document.createElement("td");

    const itemnumero = document.createElement("td");

    const itempreco = document.createElement("td");      

    novoItem.innerHTML += e.descricao;

    itemnumero.innerHTML += e.quant;

    itempreco.innerHTML += e.valor;

    lista.appendChild(fechamento);
    fechamento.appendChild(novoItem);
    fechamento.appendChild(itemnumero);
    fechamento.appendChild(itempreco);


}
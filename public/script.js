const nome = prompt("Digite seu nome: ")
let renda_mensal = 0
let quantidade_despesas = 0
let soma = 0
while (true) {
    renda_mensal = Number(prompt("Digite sua renda mensal: R$"))
    if (!isNaN(renda_mensal)) {
        break
    }
}
while (true) {
    quantidade_despesas = Number(prompt("Digite a quantidade de despesas"))
    if (!isNaN(quantidade_despesas)) {
        if (quantidade_despesas < 1) {
            quantidade_despesas = 1
        }
        else if (quantidade_despesas > 5) {
            quantidade_despesas = 5
        }
        break
    } 
}

for (let i = 1; i <= quantidade_despesas; i++) {
    while (true) {
        let despesa = Number(prompt(`Digite o valor da despesa ${i}: `))
        if (!isNaN(despesa)) {
            soma+=despesa
            break
        }
    }
}
const sobra = renda_mensal - soma
let resultado
alert(`Nome do usuário: ${nome}`)
console.log(`Nome do usuário: ${nome}`)
alert(`Renda: R$${renda_mensal.toFixed(2)}`)
console.log(`Renda: R$${renda_mensal.toFixed(2)}`)
alert(`Total de despesas: R$${soma.toFixed(2)}`)
console.log(`Total de despesas: R$${soma.toFixed(2)}`)
alert(`Sobra: R$${sobra.toFixed(2)}`)
console.log(`Sobra: R$${sobra.toFixed(2)}`)
if (soma > renda_mensal) {
    resultado = "⚠️ Atenção: você gastou mais do que ganhou."
}
else {
    if (sobra >= (renda_mensal*0.3)) {
        resultado = "✅ Ótimo: boa margem de sobra."
    }
    else {
        resultado = "🙂 Ok: dá para melhorar a sobra."
    }
}
alert(resultado)
console.log(resultado)
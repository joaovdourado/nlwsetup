const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br")
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("🛑 ERRO: Já existe atividades registradas neste dia.")
    return
  }

  alert("✅ Selecione as atividades realizadas no seu dia.")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
//As duas barras são equivalentes a OU e as chaves vazias retornam um valor vazio.
nlwSetup.setData(data)
nlwSetup.load()

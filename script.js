
const button = document.querySelector("button")
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const responseElement = document.querySelector('#verse')
let mymsg = [
    'Nenhum mal de concederá. Sl:93',
    'Deus é o unico: Passado presente e futuro.',
    'Assim como deus foi com Moíses no deserto, ele te guiará.',
    'Deus de alinça, Deus de Promessas, ele cumprirá!',
    'Deus é Fiel'
]

screen1.addEventListener('click', handleClick1)
button.addEventListener('click', handleClick2)

function handleClick1() {
    numberTry = Math.floor(Math.random() * mymsg.length)
    handle()
    handleClick2()
}

function handle() {
    responseElement.innerHTML = mymsg[numberTry]
}

function handleClick2() {
    handleClick()
}


function handleClick() {
    
    document.querySelector('.screen1').classList.toggle('hide')
    document.querySelector('.screen2').classList.toggle('hide')

}

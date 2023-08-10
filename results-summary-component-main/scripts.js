import data from './data.json' assert { type: "json" };
const dataElement = document.getElementById('data')

dataElement.innerHTML = ''

for (let i = 0; i < data.length; i++){
    const section = document.createElement('div')
    section.id = `${data[i].category}`

    const score = document.createElement('div')
    const symbol = document.createElement('div')

    score.className = 'score'
    symbol.className ='symbol'

    //Things to add to symbol
    const image = document.createElement('img')
    image.src = data[i].icon

    const p = document.createElement('p')
    p.innerHTML = `${data[i].category}`
    
    symbol.appendChild(image);
    symbol.appendChild(p)
    //End of adding things to symbol

    const value = document.createElement('div')
    value.className = 'value'
    value.innerHTML = `${data[i].score}`
    
    score.appendChild(value)
    score.innerHTML += `<p> / 100</p>`
    section.appendChild(symbol)
    section.appendChild(score)

    dataElement.appendChild(section)
}
// "./"不能少
import './style.css'
import p78 from './assets/78.png'

// app.innerHTML = `<img src="${p78}"></img>`

let button = document.createElement('button')

button.innerText = `点击加载module`

app.appendChild(button)

button.onclick = () => {
	const l = require('./lazy')
	const fn = l.default
	fn()
}

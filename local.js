const body = document.querySelector('body')
const ans = document.querySelector('button')

console.log(ans)

ans.addEventListener('click', () => {
	console.log("I was clicked")
})

// const p = document.querySelector('p')
// p.style.display = "none"

fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean')
	.then(response => response.json()) 
	.then(res => {
        console.log(res.results)
		res.results.map((e, index) => {
			body.innerHTML += `
			<h1>${e.category}</h1>
			<p>${e.question}</p>
			<text style = "display:none" id="ans-${index}">${e.correct_answer}</text>
			<button>Show Answer</button>
			`
		})
    })
	.catch(err => console.error(err));

// console.log("Hi")
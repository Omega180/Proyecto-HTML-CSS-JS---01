;(function () {
	/* Se selecciona el arreglo de las preguntas */
	const titleQuestion = [...document.querySelectorAll(".questions_title")]
	/* Recorre cada uno de los botones y les agrega el event listener */
	titleQuestion.forEach((question) => {
		/* Event listener que toma el elemento y hace que cuando haga click se dispare */
		question.addEventListener("click", () => {
			let height = 0
			/* Permite traerse el elemento siguiente del elemento seleccionado, en este caso es el parrafo */
			let answer = question.nextElementSibling
			let addPadding = question.parentElement.parentElement
			addPadding.classList.toggle("questions_padding--add")
			/* chequear notas */
			question.children[0].classList.toggle("questions_arrow--rotate")

			if (answer.clientHeight === 0) {
				height = answer.scrollHeight
			}
			
			answer.style.height = `${height}px`
		})
	})
})()

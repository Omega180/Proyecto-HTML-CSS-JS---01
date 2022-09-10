;(function () {
	/* Crea un arreglo tomando todos los elementos con la clase .testimony_body */
	const sliders = [...document.querySelectorAll(".testimony_body")]
	/* Toma los dos botones de flecha */
	const buttonNext = document.querySelector("#next")
	const buttonBefore = document.querySelector("#before")
	let value

	/* Event Listeners que son llamados al presionar cualquiera de los dos botones */
	buttonNext.addEventListener("click", () => {
		changePosition(1)
	})
	buttonBefore.addEventListener("click", () => {
		changePosition(-1)
	})
	/* Funcion que toma el objeto de Show, y altera su id para que se muestre la pantalla siguiente al hacer click en los botones */
	const changePosition = (add) => {
		/* Variable que maneja el testimony que se esta mostrando en el momento */
		const currentTestimony = document.querySelector(".testimony_body--show")
			.dataset.id

		/* convierte el id del testimonio actual a numero y luego se le suma el valor que se le paso a la funcion en si  */
		value = Number(currentTestimony)
		value += add
		/* Remueve la clase del testimonio actual */
		sliders[Number(currentTestimony) - 1].classList.remove(
			"testimony_body--show"
		)
		/* Condicional que verifica si el ID se convierte en 0 o tiene 1 mas de su largo original
		para poder ciclar todos los objetos al llegar al final de ellos */
		if (value === sliders.length + 1 || value === 0) {
			value = value === 0 ? sliders.length : 1
		}
		/* añade la clase al siguiente testimonio */
		sliders[value - 1].classList.add("testimony_body--show")
	}
})()

const handleAddAnimal = () => {
    const name = document.getElementById("name").value
    const type = document.getElementById("type").value
    const age = document.getElementById("age").value

    const animal = {name, type, age}
    farm.push(animal)
    console.log(farm.length)
}

document
    .getElementById("add-animal")
    .addEventListener("submit", (event) => {
      event.preventDefault()
      handleAddAnimal()
    })

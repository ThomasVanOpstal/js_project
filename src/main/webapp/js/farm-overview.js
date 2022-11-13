const renderAnimal = () => {
        const id = "animals"
        clearElement(id)
        farm.forEach((animal) => {
                const p = document.createElement("p")
                const text = document.createTextNode(`${animal.name} 
                   is een ${animal.type.toLocaleLowerCase()} van 
                   ${animal.age} jaar oud.`)
                p.appendChild(text)
                document.getElementById(id).appendChild(p)
        })
}

renderAnimal()
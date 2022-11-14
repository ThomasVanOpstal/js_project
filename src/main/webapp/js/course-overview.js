const renderCourse = () => {
        const id = "courses"
        clearElement(id)
        course.forEach((course) => {
                const p = document.createElement("p")
                const text = document.createTextNode(`${course.name} 
                   is een course gegeven door ${course.lectors.join(" en ")} van 
                   ${course.credits} credits.`)
                p.appendChild(text)
                document.getElementById(id).appendChild(p)
        })
}

renderCourse()
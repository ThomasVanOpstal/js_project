const fetchCourses = async () => {
        const response =  await fetch("http://localhost:8080/Controller?command=Overview")
        const courses = await response.json()
        return courses
}


const renderCourse = (courses) => {
        const id = "courses"
        clearElement(id)
        courses.forEach((course) => {
                const p = document.createElement("p")
                const text = document.createTextNode(`${course.name} 
                   is een course gegeven door ${course.lectors.join(" en ")}`)
                p.appendChild(text)
                document.getElementById(id).appendChild(p)
        })
}
const fetchAndRenderCourses = async () => {
        const courses = await fetchCourses()
        renderCourse(courses)
}
setInterval(fetchAndRenderCourses, 1000)
const handleAddCourse = () => {
    const name = document.getElementById("name").value
    const type = document.getElementById("lectors").value
    const age = document.getElementById("credits").value

    const course = {name, lectors, credits}
    course.push(course)
    console.log(course.length)
}

document
    .getElementById("add-course")
    .addEventListener("submit", (event) => {
      event.preventDefault()
      handleAddCourse()
    })

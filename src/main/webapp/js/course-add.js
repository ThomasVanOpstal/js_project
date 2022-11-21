const handleAddCourse = async () => {
    const name = document.getElementById("name").value
    const lectors = document.getElementById("lectors").value
    const credits = document.getElementById("credits").value

    const course = {name, lectors, credits}

    await fetch("http://localhost:8080/Controller?command=Add", {
        method: "POST",
        headers: {
            // Accept Header tells the API that it is expecting the response in the specified media type e.g. application/json
            Accept: "application/json",
            // Content-Type tells the API about the media type of the request being sent in the request body e.g. application/json
            "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
    })
    //course.push(course)
    //console.log(course.length)
}

document
    .getElementById("add-course")
    .addEventListener("submit", (event) => {
      event.preventDefault()
      handleAddCourse()
    })

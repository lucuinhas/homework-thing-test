window.onload = init;

function init() {
    document.getElementById("homework-container").innerHTML = ""

    const classSelect = document.getElementById("class-select")

    const classValue = classSelect.value
    const homeworkDataPath = "./data/" + classValue + "/homework.json"

    fetch(homeworkDataPath)
        .then(response => response.json().then(data => loadHomework(data)))
        .catch(error => console.log(error))

    classSelect.addEventListener("change", init)


}
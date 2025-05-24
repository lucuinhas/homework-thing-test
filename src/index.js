init()

function init() {
    let homeworkFile = fetch("../data/homework.json")
        .then(response => response.json().then(data => loadHomework(data)))
        .catch(error => console.log(error))
}
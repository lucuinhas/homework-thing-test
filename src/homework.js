const HomeworkTypes = {
    textbook : "textbook",
    notebook : "notebook",
    project : "project"
}

function homeworkTypeDisplayName(homeworkType) {
    switch(homeworkType) {
        case HomeworkTypes.textbook:
            return "Apostila"
        case HomeworkTypes.notebook:
            return "Caderno"
        case HomeworkTypes.project:
            return "Trabalho"
    }
}

function homeworkTypeColor(homeworkType) {
    switch(homeworkType) {
        case HomeworkTypes.textbook:
            return "#FA3B30"
        case HomeworkTypes.notebook:
            return "#167AFF"
        case HomeworkTypes.project:
            return "#FDCC03"
    }
}

function loadHomework(homeworkData) {
    const template = document.getElementById("homework-template")

    for(const homeworkUnit of homeworkData) {
        let homeworkListItem = template.content.cloneNode(true)

        homeworkListItem.querySelector(".homework-subject-icon").src = "images/subjects/" + homeworkUnit.subject + ".svg"

        let homeworkTitle = homeworkListItem.querySelector(".homework-title")
        homeworkTitle.lastChild.textContent = "Tarefa de " + subjectDisplayName(homeworkUnit.subject)
        homeworkTitle.style.color = subjectColor(homeworkUnit.subject)

        homeworkListItem.querySelector(".homework-description").textContent = homeworkUnit.simpleDescription

        homeworkListItem.querySelector(".homework-type-icon").src = "images/homework/" + homeworkUnit.type + ".svg"

        let homeworkType = homeworkListItem.querySelector(".homework-type")
        homeworkType.lastChild.textContent = homeworkTypeDisplayName(homeworkUnit.type)
        homeworkType.style.color = homeworkTypeColor(homeworkUnit.type)

        let homeworkDate = homeworkListItem.querySelector(".homework-date")
        homeworkDate.textContent = homeworkUnit.date

        let [day, month, year] = homeworkUnit.date.split('/').map(Number)
        year += 2000

        let date = new Date(year, month - 1, day)
        date.setHours(7, 0, 0, 0)

        console.log(date - Date.now())
        if (date - Date.now() < 86400000) {
            homeworkDate.style.color = "#FA3B30"
        } else if (date - Date.now() > 604800000) {
            homeworkDate.style.color = "#35C759"
        }


        document.body.appendChild(homeworkListItem)
    }
}

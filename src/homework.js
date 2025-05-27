const HomeworkTypes = {
    textbook : "textbook",
    notebook : "notebook",
    project : "project"
}

let homeworkIds = {}

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

    homeworkData.sort((a, b) => {
        let [aDay, aMonth, aYear] = a.date.split('/').map(Number)
        aYear += 2000

        let aDate = new Date(aYear, aMonth - 1, aDay)
        aDate.setHours(7, 0, 0, 0)

        let [bDay, bMonth, bYear] = b.date.split('/').map(Number)
        bYear += 2000

        let bDate = new Date(bYear, bMonth - 1, bDay)
        bDate.setHours(7, 0, 0, 0)

        return aDate - bDate
    })

    for(const homeworkUnit of homeworkData) {
        homeworkIds[homeworkUnit.id] = homeworkUnit

        let homeworkListItem = template.content.cloneNode(true)

        let homeworkBox = homeworkListItem.querySelector(".homework-box")
        homeworkBox.onclick = showHomeworkDetail.bind(null, homeworkUnit.id)

        let homeworkDate = homeworkListItem.querySelector(".homework-date")
        homeworkDate.textContent = homeworkUnit.date

        let [day, month, year] = homeworkUnit.date.split('/').map(Number)
        year += 2000

        let date = new Date(year, month - 1, day)
        date.setHours(7, 0, 0, 0)

        if(date - Date.now() < 0) {
            continue
        } else if (date - Date.now() < 86400000) {
            homeworkDate.style.color = "#FA3B30"
        } else if (date - Date.now() > 604800000) {
            homeworkDate.style.color = "#35C759"
        }

        homeworkListItem.querySelector(".homework-subject-icon").src = "./images/subjects/" + homeworkUnit.subject + ".svg"

        let homeworkTitle = homeworkListItem.querySelector(".homework-title")
        homeworkTitle.lastChild.textContent = "Tarefa de " + subjectDisplayName(homeworkUnit.subject)
        homeworkTitle.style.color = subjectColor(homeworkUnit.subject)

        homeworkListItem.querySelector(".homework-description").textContent = homeworkUnit.simpleDescription

        homeworkListItem.querySelector(".homework-type-icon").src = "./images/homework/" + homeworkUnit.type + ".svg"

        let homeworkType = homeworkListItem.querySelector(".homework-type")
        homeworkType.lastChild.textContent = homeworkTypeDisplayName(homeworkUnit.type)
        homeworkType.style.color = homeworkTypeColor(homeworkUnit.type)

        document.getElementById("homework-container").appendChild(homeworkListItem)
    }
}

function hideHomeworkDetail() {
    document.getElementById("detail-container").style.display = "none"
}

function showHomeworkDetail(homeworkId) {
    let homeworkUnit = homeworkIds[homeworkId]
    let detailContainer = document.getElementById("homework-detail")

    document.getElementById("detail-container").style.display = "flex"

    detailContainer.querySelector(".homework-subject-icon").src = "./images/subjects/" + homeworkUnit.subject + ".svg"

    let homeworkTitle = detailContainer.querySelector(".homework-title")
    homeworkTitle.lastChild.textContent = "Tarefa de " + subjectDisplayName(homeworkUnit.subject)
    homeworkTitle.style.color = subjectColor(homeworkUnit.subject)

    detailContainer.querySelector(".homework-type-icon").src = "./images/homework/" + homeworkUnit.type + ".svg"

    let homeworkType = detailContainer.querySelector(".homework-type")
    homeworkType.lastChild.textContent = homeworkTypeDisplayName(homeworkUnit.type)
    homeworkType.style.color = homeworkTypeColor(homeworkUnit.type)

    let homeworkDescription = detailContainer.querySelector(".homework-detail-description")
    homeworkDescription.textContent = homeworkUnit.complicatedDescription
}

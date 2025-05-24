const Subjects = {
    portuguese : "portuguese",
    literature : "literature",
    arts : "arts",
    english : "english",
    essay : "essay",
    philosophy : "philosophy",

    maths : "maths",

    chemistry : "chemistry",
    physics : "physics",
    biology : "biology",

    history : "history",
    geography : "geography",

    if1 : "if1",
    if2 : "if2",
    pe : "pe"
}

function subjectDisplayName(subject) {
    switch(subject) {
        case Subjects.portuguese:
            return "Português"
        case Subjects.literature:
            return "Literatura"
        case Subjects.arts:
            return "Artes"
        case Subjects.english:
            return "Inglês"
        case Subjects.essay:
            return "Redação"
        case Subjects.philosophy:
            return "Filosofia"
        case Subjects.maths:
            return "Matemática"
        case Subjects.chemistry:
            return "Química"
        case Subjects.physics:
            return "Física"
        case Subjects.biology:
            return "Biologia"
        case Subjects.history:
            return "História"
        case Subjects.geography:
            return "Geografia"
        case Subjects.if1:
            return "Itinerário Formativo 1"
        case Subjects.if2:
            return "Itinerário Formativo 2"
        case Subjects.pe:
            return "Educação Física"
    }
}

function subjectColor(subject) {
    switch(subject) {
        case Subjects.portuguese:
            return "#FA3B30"
        case Subjects.literature:
            return "#FA3B30"
        case Subjects.arts:
            return "#5856D7"
        case Subjects.english:
            return "#2FC7BE"
        case Subjects.essay:
            return "#2FC7BE"
        case Subjects.philosophy:
            return "#5856D7"
        case Subjects.maths:
            return "#167AFF"
        case Subjects.chemistry:
            return "#AF52DE"
        case Subjects.physics:
            return "#167AFF"
        case Subjects.biology:
            return "#35C759"
        case Subjects.history:
            return "#5856D7"
        case Subjects.geography:
            return "#FB9500"
        case Subjects.if1:
            return "#FDCC03"
        case Subjects.if2:
            return "#FDCC03"
        case Subjects.pe:
            return "#FDCC03"
    }
}
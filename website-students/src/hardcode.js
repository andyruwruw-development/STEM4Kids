module.exports = {
    courses: {
        data: {

        }
    },

    course: {
        data: {
            name: "Introduction to Python",
            list: 
            [
                {
                title: "Loops",
                index: 0,
                active: true,
                open: false,
                list: [
                    {
                    title: "Intro to Loops",
                    course: "Introduction to Python",
                    chapter: "Loops",
                    section: 1,
                    active: true,
                    type: "lesson",
                    },
                    {
                    title: "While Loops",
                    course: "Introduction to Python",
                    chapter: "Loops",
                    section: 2,
                    active: true,
                    type: "quiz",
                    },
                    {
                    title: "For Loops",
                    course: "Introduction to Python",
                    chapter: "Loops",
                    section: 3,
                    active: true,
                    type: "exercise",
                    }
                ]
                },
                {
                title: "Loops",
                index: 0,
                active: false,
                open: false,
                list: [
                    {
                    title: "Intro to Loops",
                    course: "Introduction to Python",
                    chapter: "Loops",
                    section: 1,
                    active: false,
                    type: "quiz",
                    },
                    {
                    title: "While Loops",
                    course: "Introduction to Python",
                    chapter: "Loops",
                    section: 2,
                    active: false,
                    type: "lesson",
                    },
                    {
                    title: "For Loops",
                    course: "Introduction to Python",
                    chapter: "Loops",
                    section: 3,
                    active: false,
                    type: "exercise",
                    }
                ]
                },
                {
                title: "Loops",
                index: 0,
                active: false,
                open: false,
                list: [
                    {
                    title: "Intro to Loops",
                    course: "Introduction to Python",
                    chapter: "Loops",
                    section: 1,
                    },
                    {
                    title: "While Loops",
                    course: "Introduction to Python",
                    chapter: "Loops",
                    section: 2,
                    },
                    {
                    title: "For Loops",
                    course: "Introduction to Python",
                    chapter: "Loops",
                    section: 3,
                    }
                ]
                }
            ],
              
        }
    },

    lesson: {
        data: {
            title: "Programming (general)",
            course: "Introduction to Python",
            chapter: 1,
            section: 1,
            chaptername: "Stuff",
            data: [
                {type: "subtitle", data: "Computer program basics", index: 0},
                {type: "text", data: "Computer programs are abundant in many <b>people's lives today<b>, carrying out applications on smartphones, tablets, and laptops, powering businesses like Amazon and Netflix, helping cars drive and planes fly, and much more.", index: 1},
                {type: "paragraph", data: "A computer program consists of instructions executing one at a time. Basic instruction types are:", index: 2}
            ]
        }
    },

    quiz: {
        data: {

        }
    },

    exercise: {
        data: {

        }
    }
}
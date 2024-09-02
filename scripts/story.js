const story = {
    start: {
        title: "RetroLoop",
        description:
            "A text-based adventure game where you take the role of an employee in a typical office.",
        choices: [{ label: "Start Game", next: "intro" }],
        thumbnail: "images/cover.png",
    },
    intro: {
        title: "The shuttle",
        description:
            "The sun rises over Megacity and you wait for the shuttle. You are thirsty from the long wait. Should you buy a drink at the station?",
        choices: [
            { label: "Wait for the shuttle", next: "getMessage" },
            { label: "Buy a drink", next: "buyDrink" },
        ],
    },
    buyDrink: {
        title: "The drink",
        description:
            "You decide to buy a drink. The cool liquid is refreshing, but as you take a sip, you notice the shuttle arriving in the distance. Will you risk another delay for a second drink?",
        choices: [
            { label: "Catch the shuttle", next: "getMessage" },
            { label: "Buy another drink", next: "buyDrink" },
        ],
        inventory: ["A drink"],
        damage: 30,
    },
    getMessage: {
        title: "The message",
        description:
            "You’re jolted back to reality by the subtle buzz of your phone. Normally, you’d ignore any work-related communications outside office hours, but something about this message feels different.",
        choices: [
            { label: "Read the message immediately", next: "openMessage" },
            { label: "Save it for later", next: "ignoreMessage" },
        ],
        inventory: ["test"],
    },
    openMessage: {
        title: "Q3 financial report",
        description:
            "You tap on the notification and read: 'URGENT: The Q3 financial report is incomplete! The board meeting starts in 15 minutes, and we’re missing the latest revenue projections.' Your heart races as you realize the gravity of the situation.",
        choices: [
            { label: "Send the update from your phone", next: "sendReport" },
            { label: "Ignore the problem", next: "panic" },
        ],
    },
    ignoreMessage: {
        title: "Lingering doubts",
        description:
            "As you continue your commute, you can't shake off a sense of unease. The futuristic cityscape rushes by and you realize that you did not update the Q3 financial report the day before.",
        choices: [
            { label: "Revisit the message now", next: "openMessage" },
            { label: "Proceed without checking", next: "lateConsequences" },
        ],
    },
    sendReport: {
        title: "Just in time",
        description:
            "You quickly access the report on your phone and send it directly to Mr. Hayes. The board meeting proceeds smoothly, and Mr. Hayes commends your efficiency.",
        choices: [
            {
                label: "Celebrate with a coffee from the automated cafe",
                next: "thanks",
            },
            { label: "Buy a drink", next: "gameOver" },
        ],
    },
    panic: {
        title: "Frozen in fear",
        description:
            "You freeze, unable to think clearly, minutes pass as you blank out. The board meeting goes ahead without the report, and Mr. Hayes is not pleased.",
        choices: [
            {
                label: "Retry and send the report immediately from your phone",
                next: "sendReport",
            },
            {
                label: "Accept your fate and prepare for a difficult day",
                next: "intro",
            },
        ],
    },
    lateConsequences: {
        title: "Too late?",
        description:
            "You finally arrive at the office only to realize you could have sent the report from your phone all along. The report is overdue, and Mr. Hayes is frustrated.",
        choices: [
            {
                label: "Apologize and send the report immediately from your phone",
                next: "sendReport",
            },
            {
                label: "Try to smooth things over with Mr. Hayes",
                next: "panic",
            },
        ],
    },
    gameOver: {
        title: "Game Over",
        description:
            "Your choices have led to an unfavorable outcome. You'll need to try again to see if you can achieve a better result.",
        choices: [
            { label: "Play again", next: "intro" },
            { label: "Exit game", next: "thanks" },
        ],
    },
    thanks: {
        title: "You won!",
        description:
            "Thank you for playing this game. I hope you enjoyed this prototype I made with HTML, CSS and JavaScript. Feel free to discover it's multiple paths and choices.",
        choices: [{ label: "Play again", next: "intro" }],
    },
};

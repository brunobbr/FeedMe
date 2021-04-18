const questions = [
    "O que aprendi hoje",
    "O que me deixou aborrecido? E oque eu poderia melhorar",
    "O que me deixou feliz hoje",
    "Quantas pessoas eu ajudei hoje"
]

const ask = (index = 0 ) =>{
    Process.stdout.write("\n" + questions[index] + ">")
}

ask()

const answers = []
    process.stdin.on("data", data => {
        answers.push(data.toString().trim())
        if (answers.length < questions.length){
            ask(answers.length)
        } else {
            process.exit()
        }
    })

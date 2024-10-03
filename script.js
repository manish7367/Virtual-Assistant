let btn = document.querySelector("#btn")
let content = document.querySelector('#content')
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours > 0 && hours < 12) {
        speak("Good Morning sir")
    } else if (hours >= 12 && hours < 16) {
        speak("Good afternoon sir")
    } else {
        speak("Good Evening sir")
    }
}
window.addEventListener('load', () => {
    wishMe()
})


let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
    console.log(event)
}
btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello sir ,what can i help you?")
    }
    else if (message.includes("who are you")) {
        speak("i am virtual assistant,created by Manish Sir")
    } else if (message.includes("how are you")) {
        speak("i am fine sir ,how do you do")
    } else if (message.includes("what do you do")) {
        speak("I am a virtual assistant and i help you to find the answer of your query")
    }
    else if (message.includes("how can you help me")) {
        speak("i help you to find the answer of your query")
    }
    else if (message.includes("i am fine")) {
        speak("sounds good sir and , i like to know how can i help you")
    }
    else if (message.includes("tell me about yourself" || "your introduction")) {
        speak("i am virtual assistant,created by Manish Sir named Shipra and i help you to find the answer of your query so you can ask whatever you want")
    }
    else if (message.includes("open youtube")) {
        speak("opening youtube...")
        window.open("https://www.youtube.com/", "_blank")
    } else if (message.includes("open google")) {
        speak("opening google....")
        window.open("https://www.google.co.in/", "_blank")
    } else if (message.includes("open instagram")) {
        speak("opening instagram....")
        window.open("https://instagram.com/", "_blank")
    } else if (message.includes("open facebook")) {
        speak("opening facebook...")
        window.open("https://facebook.com", "_blank")
    } else if (message.includes("open twitter")) {
        speak("opening twitter...")
        window.open("https://x.com/?lang=en", "_blank")
    } else if (message.includes("open linkedin")) {
        speak("opening linkedin...")
        window.open("https://in.linkedin.com/", "_blank")
    } else if (message.includes("open github")) {
        speak("opening github...")
        window.open("https://github.com/", "_blank")
    } else {
        let finalText = "this is what i found on internet regarding" + message.replace("shifra", "") || message.replace("shipra", "")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shifra", "")}`, "_blank")
    }
}





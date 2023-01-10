// 1. Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
var form = document.forms[0]
form.addEventListener('submit', (e) => {
    e.preventDefault()
    var noun = document.querySelector('#noun').value.trim()
    var adjective = document.querySelector('#adjective').value.trim()
    var person = document.querySelector('#person').value.trim()
    var verb = document.querySelector('#verb').value.trim()
    var place = document.querySelector('#place').value.trim();
    // 3. Write a story that uses each of the values.
    var stor = document.querySelector('#story')
    var mots = [person, verb, noun, adjective, place]
    stor.innerHTML = mots.join(' ')
    for (const a of mots) {
        if(!a.length) {
            alert("please fill in the fields")
            break
        }
    }
    // 5. Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user).
    var sentences = [];
    for (var i = 0; i < 10; i++) {
        var sentence = []
        sentence.length = mots.length
        sentence.fill(null)
        do {
            sentence[sentence.indexOf(null)] = mots[Math.floor(Math.random() * mots.length)]
        } while (sentence.includes(null));
        sentences.push(sentence)
    }
    document.getElementById("shuffle").onclick = () => {
        stor.innerHTML = sentences[Math.floor(Math.random() * sentences.length)].join(" ")
    }
})
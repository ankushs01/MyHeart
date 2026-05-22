const gifStages = [
    "https://media.tenor.com/EBV7OT7ACfwAAAAj/u-u-qua-qua-u-quaa.gif",    // 0 normal
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAd/chiikawa-hachiware.gif",  // 1 confused
    "https://media.tenor.com/f_rkpJbH1s8AAAAj/somsom1012.gif",             // 2 pleading
    "https://media.tenor.com/OGY9zdREsVAAAAAj/somsom1012.gif",             // 3 sad
    "https://media1.tenor.com/m/WGfra-Y_Ke0AAAAd/chiikawa-sad.gif",       // 4 sadder
    "https://media.tenor.com/CivArbX7NzQAAAAj/somsom1012.gif",             // 5 devastated
    "https://media.tenor.com/5_tv1HquZlcAAAAj/chiikawa.gif",               // 6 very devastated
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAC/chiikawa-hachiware.gif"  // 7 crying runaway
]

// const noMessages = [
//     "No",
//     "Are you positive? 🤔",
//     "Pookie please... 🥺",
//     "If you say no, I will be really sad...",
//     "I will be very sad... 😢",
//     "Please??? 💔",
//     "Don't do this to me...",
//     "Last chance! 😭",
//     "You can't catch me anyway 😜"
// ]
const noMessages = [
    "Naaa",
    "Tui vule 'Ho baby' ar jagat 'Naa valapai na' click koira disos.. 🙂‍↕️",
    "Abar!! ato vul kmne krs kuttu... 🥺",
    "Botluu kita krtasos... 😔",
    "Tur aii nomunar dir thika onek kharap lage janos toh... 😢",
    "Hoise niii??? 💔",
    "Akhono nomuna ses hoise na??... 🙂",
    "Aicha Last bar jigaitasi! 😭",
    "Dara abar, atokhon onek nomuna krsos 😤"
]

// const yesTeasePokes = [
//     "try saying no first... I bet you want to know what happens 😏",
//     "go on, hit no... just once 👀",
//     "you're missing out 😈",
//     "click no, I dare you 😏"
// ]
const yesTeasePokes = [
    "Ami jani tui amare onek valopas but ekbar na koira dek, ki hoi!! 😇",
    "Are try to koira dek kuttu... 👀",
    // "Miss krtasos kuttu.. 😈",
    "Miss krtasos kuttu.. 😤",
    // "click kr Naa te nomuna na koira.. 😤"
    "click kro na Baby.. 😩"
]

let yesTeasedCount = 0

let noClickCount = 0
let runawayEnabled = false
let musicPlaying = true

const catGif = document.getElementById('cat-gif')
const yesBtn = document.getElementById('yes-btn')
const noBtn = document.getElementById('no-btn')
const music = document.getElementById('bg-music')

// Autoplay: audio starts muted (bypasses browser policy), unmute immediately
music.muted = true
music.volume = 0.3
music.play().then(() => {
    music.muted = false
}).catch(() => {
    // Fallback: unmute on first interaction
    document.addEventListener('click', () => {
        music.muted = false
        music.play().catch(() => {})
    }, { once: true })
})

function toggleMusic() {
    if (musicPlaying) {
        music.pause()
        musicPlaying = false
        document.getElementById('music-toggle').textContent = '🔇'
    } else {
        music.muted = false
        music.play()
        musicPlaying = true
        document.getElementById('music-toggle').textContent = '🔊'
    }
}

function handleYesClick() {
    if (!runawayEnabled) {
        // Tease her to try No first
        const msg = yesTeasePokes[Math.min(yesTeasedCount, yesTeasePokes.length - 1)]
        yesTeasedCount++
        showTeaseMessage(msg)
        return
    }
    window.location.href = 'yes.html'
}

function showTeaseMessage(msg) {
    let toast = document.getElementById('tease-toast')
    toast.textContent = msg
    toast.classList.add('show')
    clearTimeout(toast._timer)
    // toast._timer = setTimeout(() => toast.classList.remove('show'), 2500)
    toast._timer = setTimeout(() => toast.classList.remove('show'), Math.max(2500, msg.length * 60))  
    //"Math.max(2500, msg.length * 60)" This calculates time based on how long the message is: (Short messages (~30 chars) → ~2500ms as before), (Long first message (~70 chars) → ~4200ms automatically)
}

function handleNoClick() {
    noClickCount++

    // Cycle through guilt-trip messages
    const msgIndex = Math.min(noClickCount, noMessages.length - 1)
    noBtn.textContent = noMessages[msgIndex]

//claude.ai
    // Grow the Yes button bigger each time
    // const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize)
    // yesBtn.style.fontSize = `${currentSize * 1.35}px`
    // const padY = Math.min(18 + noClickCount * 5, 60)
    // const padX = Math.min(45 + noClickCount * 10, 120)
    // yesBtn.style.padding = `${padY}px ${padX}px`


    // Grow the Yes button bigger each time — capped for mobile
    const isMobile = window.innerWidth < 600

    //claude.ai
    const maxFontSize = isMobile ? 2.2 : 5    // rem equivalent in px
    const maxPadY = isMobile ? 28 : 60
    const maxPadX = isMobile ? 55 : 120
    // const maxFontSize = isMobile ? 4 : 5
    // const maxPadY = isMobile ? 40 : 60
    // const maxPadX = isMobile ? 90 : 120
    //claude.ai

    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize)

    //claude.ai
    const newSize = Math.min(currentSize * 1.35, maxFontSize * 16)
    // const growRate = isMobile ? 1.12 : 1.35
    // const newSize = Math.min(currentSize * growRate, maxFontSize * 16)
    //claude.ai

    yesBtn.style.fontSize = `${newSize}px`

    const padY = Math.min(18 + noClickCount * 5, maxPadY)
    const padX = Math.min(45 + noClickCount * 10, maxPadX)
    yesBtn.style.padding = `${padY}px ${padX}px`

    // On mobile, also cap the button width so it doesn't overflow
    if (isMobile) {
        yesBtn.style.maxWidth = '80vw'
        yesBtn.style.wordBreak = 'break-word'
    }
//claude.ai


    // Shrink No button to contrast
    if (noClickCount >= 2) {
        const noSize = parseFloat(window.getComputedStyle(noBtn).fontSize)
        noBtn.style.fontSize = `${Math.max(noSize * 0.85, 10)}px`
    }

    // Swap cat GIF through stages
    const gifIndex = Math.min(noClickCount, gifStages.length - 1)
    swapGif(gifStages[gifIndex])

    // Runaway starts at click 5
    // if (noClickCount >= 5 && !runawayEnabled) {
    if (noClickCount >= 8 && !runawayEnabled) {      //change my claude.ai
        enableRunaway()
        runawayEnabled = true
    }
}

function swapGif(src) {
    catGif.style.opacity = '0'
    setTimeout(() => {
        catGif.src = src
        catGif.style.opacity = '1'
    }, 200)
}


function enableRunaway() {
    noBtn.addEventListener('mouseover', runAway)
    noBtn.addEventListener('touchstart', runAway, { passive: true })
}

function runAway() {
    const margin = 20
    const btnW = noBtn.offsetWidth
    const btnH = noBtn.offsetHeight
    const maxX = window.innerWidth - btnW - margin
    const maxY = window.innerHeight - btnH - margin

    const randomX = Math.random() * maxX + margin / 2
    const randomY = Math.random() * maxY + margin / 2

    noBtn.style.position = 'fixed'
    noBtn.style.left = `${randomX}px`
    noBtn.style.top = `${randomY}px`
    noBtn.style.zIndex = '50'
}

const pertayaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0

const botSay = (data) => {
    return [
        "Hallo, Pernekalkan nama saya umaybot. Siapa kamu",
        `Halo ${data?.nama}, berapa usia kamu?`,
        `ohh ${data?.usia}, hobi kamu apa ya?`,
        `sama dong aku juga hobi ${data?.hobi} gg kamu`,
        `ohh ${data?.umay}, yaudah kali gitu kita udahan ya`,
    ]
}

pertayaan.innerHTML = botSay()[0]

let userData = []

function botStart () {
    init++
    if(init === 1) {
    botDelay({nama: jawaban.value})
    }else if (init === 2) {
    botDelay({usia: jawaban.value})
    }else if (init === 3) {
    botDelay({hobi: jawaban.value})
    }else if (init === 4) {
    botDelay({umay: jawaban.value})
        finishing()
    }else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    setTimeout(() => {
        pertayaan.innerHTML = botSay(jawabanUser)[init]
    }, [1000])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertayaan.innerHTML = `Thank you ya ${userData[0]} udah main ke umaybot🤫🤫🧏‍♂️, kali kali kita main ${userData[2]} bareng ya`
    jawaban.value = "Siap thanks juga"
}

function botEnd() {
    window.location.reload()
}
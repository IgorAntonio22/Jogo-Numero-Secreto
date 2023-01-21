window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition; //window no início faz com que ao iniciar a página ele já inicie o reconhecimento de voz

const elementoChute = document.getElementById('chute')
const recognition = new SpeechRecognition();

recognition.lang = 'pt-br' //coloca o reconhecimento de voz em português
recognition.start() //inicia a captação do microfone

recognition.addEventListener('result', onSpeak)

function onSpeak(evento) {
    chute = evento.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start()) //reinicia o reconhecimento de voz
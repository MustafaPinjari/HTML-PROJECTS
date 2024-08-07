const textarea = document.querySelector("textarea"),
    voiceList = document.querySelector("select"),
    speechBtn = document.getElementById("speechBtn"),
    downloadBtn = document.getElementById("downloadBtn");

let synth = speechSynthesis,
    isSpeaking = true;

voices();

function voices() {
    for (let voice of synth.getVoices()) {
        let selected = voice.name === "Google US English" ? "selected" : "";
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
        voiceList.insertAdjacentHTML("beforeend", option);
    }
}

synth.addEventListener("voiceschanged", voices);

function textToSpeech(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    for (let voice of synth.getVoices()) {
        if (voice.name === voiceList.value) {
            utterance.voice = voice;
        }
    }
    synth.speak(utterance);
    return utterance;
}

speechBtn.addEventListener("click", e => {
    e.preventDefault();
    if (textarea.value !== "") {
        // Checks if not speaking, Speak Textarea Text
        if (!synth.speaking) {
            textToSpeech(textarea.value);
        }
        // If text was long, Add Resume and Pause Function
        if (textarea.value.length > 80) {
            setInterval(() => {
                if (!synth.speaking && !isSpeaking) {
                    isSpeaking = true;
                    speechBtn.innerText = "Convert To Speech";
                }
            }, 500);
            if (isSpeaking) {
                synth.resume();
                isSpeaking = false;
                speechBtn.innerText = "Pause Speech";
            } else {
                synth.pause();
                isSpeaking = true;
                speechBtn.innerText = "Resume Speech";
            }
        } else {
            speechBtn.innerText = "Convert To Speech";
        }
    }
});

downloadBtn.addEventListener("click", e => {
    e.preventDefault();
    if (textarea.value !== "") {
        let utterance = new SpeechSynthesisUtterance(textarea.value);
        for (let voice of synth.getVoices()) {
            if (voice.name === voiceList.value) {
                utterance.voice = voice;
            }
        }

        // Create a media stream destination
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const dest = audioCtx.createMediaStreamDestination();
        const mediaRecorder = new MediaRecorder(dest.stream);
        let chunks = [];

        utterance.onstart = () => {
            audioCtx.resume().then(() => {
                const source = audioCtx.createMediaStreamSource(dest.stream);
                source.connect(dest);
                mediaRecorder.start();
            });
        };

        utterance.onend = () => {
            mediaRecorder.stop();
        };

        mediaRecorder.ondataavailable = event => {
            chunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, { 'type': 'audio/ogg; codecs=opus' });
            const audioURL = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = audioURL;
            a.download = 'audio generated by web of Mustafa.ogg';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        };

        synth.speak(utterance);
    }
});

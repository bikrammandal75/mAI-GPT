export const startSpeechRecognition = (onResult, onSend, onEnd) => {
    if (!("webkitSpeechRecognition" in window)) {
        alert("Speech recognition is not supported in this browser.");
        return null;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    let silenceTimeout = null;
    let maxDurationTimeout = null;
    let latestTranscript = "";

    const clearTimers = () => {
        clearTimeout(silenceTimeout);
        clearTimeout(maxDurationTimeout);
    };

    recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
            .map((result) => result[0].transcript)
            .join(" ")
            .trim();

        latestTranscript = transcript;
        onResult(transcript); // Update input only when speech happens

        // Reset silence timer on speaking
        clearTimeout(silenceTimeout);
        silenceTimeout = setTimeout(() => {
            recognition.stop(); // Triggers onend
        }, 5000);
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        clearTimers();
        onEnd?.();
    };

    recognition.onend = () => {
        clearTimers();
        if (latestTranscript) {
            onSend?.(latestTranscript);
        }
        onEnd?.();
    };

    recognition.start();

    // Max time limit (1 minute)
    maxDurationTimeout = setTimeout(() => {
        recognition.stop();
    }, 60000);

    return recognition;
};

export const handleTextToSpeech = (text, speechStatus, setSpeechStatus) => {
    if (!window.speechSynthesis) {
        alert("Text-to-speech is not supported in this browser.");
        return;
    }

    if (speechStatus === "speaking") {
        speechSynthesis.cancel();
        setSpeechStatus("idle");
        return;
    }

    setSpeechStatus("loading");

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";

    utterance.onstart = () => setSpeechStatus("speaking");
    utterance.onend = () => setSpeechStatus("idle");
    utterance.onerror = () => setSpeechStatus("idle");

    speechSynthesis.speak(utterance);
};

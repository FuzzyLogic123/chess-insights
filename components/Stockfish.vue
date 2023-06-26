<script setup>

const STOCKFISH_DEPTH = 7;
let engineEvaluation = ref(0);

const wasmSupported = typeof WebAssembly === 'object' && WebAssembly.validate(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));

const stockfish = new Worker(wasmSupported ? './lib/stockfish/stockfish.wasm.js' : './lib/stockfish/stockfish.js');

stockfish.addEventListener('message', function (e) {
    // console.log(e.data);
    const engineResponse = processEngineResponse(e.data);
    if (engineResponse) {
        console.log(engineResponse.value);
        engineEvaluation.value = engineResponse.value;
    }
});

stockfish.postMessage('uci');
stockfish.postMessage('ucinewgame')

stockfish.postMessage('position startpos e4 e5 kf3')
stockfish.postMessage(`go depth ${STOCKFISH_DEPTH}`)

const getEvaluation = (messageData) => {
    // STOCKFISH WILL SHOW ADVANTAGE TO CURRENT PLAYER (ADJUST THIS LATER ON)
    if (!messageData.startsWith("info")) { 
        return null;
    }

    let evaluation = {};
    let splittedText = messageData.split(" ");
    if (splittedText[0] == "info") {
        for (let n = 0; n < splittedText.length; n++) {
            if (splittedText[n] == "score") {
                return {
                    type: splittedText[n + 1],
                    value: parseInt(splittedText[n + 2]),
                };
            }
        }
    } else if (splittedText[0] == "bestmove") {
        return evaluation;
    }
}

const getBestMove = (messageData) => {
    if (!messageData.startsWith("bestmove")) {
        return null;
    }

    let splittedText = messageData.split(" ");
    if (splittedText[0] == "bestmove") {
        return splittedText[1];
    }
}

const hasReachedRequiredDepth = (messageData) => {
    const splitText = messageData.split(" ");
    if (splitText.includes("bestmove")) {
        return true;
    }
    for (let n = 0; n < splitText.length; n++) {
        if (splitText[n] == "depth") {
            if (splitText[n + 1] == STOCKFISH_DEPTH) {
                return true;
            }
        }
    }
    return false;
}

const processEngineResponse = (messageData) => {
    if (!hasReachedRequiredDepth(messageData)) {
        return null;
    }

    if (getEvaluation(messageData)) {
        return getEvaluation(messageData)
    }

    // if (getBestMove(messageData)) {
    //     return getBestMove(messageData)
    // }
}

</script>


<template>
    <div class="test">
        +{{ engineEvaluation / 100 }}
    </div>
</template>

<style>
.test {
    height: 20rem;
    font-size: 3rem;
    background-color: white;
    text-align: center;
}
</style>

function railFenceCipherEnc() {
    let rfcpText = document.getElementById('in-pTextRFC').value;
    let rfceKey = parseInt(document.getElementById('in-EncKeyRFC').value);
    let fence = [];
    for (let i = 0; i < rfceKey; i++) {
        fence.push([]);
    }
    let rail = 0;
    let direction = 1;

    for (let char of rfcpText) {
        fence[rail].push(char);

        rail += direction;

        if (rail === rfceKey - 1 || rail === 0) {
        direction = -direction;
        }
    }
    let cipherText = fence.flat().join('');
    document.getElementById('dis-out-p').innerText = "Plain Text :" + rfcpText;
    document.getElementById('dis-out-k').innerText = "Key : " + rfceKey;
    document.getElementById('dis-out-c').innerText = "Cipher Text : " + cipherText;
}

function railFenceCipherDec() {
    let rfccText = document.getElementById('in-cTextRFC').value;
    let rfcdKey = document.getElementById('in-DeckeyRFC').value;
    let fence = [];
    for (let i = 0; i < rfcdKey; i++) {
        fence.push([]);
    }
    let rail = 0;
    let direction = 1;
    for (let char of rfccText) {
        fence[rail].push(' ');
        rail += direction;
        if (rail === rfcdKey - 1 || rail === 0) {
        direction = -direction;
        }
    }
    let index = 0;
    for (let i = 0; i < rfcdKey; i++) {
        for (let j = 0; j < fence[i].length; j++) {
        fence[i][j] = rfccText[index++];
        }
    }
    rail = 0;
    direction = 1;
    let decryptedText = '';
    for (let i = 0; i < rfccText.length; i++) {
        decryptedText += fence[rail].shift();
        rail += direction;
        if (rail === rfcdKey - 1 || rail === 0) {
        direction = -direction;
        }
    }
    document.getElementById('dis-out-p').innerText = "Cipher Text :" + rfccText;
    document.getElementById('dis-out-k').innerText = "Key : " + rfcdKey;
    document.getElementById('dis-out-c').innerText = "Decrypted Text : " + decryptedText;
    

}


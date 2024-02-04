function caesarCipherEnc() {
    let ccpText = document.getElementById('in-pText').value;
    let cceKey = document.getElementById('in-EncKey').value;
    let cypText = "";
    for (let i = 0; i < ccpText.length; i++) {
        let pstr = ccpText.charAt(i);
        let n = (pstr.charCodeAt(0) - (97 - cceKey)) % 26;
        cypText += String.fromCharCode(n + 97);
    }
    document.getElementById('dis-out-p').innerText = "Plain Text :" + ccpText;
    document.getElementById('dis-out-k').innerText = "Key : " + cceKey;
    document.getElementById('dis-out-c').innerText = "Cipher Text : " + cypText;
}

function caesarCipherDec() {
    let cccText = document.getElementById('in-cText').value;
    let ccdKey = document.getElementById('in-Deckey').value;
    let decpyText = "";
    let fccdkey = (26 - ccdKey) % 26;
    for (let i = 0; i < cccText.length; i++) {
        let cstr = cccText.charAt(i);
        let n = (cstr.charCodeAt(0) - (97 - fccdkey)) % 26;
        decpyText += String.fromCharCode(n + 97);
    }
    document.getElementById('dis-out-p').innerText = "Cipher Text :" + cccText;
    document.getElementById('dis-out-k').innerText = "Key : " + ccdKey;
    document.getElementById('dis-out-c').innerText = "Decrypted Text : " + decpyText;
}
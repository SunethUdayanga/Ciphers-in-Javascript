
function vigenereCipherEnc() {
    let vigcpText = document.getElementById('in-pTextVigC').value;
    let rfceKey = document.getElementById('in-EncKeyVigC').value;
    vigcpText = vigcpText.toUpperCase();
    rfceKey = rfceKey.toUpperCase();
    let encryptedText = '';
    for (let i = 0; i < vigcpText.length; i++) {
        if (vigcpText[i] === ' ') {
            encryptedText += ' ';
        } else {
            let charCode = (vigcpText.charCodeAt(i) + rfceKey.charCodeAt(i % rfceKey.length) - 2 * 'A'.charCodeAt(0)) % 26 + 'A'.charCodeAt(0);
            encryptedText += String.fromCharCode(charCode);
        }
    }
    document.getElementById('dis-out-p').innerText = "Plain Text :" + vigcpText;
    document.getElementById('dis-out-k').innerText = "Key : " + rfceKey;
    document.getElementById('dis-out-c').innerText = "Cipher Text : " + encryptedText;
    
}


function vigenereCipherDec() {
    let vigccText = document.getElementById('in-cTextVigC').value;
    let vigcdKey = document.getElementById('in-DeckeyVigC').value;
    vigccText = vigccText.toUpperCase();
    vigcdKey = vigcdKey.toUpperCase();
    let decryptedText = '';
    for (let i = 0; i < vigccText.length; i++) {
        if (vigccText[i] === ' ') {
            decryptedText += ' ';
        } else {
            let charCode = (vigccText.charCodeAt(i) - vigcdKey.charCodeAt(i % vigcdKey.length) + 26) % 26 + 'A'.charCodeAt(0);
            decryptedText += String.fromCharCode(charCode);
        }
    }
    document.getElementById('dis-out-p').innerText = "Cipher Text :" + vigccText;
    document.getElementById('dis-out-k').innerText = "Key : " + vigcdKey;
    document.getElementById('dis-out-c').innerText = "Decrypted Text : " + decryptedText;

}


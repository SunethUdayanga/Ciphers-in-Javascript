
function columnarCipherEnc() {
    let colcpText = document.getElementById('in-pTextColC').value;
    let colceKey = document.getElementById('in-EncKeyColC').value;
    const rows = [];
    let trow = "";
    for (let i = 0; i < colcpText.length; i++) {
        trow += colcpText[i];
        if (trow.length === colceKey.length) {
        rows.push(trow);
        trow = "";
      }
    }
    if (trow.length > 0) {
        rows.push(trow.padEnd(colceKey.length, "_")); //padding
    }
    let colctext = ""; 
    for (let i = 0; i < colceKey.length; i++) {
        const colIndex = colceKey.indexOf(colceKey.charAt(i));
        for (let j = 0; j < rows.length; j++) {
            colctext += rows[j][colIndex];
        }
    }
    document.getElementById('dis-out-p').innerText = "Plain Text :" + colcpText;
    document.getElementById('dis-out-k').innerText = "Key : " + colceKey;
    document.getElementById('dis-out-c').innerText = "Cipher Text : " + colctext; 
}

function columnarCipherDec() {
    let colccText = document.getElementById('in-cTextColC').value;
    let colcdKey = document.getElementById('in-DeckeyColC').value;
    const cols = [];
    for (let i = 0; i < colcdKey.length; i++) {
      const colIndex = colcdKey.indexOf(colcdKey.charAt(i));
      const col = colccText.slice(i * Math.ceil(colccText.length / colcdKey.length), (i + 1) * Math.ceil(colccText.length / colcdKey.length));
      cols.push(col);
    }
  
    let dectext = "";
    for (let i = 0; i < cols[0].length; i++) {
      for (let j = 0; j < colcdKey.length; j++) {
        dectext += cols[j][i];
      }
    }
    
    document.getElementById('dis-out-p').innerText = "Cipher Text :" + colccText;
    document.getElementById('dis-out-k').innerText = "Key : " + colcdKey;
    document.getElementById('dis-out-c').innerText = "Decrypted Text : " + dectext.replace(/_/g, "");//for remove any padding underscores

  }

window.cipher = {
  encode: (texto_a_codificar, offset) => {
    /* Acá va tu código */
    texto_a_codificar.split("").map(function(x){return (String.fromCharCode((x.charCodeAt(0)-65+offset)%26+65)).join().replace(/,/g, "") })
  },
  decode: (texto_a_codificar, offset) => {
    /* Acá va tu código */
	texto_a_codificar.split("").map(function(x){return (String.fromCharCode((x.charCodeAt(0)-65-(offset%26)+26)%26+65)).join().replace(/,/g, "") });
  }
};

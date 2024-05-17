document.addEventListener('DOMContentLoaded', function () {
    const canvas1 = document.getElementById('signatureCanvas1');
    const canvas2 = document.getElementById('signatureCanvas2');
    const canvas3 = document.getElementById('signatureCanvas3');
    const canvas4 = document.getElementById('signatureCanvas4');
  
    const signaturePad1 = new SignaturePad(canvas1);
    const signaturePad2 = new SignaturePad(canvas2);
    const signaturePad3 = new SignaturePad(canvas3);
    const signaturePad4 = new SignaturePad(canvas4);
  
    const clearButton1 = document.getElementById('clearButton1');
    const clearButton2 = document.getElementById('clearButton2');
    const clearButton3 = document.getElementById('clearButton3');
    const clearButton4 = document.getElementById('clearButton4');
  
    // Fungsi untuk mengganti semua canvas dengan gambar
    function saveAllSignatures() {
        [canvas1, canvas2, canvas3, canvas4].forEach((canvas, index) => {
            const signaturePad = [signaturePad1, signaturePad2, signaturePad3, signaturePad4][index];
            if (!signaturePad.isEmpty()) {
                const image = new Image();
                image.src = signaturePad.toDataURL();
                canvas.parentNode.replaceChild(image, canvas);
                clearButton1.style.display = 'none'
                clearButton2.style.display = 'none'
                clearButton3.style.display = 'none'
                clearButton4.style.display = 'none'
            }
        });
    }
  
    // Event listener untuk tombol "Save All Signatures"
    document.getElementById('saveAllSignatures')?.addEventListener('click', saveAllSignatures);
  
    // Fungsi untuk menghapus tanda tangan pada setiap signature pad
    function clearSignaturePad(signaturePad) {
        signaturePad.clear();
    }
  
    // Event listener untuk tombol "Clear" masing-masing signature pad
    clearButton1.addEventListener('click', function () {
        clearSignaturePad(signaturePad1);
    });
    clearButton2.addEventListener('click', function () {
        clearSignaturePad(signaturePad2);
    });
    clearButton3.addEventListener('click', function () {
        clearSignaturePad(signaturePad3);
    });
    clearButton4.addEventListener('click', function () {
        clearSignaturePad(signaturePad4);
    });
  });
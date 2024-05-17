let canvas1, canvas2, canvas3, canvas4;
let signaturePad1, signaturePad2, signaturePad3, signaturePad4;
let clearButton1, clearButton2, clearButton3, clearButton4;

// Fungsi untuk mengganti semua canvas dengan gambar
function saveAllSignatures() {
    [canvas1, canvas2, canvas3, canvas4].forEach((canvas, index) => {
        const signaturePad = [signaturePad1, signaturePad2, signaturePad3, signaturePad4][index];
        if (!signaturePad.isEmpty()) {
            const image = new Image();
            image.src = signaturePad.toDataURL();
            canvas.parentNode.replaceChild(image, canvas);
        }
    });

    clearButton1.style.display = 'none';
    clearButton2.style.display = 'none';
    clearButton3.style.display = 'none';
    clearButton4.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    canvas1 = document.getElementById('signatureCanvas1');
    canvas2 = document.getElementById('signatureCanvas2');
    canvas3 = document.getElementById('signatureCanvas3');
    canvas4 = document.getElementById('signatureCanvas4');

    signaturePad1 = new SignaturePad(canvas1);
    signaturePad2 = new SignaturePad(canvas2);
    signaturePad3 = new SignaturePad(canvas3);
    signaturePad4 = new SignaturePad(canvas4);

    clearButton1 = document.getElementById('clearButton1');
    clearButton2 = document.getElementById('clearButton2');
    clearButton3 = document.getElementById('clearButton3');
    clearButton4 = document.getElementById('clearButton4');

    // Event listener untuk tombol "Save All Signatures"
    document.getElementById('saveAllSignatures').addEventListener('click', saveAllSignatures);

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
let canvas1, canvas2, canvas3, canvas4;
let signaturePad1, signaturePad2, signaturePad3, signaturePad4;
let clearButton1, clearButton2, clearButton3, clearButton4;

document.addEventListener('DOMContentLoaded', function () {
    canvas1 = document.getElementById('signatureCanvas1');
    canvas2 = document.getElementById('signatureCanvas2');
    canvas3 = document.getElementById('signatureCanvas3');
    canvas4 = document.getElementById('signatureCanvas4');
  
    signaturePad1 = new SignaturePad(canvas1);
    signaturePad2 = new SignaturePad(canvas2);
    signaturePad3 = new SignaturePad(canvas3);
    signaturePad4 = new SignaturePad(canvas4);
});
    // Fungsi untuk mengganti canvas dengan gambar
    function replaceCanvasWithImage(canvas, signaturePad) {
      if (!signaturePad.isEmpty()) {
        const image = new Image();
        image.src = signaturePad.toDataURL();
        canvas.parentNode.replaceChild(image, canvas);
      }
    }
  
    // Fungsi untuk menyimpan semua tanda tangan
    function saveAllSignatures() {
      document.getElementById('clearButton1').style.display = 'none'
      document.getElementById('clearButton2').style.display = 'none'
      document.getElementById('clearButton3').style.display = 'none'
      document.getElementById('clearButton4').style.display = 'none'
      replaceCanvasWithImage(canvas1, signaturePad1);
      replaceCanvasWithImage(canvas2, signaturePad2);
      replaceCanvasWithImage(canvas3, signaturePad3);
      replaceCanvasWithImage(canvas4, signaturePad4);
    }
  
     //fungsi tambahan untuk menghapus tanda tangan
    document.getElementById('clearButton1').addEventListener('click', function () {
      signaturePad1.clear();
    });
    document.getElementById('clearButton2').addEventListener('click', function () {
      signaturePad2.clear();
    });
    document.getElementById('clearButton3').addEventListener('click', function () {
      signaturePad3.clear();
    });
    document.getElementById('clearButton4').addEventListener('click', function () {
      signaturePad4.clear();
    });
    // Event listener untuk tombol "Save All Signatures"
    document.getElementById('saveAllSignatures').addEventListener('click', saveAllSignatures);

  
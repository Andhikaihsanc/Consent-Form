document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click", function () {
    const tableRows = document.querySelectorAll("#groupEducation table tbody tr");

    tableRows.forEach(function (row) {
      const jenisInformasi = row.querySelector("td:first-child label").innerText;
      const isiInformasi = row.querySelector("textarea").value.trim();
      const dilakukanYa = row.querySelector("input[type='radio'][value='1']:checked");
      const dilakukanTidak = row.querySelector("input[type='radio'][value='0']:checked");

      if (isiInformasi !== "" || dilakukanYa || dilakukanTidak) {
        console.log("Jenis Informasi:", jenisInformasi);
        console.log("Isi Informasi:", isiInformasi);
        if (dilakukanYa !== null) {
          console.log("Dilakukan : Ya")
        } else if (dilakukanTidak !== null) {
          console.log("Dilakukan : Tidak")
        }
        console.log("-----------------------");
      }
    });
  });
});

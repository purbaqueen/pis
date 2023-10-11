const bulanStr = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli",
  "Agustus", "September", "Oktober", "November", "Desember"
]

function displayDateTime() {
  const tanggal = new Date()
  const hari = tanggal.getDate()
  const bulan = bulanStr[tanggal.getMonth()]
  const tahun = tanggal.getFullYear()

  const displayDate = document.getElementById('displayDate')
  const displayTime = document.getElementById('displayTime')

  displayDate.innerHTML = hari + " " + bulan + " " + tahun
  displayTime.innerHTML = tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds()
}

setInterval(() => {
  displayDateTime()
}, 1000)



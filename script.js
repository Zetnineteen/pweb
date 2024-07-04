document.addEventListener('DOMContentLoaded', function () {
    fetch('transaksi.php')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('transaksiTable').getElementsByTagName('tbody')[0];
            data.forEach((transaksi, index) => {
                const row = tableBody.insertRow();
                row.insertCell(0).textContent = index + 1;
                row.insertCell(1).textContent = transaksi.nama;
                row.insertCell(2).textContent = transaksi.jumlah;
                row.insertCell(3).textContent = transaksi.harga;
            });
        });
});

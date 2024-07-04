<?php
$transaksi_file = 'transaksi.txt';
$transaksi_data = [];

if (file_exists($transaksi_file)) {
    $lines = file($transaksi_file, FILE_IGNORE_NEW_LINES);
    foreach ($lines as $line) {
        list($nama, $jumlah, $harga) = explode('|', $line);
        $transaksi_data[] = [
            'nama' => $nama,
            'jumlah' => $jumlah,
            'harga' => $harga,
        ];
    }
}

header('Content-Type: application/json');
echo json_encode($transaksi_data);
?>

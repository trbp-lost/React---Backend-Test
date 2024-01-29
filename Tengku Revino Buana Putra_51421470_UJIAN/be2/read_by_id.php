<?php
header('Content-Type: application/json'); // Mengatur header untuk mengindikasikan bahwa respon adalah JSON

// Mengizinkan permintaan dari domain React yang berjalan di http://localhost:3000
header('Access-Control-Allow-Origin: http://localhost:3000');

// Mengizinkan metode HTTP yang diizinkan
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

// Mengizinkan header yang diizinkan
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Pastikan metode OPTIONS mendapatkan respons yang benar
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header('Content-Type: application/json'); // Mengatur header untuk mengindikasikan bahwa respon adalah JSON
require('connection.php');

$response = array(); // Inisialisasi array respons

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Mengambil ID dari parameter URL
    $url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $parts = explode('/', $url);
    $id = end($parts);

    // Pastikan ID adalah angka (melakukan validasi jika perlu)
    if (is_numeric($id)) {
        $sql = "SELECT * FROM kost_trbp WHERE id='$id'";
        $result = mysqli_query($koneksi, $sql);

        if (mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);
            $response['status'] = 'success';
            $response['data'] = $row;
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Data dengan ID ' . $id . ' tidak ditemukan.';
        }
    } else {
        $response['status'] = 'error';
        $response['message'] = 'ID tidak valid.';
    }
} else {
    $response['status'] = 'error';
    $response['message'] = 'Metode HTTP tidak valid.';
}

mysqli_close($koneksi);

echo json_encode($response); // Mengirimkan respon dalam format JSON
?>
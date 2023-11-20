# tutorial-mysql

## Membuat user baru
```
CREATE USER 'new_user'@'localhost' IDENTIFIED BY 'password';
```

## Menjalankan perintah mysql di terminal/cmd

Untuk menjalankan MySQL di CMD dengan username dan password, Anda dapat menggunakan perintah berikut:

```
mysql -u [username] -p[password]
```

Gantilah [username] dengan nama pengguna MySQL Anda, dan [password] dengan kata sandi untuk pengguna MySQL Anda. Anda juga dapat mengganti -p dengan --password= dan menambahkan kata sandi setelahnya, seperti ini:

```
mysql -u [username] --password=[password]
```

## Memberikan semua hak akses ke database
```sql
grant all privileges on *.* to 'nama_user'@'localhost' IDENTIFIED BY 'password';
```


- Perintah diatas hanya bisa dijalankan ketika kamu login sebagai user root dengan perintah :
```
mysql -u root --password=password
```
- Ganti nama_user menjadi user yang ada di database kamu

## Melihat privilages user
```sql
SHOW GRANTS FOR '<user>'@'<host>'
```

## Menggunakan database
```sql
USE database_name;  
```

## Gunakan lockForUpdate dan DB Transaction jika ingin membuat race condition di database
Dalam SQL, LOCK FOR UPDATE adalah sebuah klausa yang digunakan dalam perintah SELECT untuk mengunci baris atau data yang dipilih. Ketika sebuah transaksi menggunakan LOCK FOR UPDATE pada baris tertentu, transaksi lain tidak dapat mengakses atau memodifikasi baris tersebut sampai transaksi asli selesai (di-commit atau di-rollback).

Fungsi dari LOCK FOR UPDATE adalah untuk menerapkan mekanisme penguncian (locking) pada level baris, sehingga memastikan konsistensi data selama operasi transaksi. Dengan menggunakan LOCK FOR UPDATE, kita dapat menghindari situasi ketika beberapa transaksi bersama-sama memodifikasi data yang sama secara bersamaan, yang dapat menyebabkan ketidaksesuaian dan kesalahan.

Berikut adalah beberapa poin penting mengenai LOCK FOR UPDATE:

- Penguncian Baris: LOCK FOR UPDATE digunakan untuk mengunci baris yang dipilih dalam perintah SELECT. Ini berarti transaksi lain tidak dapat mengakses atau memodifikasi baris yang dikunci sampai transaksi saat ini selesai.

- Konsistensi Data: Dengan menggunakan LOCK FOR UPDATE, kita dapat memastikan konsistensi data dalam transaksi. Hal ini memungkinkan kita untuk melakukan operasi update, delete, atau operasi data lainnya pada baris tertentu tanpa khawatir tentang intervensi dari transaksi lain.

- Transaksi Eksklusif: LOCK FOR UPDATE memberikan hak eksklusif kepada transaksi saat ini untuk mengakses dan memodifikasi baris yang dikunci. Ini memastikan bahwa tidak ada transaksi lain yang dapat mengubah data yang sama secara bersamaan.

Namun, perlu diingat bahwa penggunaan LOCK FOR UPDATE harus dilakukan dengan hati-hati. Mengunci baris secara berlebihan atau dalam jangka waktu yang lama dapat menyebabkan deadlock atau menghambat kinerja aplikasi. Oleh karena itu, penting untuk merancang logika transaksi dengan cermat dan menghindari penguncian yang tidak perlu atau berlebihan.

- Atau bisa menggunakan optimistic locking :
```sql
UPDATE orders
SET order_name = 'Order Baru', version = version + 1
WHERE order_id = 1 AND version = 1;

```

## Referensi Channel Youtube 
https://www.youtube.com/@PojokCode/playlists

## Error code specific driver mysql
https://dev.mysql.com/doc/mysql-errors/8.0/en/server-error-reference.html

## Error handling
https://dev.mysql.com/doc/refman/8.2/en/error-handling.html

## Error code specific driver MariaDB (LENGKAP ! )
https://mariadb.com/kb/en/mariadb-error-codes/

## Advanced - Week of month
https://medium.com/analytics-vidhya/advanced-sql-query-how-to-get-week-number-of-the-month-from-date-in-sql-9ffb2f94132f

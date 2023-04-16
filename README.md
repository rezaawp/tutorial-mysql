# tutorial-mysql

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

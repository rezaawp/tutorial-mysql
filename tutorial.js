const actionRelasi = {
  restrict:
    "adalah jika kita menghapus atau merubah baris data dalam tabel A maka tidak akan diperbolehkan jika pada tabel B masih ditemukan relasi datanya. InnoDB dapat menolak perintah perubahan atau penghapusan tersebut.",
  cascade:
    "adalah jika kita menghapus atau merubah baris data dalam tabel A secara otomatis akan menghapus atau merubah baris yang sesuai dalam tabel B.",
  setNull:
    "adalah jika kita menghapus atau merubah baris data dalam tabel A secara otomatis akan merubah baris pada tabel B menjadi NULL pada kolom yang terelasi. Hal ini dapat dilakukan jika kolom foreign key tidak memiliki pengaturan NOT NULL.",
  noAction:
    "dalam standar SQL, NO ACTION berarti tidak merubah apapun pada tabel anak jika kita merubah data pada salah satu tabelnya.",
};

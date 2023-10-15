# pis
Papan Informasi Sekolah

- Page:
    - judul --> masing-masing profil jurusan
    - isi

- ProgramKeahlian:
    - nama
    - alias

- GuruKelompok:
    - nama --> Umum / Produktif

- Mapel:
    - nama 
    - alias
 
- Guru:
    - gurukelompok FK GuruKelompok
    - mapel FK Mapel
    - programkeahlian FK ProgramKeahlian
    - nip
    - nama
    - foto
  
- StafKelompok
    - nama ---> TU / Security / 


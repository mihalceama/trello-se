# Instalare

`npm install`
`cd frontend && npm install`
`pm2 start index.js --watch`
`cd frontend && npm run serve`

### BoardHolder

Aceasta componenta este responsabila cu vectorul de board-uri si randarea fiecarui board in parte.

### Board

Componenta responsabila cu afisarea datelor primite ca proprietate de la componenta parinte `BoardHolder`. Randeaza si modalul responsabil pentru editarea board-ului.

### EditModal

Foloseste numele si id-ul unui modal pentru a ii face update la nume.

### NewBoard

Componenta responsabil cu adaugarea unui nou board. La apasarea butonului afiseaza componenta `NewBoard`.

### Modal

Randat de `NewBoard`.

# Node.js

In `index.js` sunt tratate request-uri. Exista cate o ruta pentru operatiile de citire, scriere, updatare si stergere a board-urile.

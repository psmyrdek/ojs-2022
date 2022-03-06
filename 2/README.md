# Zadanie 2. - Typy poza kontrolą

## Opis zadania

Implementujesz grę w kamień-papier-nożyce. Po zaimplementowaniu logiki biznesowej nadszedł czas na zapisywanie stanu gry. Do realizacji zadań postanawiasz wykorzystać serializację, ponieważ dane w formacie string można łatwo przechowywać i odczytywać.

Niestety, po wykorzystaniu serializacji okazuje się, że gra przestaje działać, a w konsoli pojawia się `TypeError`. Dlaczego?

## Środowisko testowe

1. Uruchom plik `index.js` w środowisku Node - `node index.js`
2. Zmodyfikuj kod gry w taki sposób, aby zapisywanie i odczytywanie stanu gry działało pomiędzy instancjami tej samej klasy 
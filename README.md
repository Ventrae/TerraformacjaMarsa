# "Terraformacja Marsa"

[![Build Status](https://travis-ci.com/Ventrae/TerraformacjaMarsa.svg?branch=master)](https://travis-ci.com/Ventrae/TerraformacjaMarsa.svg?branch=master)

Mój projekt "Terraformacja Marsa", jest implementacją gry planszowej o tym samym tytule.


### Technologie użyte w projekcie:
 - Vue.js (with VueCLI, Vue-Router)
 - TypeScript
 - SCSS
 - Bootstrap 4
 - webpack

### Funkcjonalności:
 - możliwość prowadzenia rozgrywki w formacie hot seat
  **[Implemented]**
 - możliwość deklaracji ilości graczy i korporacji startowych (specjalizacji gracza)
  **[Not implemented]**
 - możliwość wykonywania akcji podstawowych w swojej turze (np. postawienine lasu)
  **[Implemented]**
 - możliwość zagrywania kart w swojej turze (akcje "customowe" np. +1 jednostka zieleni/turę & +1 poziom tlenu na planecie)
  **[Implemented]**
 - automatyczne naliczanie zasobów na końcu tury (zasób = zasób + przychód zasobu)
  **[Implemented]**
 - zliczanie punktów zwycięstwa każdego z graczy podczas rozgrywki
  **[Implemented]**
 - monitorowanie aktualnego stanu planety (poziom tlenu, temperatura, oceany, zalesienie itp.) i kończenie gry w przypadku osiągnięcia odpowiednich progów
  **[Implemented]**
 - system "nagród z gry"
  **[Not implemented] [Planned for further development]**
 - system "tytuów z gry"
  **[Not implemented] [Planned for further development]**
 - implementacja planszy
  **[Not implemented] [Planned for further development]**

### Gameplay:
- gracz posiada 6 zasobów: pieniądze, żelazlo, tytan, zieleń, energia, ciepło
- gracz posiada swój współczynnik terraformacji
- ...


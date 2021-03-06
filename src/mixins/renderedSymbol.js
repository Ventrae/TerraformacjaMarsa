export const renderedSymbol = {
    methods: {
        renderedSymbol(symbol, production) {

            let x;
            if(production !== true){
                production = false;
            }

            switch (symbol) {
                // Symbole z kart
                case "science":
                    x = "<i class=\"fab fa-react symbol-science\" title='Nauka'></i>";
                    break;
                case "earth":
                    x = "<i class=\"fas fa-globe-europe symbol-earth\" title='Ziemia'></i>";
                    break;
                case "steel":
                    x = "<i class=\"fas fa-cogs symbol-steel\" title='Żelazo'></i>";
                    break;
                case "star":
                    x = "<i class=\"far fa-star symbol-star\" title='Gwiazda'></i>";
                    break;
                case "leaf":
                    x = "<i class=\"fas fa-leaf symbol-leaf\" title='Liść'></i>";
                    break;
                case "animals":
                    x = "<i class=\"fas fa-paw symbol-animals\" title='Zwierzęta'></i>";
                    break;

                // Symbole wody, temperatury, tlenu, współczynnika terraformacji
                case "water":
                    x = "<i class=\"fas fa-tint symbol-water\" title='Nawodnienie Marsa'></i>";
                    break;
                case "temperature":
                    x = "<i class=\"fas fa-thermometer-half symbol-temperature\" title='Temperatura na Marsie'></i>";
                    break;
                case "oxygen":
                    x = "<i class=\"fas fa-globe symbol-oxygen\" title='Poziom tlenu na Marsie'></i>";
                    break;
                case "terraformation":
                    x = "<i class=\"far fa-sun symbol-terraformation\" title='Współczynnik terraformacji'></i>";
                    break;

                // Symbole zasobów gracza
                case "cash":
                    if(production === true){
                        x = "<b class='production-bold'>[ <i class=\"fas fa-dollar-sign symbol-cash\" title='Przychód gotówki'></i> ]</b>";
                    }
                    else {
                        x = "<i class=\"fas fa-dollar-sign symbol-cash\" title='Gotówka'></i>";
                    }
                    break;
                case "iron":
                    if(production === true){
                        x = "<b class='production-bold'>[ <i class=\"fas fa-tools symbol-iron\" title='Produkcja stali'></i> ]</b>";
                    }
                    else {
                        x = "<i class=\"fas fa-tools symbol-iron\" title='Stal'></i>";
                    }
                    break;
                case "titan":
                    if(production === true){
                        x = "<b class='production-bold'>[ <i class=\"far fa-star symbol-titan\" title='Produkcja tytanu'></i> ]</b>";
                    }
                    else {
                        x = "<i class=\"far fa-star symbol-titan\" title='Tytan'></i>";
                    }
                    break;
                case "green":
                    if(production === true){
                        x = "<b class='production-bold'>[ <i class='fas fa-leaf symbol-green' title='Produkcja zieleni'></i> ]</b>";
                    }
                    else {
                        x = "<i class='fas fa-leaf symbol-green' title='Zieleń'></i>";
                    }
                    break;
                case "energy":
                    if(production === true){
                        x = "<b class='production-bold'>[ <i class=\"fas fa-bolt symbol-energy\" title='Produkcja energii'></i> ]</b>";
                    }
                    else {
                        x = "<i class=\"fas fa-bolt symbol-energy\" title='Energia'></i>";
                    }
                    break;
                case "heat":
                    if(production === true) {
                        x = "<b class='production-bold'>[ <i class=\"fas fa-fire symbol-heat\" title='Produkcja ciepła'></i> ]</b>";
                    }
                    else {
                        x = "<i class=\"fas fa-fire symbol-heat\" title='Ciepło'></i>";
                    }
                    break;

                default:
                    x = `<i class="far fa-question-circle symbol-energy" :title="'Brakuje ikony - ' + symbol"></i>`;
                    break;
            }
            return x;
        }
    }
};

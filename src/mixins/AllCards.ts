import Card, {Symbols, Types} from "../models/card";
import Indicators from "../models/indicators";
import CardBehavior from "../models/cardBehavior";
import Resource from "../models/resources";

let EkspolracjaFobosa = new Card(
    'Eksploracja Fobosa', // card title
    Types.blue, // type of card
    12, // price
    Symbols.science, // symbol
    'Eksplorujecie Fobosa i zdobywacie 2 jednostki tytanu i 1 punkt zwycięztwa', // description
    new CardBehavior(
        new Resource(0,0,2,0,0,0), // player resourcecs raise
        new Resource(0,0,0,0,0,0), // player income raise
        0, // terraformation points
        1, // victory points
        0, // water raise
        0, // temperature raise
        0, // oxygen raise
    )
);

let DeszczMeteorow = new Card(
    'Deszcz meteorów', // card title
    Types.red, // type of card
    16, // price
    Symbols.steel, // symbol
    'Deszcz meteorów zasypuje twoje farmy, redukując Ci produkcję zieleni o 2 ale przynosi 8 jednostek stali. Temperatura rośnie o 4 stopnie', // description
    new CardBehavior(
        new Resource(0,8,0,0,0,0), // player resourcecs raise
        new Resource(0,0,0,-2,0,0), // player income raise
        0, // terraformation points
        0, // victory points
        0, // water raise
        2, // temperature raise
        0, // oxygen raise
    )
);

let KwateryMieszkalne = new Card(
    'Kwatery mieszkalne', // card title
    Types.yellow, // type of card
    14, // price
    Symbols.earth, // symbol
    'Wybudowaliśmy nowe kwatery mieszkalne - możemy więc sprowadzić więcej terraformatorów! Produkcja gotówki +2, +2 punkty zwycięstwa', // description
    new CardBehavior(
        new Resource(0,0,0,0,0,0), // player resourcecs raise
        new Resource(2,0,0,0,0,0), // player income raise
        0, // terraformation points
        2, // victory points
        0, // water raise
        0, // temperature raise
        0, // oxygen raise
    )
);

let Plantacja = new Card(
    'Plantacja', // card title
    Types.green, // type of card
    8, // price
    Symbols.leaf, // symbol
    'Nareszcie! Udało się wychodować rośliny na marsie! +2 produkcja zieleni, +1 współczynnik terraformacji', // description
    new CardBehavior(
        new Resource(0,0,0,0,0,0), // player resourcecs raise
        new Resource(0,0,0,2,0,0), // player income raise
        1, // terraformation points
        0, // victory points
        0, // water raise
        0, // temperature raise
        0, // oxygen raise
    )
);

let Farma = new Card(
    'Farma', // card title
    Types.green, // type of card
    12, // price
    Symbols.animals, // symbol
    'Udało nam się wystarczająco uterraformować marsa żeby otworzyć farmę ze zwierzętami, punkty zwycięstwa +2, produkcja zieleni +1', // description
    new CardBehavior(
        new Resource(0,0,0,0,0,0), // player resourcecs raise
        new Resource(0,0,0,1,0,0), // player income raise
        0, // terraformation points
        2, // victory points
        0, // water raise
        0, // temperature raise
        0, // oxygen raise
    ),
    new Indicators(0, 0, 6) // requirements
);

let ImportGazowCieplarnianych = new Card(
    'Import gazów cieplarnianych', // card title
    Types.red, // type of card
    24, // price
    Symbols.star, // symbol
    'Importujemy gazy cieplarniane, podnosząc swoją produkcję energii i ciepła o 2. Temperatura na marsie rośnie o 4 stopnie', // description
    new CardBehavior(
        new Resource(0,0,0,0,0,0), // player resourcecs raise
        new Resource(0,0,0,1,2,2), // player income raise
        0, // terraformation points
        0, // victory points
        0, // water raise
        2, // temperature raise
        0, // oxygen raise
    )
);

let ZasobyZZiemi = new Card(
    "Zasoby z Ziemi",
    Types.blue,
    4,
    Symbols.earth,
    "Zabieracie zasoby z Ziemi: 2 stali, 1 tytanu, 4 zieleni i 2 energii",
    new CardBehavior(
        new Resource(0,2,1,4,2,0), // player resourcecs raise
        new Resource(0,0,0,0,0,0), // player income raise
        0, // terraformation points
        0, // victory points
        0, // water raise
        0, // temperature raise
        0, // oxygen raise
    )
);

let SkafandryOchronne = new Card(
    "Skafandry ochronne",
    Types.yellow,
    2,
    Symbols.science,
    "+1 punkt terraformacji",
    new CardBehavior(
        new Resource(0,0,0,0,0,0), // player resourcecs raise
        new Resource(0,0,0,0,0,0), // player income raise
        1, // terraformation points
        0, // victory points
        0, // water raise
        0, // temperature raise
        0, // oxygen raise
    )
);

let SztuczneJezioro = new Card(
    "Sztuczne jezioro",
    Types.green,
    9,
    Symbols.earth,
    "+2 jednostki zieleni i stali, +1 poziom nawodnienia, +1 punkt terraformacji",
    new CardBehavior(
        new Resource(0,2,0,2,0,0), // player resourcecs raise
        new Resource(0,0,0,0,0,0), // player income raise
        1, // terraformation points
        0, // victory points
        1, // water raise
        0, // temperature raise
        0, // oxygen raise
    )
);

let WodyGlebinowe = new Card(
    "Wody głębinowe",
    Types.red,
    16,
    Symbols.steel,
    "+1 poziom nawodnienia, +2 stopnie na Marsie, +1 punkty zwycięztwa",
    new CardBehavior(
        new Resource(0,0,0,0,0,0), // player resourcecs raise
        new Resource(0,0,0,0,0,0), // player income raise
        0, // terraformation points
        1, // victory points
        1, // water raise
        1, // temperature raise
        0, // oxygen raise
    )
);
let MiastoPodKopula = new Card(
    "Miasto pod kopułą",
    Types.blue,
    12,
    Symbols.star,
    "Miasto pod kopułą zapewnia bezpieczne miejsce do rozwoju - +2 produkcja pieniędzy, +1 produkcja energii, +1 punkt zwycięstwa",
    new CardBehavior(
        new Resource(0,0,0,0,0,0), // player resourcecs raise
        new Resource(2,0,0,0,1,0), // player income raise
        0, // terraformation points
        1, // victory points
        0, // water raise
        0, // temperature raise
        0, // oxygen raise
    )
);

let UniwersytetMarsjanski = new Card(
    "Uniwersytet Marsjański",
    Types.blue,
    18,
    Symbols.science,
    "Uniwersytet Marsjański pozwala na prowadzenie badań naukowych na powierzchni planet. +3 punkty zwycięstwa",
    new CardBehavior(
        new Resource(0,0,0,0,0,0), // player resourcecs raise
        new Resource(0,0,0,0,0,0), // player income raise
        0, // terraformation points
        3, // victory points
        0, // water raise
        0, // temperature raise
        0, // oxygen raise
    ),
    new Indicators(0,2,6)
);

export const AllCards = {
    data() {
        return {
            AllCards: [
                EkspolracjaFobosa,
                DeszczMeteorow,
                KwateryMieszkalne,
                Plantacja,
                Farma,
                ImportGazowCieplarnianych,
                ZasobyZZiemi,
                SkafandryOchronne,
                SztuczneJezioro,
                WodyGlebinowe,
                MiastoPodKopula,
                UniwersytetMarsjanski
            ]
        }
    }
};

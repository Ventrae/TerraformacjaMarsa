<template>
    <div class="page">

        <div class="container py-4">

            <article>
                <h3>Rozgrywka w Terraformację Marsa</h3>
                <p>
                    Celem rozgrywki jest uterraformowanie Marsa - czyli podniesieine poziomu tlenu, temperatury i nawodnienia do progu pozwalającego ludziom żyć.
                    <br/><br/>
                    Aplikacja internetowa ma umożliwić zagorzałym fanom rozgrywkę w każdym miejscu na Ziemi lub Marsie.<br/>
                    Gra jest we wstępnej fazie - Alfa - nie posiada zaimplementowanej planszy.
                    <br/><br/>
                    Na początku gry gracze wybierają korporacje startową - jest to specjalizacja gracza.
                    Gracz wybiera swoją taktykę,
                    jeśli chce rozwijać lasy i zieleń - wybiera Ecoline,
                    jeśli chce być magnatem cieplnym - wybiera Thorgate.
                    <br/><br/>
                    Rozgrywka jest przeznaczona dla od dwóch do czterech graczy.<br/>
                    W każdym momencie rozgrywki możesz wrócić do instrukcji, sprawdzić zasady, i powrócić do rozgrywki.
                </p>
            </article>

            <article>
                <h3>Elementy interfejsu</h3>
                <p>
                    Na górze interfejsu znajduje się pasek terraformacji - widzoczni są na nim wszyscy gracze i ich aktualne punkty terraformacji.
                    Obecny gracz jest podświetlony na pomarańczowo.
                    <br/>
                    Poniżej graczy na pasku terraformacji znajduje się aktualny stan planety - ilość oceanów, temperatura na powierchni oraz procentowy poziom tlenu.
                    <br/>
                    Poniżej paska terraformacji znajduje się interfejs gracza.
                    Na samej górze widnieje - jego imię, korporacja, ilość punktów terraformacji i zwycięztwa, oraz przycisk spasuj.
                    <br/>
                    Niżej znajduja się zgromadzone symbole z kart zagranych przez gracza.
                    <br/>
                    Na samym dole znajdują się karty na ręce gotowe o zagrania.
                    <br/><br/>
                    Każdy symbol w grze posiada swój tooltip (tekst z objaśnieniem widoczny po najechaniu myszką)
                </p>
            </article>

            <article>
                <h3>Format turowy</h3>
                <p>
                    Rozgrywka prowadzona jest w formacie hot-seat.
                    Gracze na zmianę przeprowadzają swoje kolejki.
                    Przy inicjowaniu rozgrywki gracz może opcjonalnie podać hasło dostępu do swojej kolejki.
                    <br/>
                    Na początku kolejki gracz dobiera od zera do czterech kart na swoją rękę.
                    Każda z wybranych kart kosztuje gracza 3 jednostki gotówki.
                    <br/>
                    Podczas kolejki gracz może:
                </p>
                <ul>
                    <li>Zagrać kartę (jeśli spełnia wymagania i posiada gotówkę)</li>
                    <li>Wykorzystać projekt standardowy</li>
                    <li>Spasować i zakończyć turę przedwcześnie</li>
                </ul>
                <b>
                    Gracz może wykonać do dwóch akcji i musi przekazać kolejkę dalej.
                </b>
            </article>

            <article>
                <h3>Akcje gracza:</h3>
                <section>
                    <h5>Karty akcji:</h5>
                    <p>
                        Każda karta ma swoje działanie: dodaje lub odejmuje zasoby,
                        modyfikuje przychód zasobów, modyfikuje stan planety lub dodaje punkty zwycięstwa.<br/>
                        Efekt karty opisany jest w dolnej części karty.
                        <br/>
                        Zagranie karty kosztuje - koszt podany jest w złotym polu w górnej części karty (po lewej).
                        <br/>
                        Żeby zagrać kartę muszą być spełnione wymagania na planecie, np. minimalna temperatura.<br/>
                        Wymagania podane są w szarym polu po środku górnej części karty - jeśli ich nie ma - karta nie ma wymagań.
                        <br/>
                        Za każdy podniesiony poziom tlenu (1%), temperatury (2&#x2103;) lub nawodnienia (1 ocean) gracz zdobywa także punkt terraformacji.
                    </p>
                </section>
                <section>
                    <h5>Operacje standardowe:</h5>
                    <p>
                        Gracz w każdej kolejce ma do dyspozycji 6 operacji standardowych które może wykonać niezależnie
                        od posiadanych kart lub wymagań na planecie.<br/>
                        Operacje standardowe to:
                    </p>
                    <ul>
                        <li>
                            <div><b>Założenie miasta</b> - koszt: 25 <span v-html="renderedSymbol('cash')"/></div>
                            <div>Zakładasz miasto i powiększasz swoją produkcję <span v-html="renderedSymbol('cash')"/> o 1.</div>
                        </li>
                        <li>
                            <div><b>Posadzenie lasu</b> - koszt: 8 <span v-html="renderedSymbol('leaf')"/></div>
                            <div>Sadzisz las i podnosisz poziom <span v-html="renderedSymbol('oxygen')"/> o 1%.</div>
                        </li>
                        <li>
                            <div><b>Wybudowanie elektrowni</b> - koszt: 11 <span v-html="renderedSymbol('cash')"/></div>
                            <div>Budujesz elektrownię i powiększasz swoją produkcję <span v-html="renderedSymbol('energy')"/> o 1.</div>
                        </li>
                        <li>
                            <div><b>Podniesienie temperatury</b> - koszt: 8 <span v-html="renderedSymbol('heat')"/></div>
                            <div>Wykorzystujesz jednostki ciepła aby podnieść poziom <span v-html="renderedSymbol('temperature')"/> o 2&#x2103;.</div>
                        </li>
                        <li>
                            <div><b>Asteroida</b> - koszt: 14 <span v-html="renderedSymbol('cash')"/></div>
                            <div>Podnosisz <span v-html="renderedSymbol('temperature')"/> o 2&#x2103;.</div>
                        </li>
                        <li>
                            <div><b>Nawodnienie Marsa</b> - koszt: 18<span v-html="renderedSymbol('cash')"/></div>
                            <div>Stawiasz ocean i podnosisz <span v-html="renderedSymbol('water')"/> o 1.</div>
                        </li>
                    </ul>
                </section>
                <section>
                    <p>Jeśli nie możesz lub nie chcesz - możesz spasować klikając przycisk w prawej części interfejsu gracza.</p>
                </section>
            </article>

            <article>
                <h3>Koniec gry</h3>
                <p>
                    Gra kończy się w momencie osiągnięcia stanu terraformacji planety pozwalającego życie - 8 oceanów, 16 stopni celsjusza i 14% tlenu.
                    Zwycięzcą zostaje gracz który posiada najwięcej punktów zwycięstwa.
                    <br/><br/>
                    <b>Punkty zwycięstwa = współczynnik terraformacji + punkty zwycięstwa.</b>
                </p>
            </article>

        </div>

    </div>
</template>

<script>
    import {renderedSymbol} from "../mixins/renderedSymbol";

    export default {
        name: "Instrukcja",
        mixins: [ renderedSymbol ]
    }
</script>

<style scoped>
    .page {
        margin-top: 64px;
    }
    article {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #dedede;
    }
    section {
        margin-top: 10px;
    }
</style>

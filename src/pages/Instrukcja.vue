<template>
    <div class="page">

        <div class="container py-4">

            <article>
                <h3>Rozgrywka w Terraformację Marsa</h3>
                <p>adawd</p>
            </article>

            <article>
                <h3>Format turowy</h3>
                <p>
                    Rozgrywka prowadzona jest w formacie hot-seat.
                    Gracze na zmianę przeprowadzają swoje kolejki.
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
                <p>
                    Gracz może wykonać do dwóch akcji i musi przekazać kolejkę dalej.
                </p>
            </article>

            <article>
                <h3>Akcje gracza:</h3>
                <section>
                    <h5>Karty akcji:</h5>
                    <p>Każda karta ma swoje działanie, </p>
                </section>
            </article>

            <article>
                <h3>Koniec gry</h3>
                <p>
                    Gra kończy się w momencie osiągnięcia stanu terraformacji planety pozwalającego życie - 8 oceanów, 16 stopni celsjusza i 14% tlenu.
                    Zwycięzcą zostaje gracz który posiada najwięcej punktów zwycięstwa.
                    <br/>
                    <b>Punkty zwycięstwa = współczynnik terraformacji + punkty zwycięstwa.</b>
                </p>
            </article>

        </div>

    </div>
</template>

<script>
    export default {
        name: "Instrukcja"
    }
</script>

<style scoped>
    .page {
        margin-top: 64px;
    }
</style>

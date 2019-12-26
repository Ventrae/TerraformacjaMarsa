export const corporationInfoMixin = {
    methods: {
        corporationInfo(x){
            if(x === 'Credicor')
                return {
                        slogan: 'Bank godny zaufania',
                        info: 'Rozpoczynasz grę z 60 jednostkami gotówki oraz produkcją gotówki a poziomie 2'
                };
            else if (x === 'Mining Guild') {
                return {
                    slogan: 'Wiertła to nasza specjalność',
                    info: 'Rozpoczynasz grę z 30 jednostkami gotówki, 10 jednostkami stali, 5 jednostkami tytanu oraz produkcją stali na poziomie 2.'
                };
            }
            else if (x === 'Inventrix') {
                return {
                    slogan: 'Patrzymy za horyzont',
                    info: 'Rozpoczynasz grę z 50 jednostkami gotówki oraz kartą "Zasoby z Ziemi".'
                };
            }
            else if (x === 'Ecoline') {
                return {
                    slogan: 'Zielone wygrywa',
                    info: 'Rozpoczynasz grę z 40 jednostkami gotówki, 6 jednostkami zieleni oraz produkcją zieleni na poziomie 2'
                };
            }
            else if (x === 'Thorgate') {
                return {
                    slogan: 'Twój dostawca prądu',
                    info: 'Rozpoczynasz grę z 44 jednostkami gotówki oraz produkcją energii na poziomie 3.'
                };
            }
            else {
                return {
                    slogan: 'Nieznana korporacja',
                    info: 'Podaj inną korporację - obecna jest nieprawidłowa'
                }
            }
        }
    }
};

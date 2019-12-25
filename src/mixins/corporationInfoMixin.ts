export const corporationInfoMixin = {
    methods: {
        corporationInfo(x){
            if(x === 'Credicor')
                return {
                        slogan: 'Bank godny zaufania',
                        info: 'TO bank z pieniedmzi XD.'
                };
            else if (x === 'Thorgate') {
                return {
                    slogan: 'Twój dostawca prądu',
                    info: 'Startujesz z 48 jednostkami gotówki i oraz produkcją energii na poziomie 2.'
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

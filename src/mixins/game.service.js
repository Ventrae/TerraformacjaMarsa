export const gamesService = {
    data(){
        return {
            testtxt: 'abcdeee'

        }
    },
    watch: {
        testtxt(){
            console.log(this.testtxt);
        }
    }
};

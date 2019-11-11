<template>
    <form class="col-12 col-md-6 mx-auto alert login-card">
        <h2>Zaloguj się - <b>{{ this.name }}</b></h2>
        <h5 class="text-danger" v-if="this.error">Nieprawidłowe hasło!</h5>
        <input type="text" placeholder="Wpisz hasło" v-model="password" v-if="this.cpassword !== null"/>
        <button @click="checklogin()">Zaloguj</button>
    </form>
</template>

<script>
    export default {
        name: "login",
        props: {
            cpassword: {
                type: String | null,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                password: "",
                error: false
            }
        },
        methods: {
            checklogin() {
                if (this.cpassword === null) {
                    this.$emit('logged', true);
                } else {
                    if (this.cpassword === this.password) {
                        this.$emit('logged', true);
                    } else this.error = true;
                }
            }
        }
    }
</script>

<style scoped>

</style>

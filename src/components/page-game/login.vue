<template>
    <form class="col-11 col-md-6 mx-auto alert login-card" @submit.prevent="checklogin()">
        <h2>Zaloguj się - <b :style="color">{{ this.name }}</b></h2>
        <h5 class="text-danger" v-if="this.error">Nieprawidłowe hasło!</h5>
        <input type="text" placeholder="Wpisz hasło" v-model="password" v-if="this.cpassword"/>
        <button type="submit">Zaloguj</button>
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
            },
            color: {
                type: Object
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
                }
                else {
                    if (this.cpassword === this.password) {
                        this.$emit('logged', true);
                    }
                    else {
                        this.error = true;
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>

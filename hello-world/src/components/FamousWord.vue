<template>
    <div>
        <h1>오늘의 명언?</h1>
        <button @click="getApi">새로운 명언</button>

        <blockquote v-if="word">{{ word }}</blockquote>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // word: ''
            fetchResponse: {}

        }
    },
    computed: {
        word() {
            return this.fetchResponse && this.fetchResponse.slip
                ? this.fetchResponse.slip.advice 
                : null
        }
    },
    methods: {
        async getApi() {
            const url = "https://api.adviceslip.com/advice"
            const response = await fetch(url);
            const json = await response.json();
            this.fetchResponse = json;
        }
    },
    mounted() {
        // 이 페이지가 최초 1회 로드되었을 때(F5포함)
        this.getApi();
    }
}
</script>

<style>

</style>
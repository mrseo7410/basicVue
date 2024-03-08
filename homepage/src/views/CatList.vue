<template>
    <div>
        <h1>귀여운 고양이 목록</h1>
        <ul>
            <li v-for="cat in catlist" :key="cat.id">
                <img :src="cat.url" alt="" width="400" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            catlist: []
        }
    },
    methods: {
        async getApi() {
            const url = "https://api.thecatapi.com/v1/images/search?limit=10";
            const response = await fetch(url);
            this.catlist = await response.json();
        }
    },
    mounted() {
        this.getApi();
    }
}
</script>

<style>

</style>
<template>
    <h1>자기소개</h1>
    <h2>Intro Myself</h2>
    <p>이름 : {{name}}</p>
    <p>나이 : {{age}}</p>
    <p>취미 : {{hobby}}</p>
</template>

<script>
    export default {
        data() {
            return {
                name: '서정원',
                age: 99,
                hobby: '유튜브'
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../styles/style';

</style>
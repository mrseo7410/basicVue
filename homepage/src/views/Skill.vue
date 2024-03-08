<template>
    <div>
        <h2>skill {{ $route.URLSearchParams.id }} 입니다.</h2>
        <p>웹 개발자 입니다.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
</script>

<style>

</style>
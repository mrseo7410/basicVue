<template>
    <h1>{{title}}</h1>
    <input type="text" ref="name"/>
    <button @click="handleClick">클릭하세요</button>
    <hr/>
    <input type="text" v-model="msg" placeholder="전할 메시지..."/>
    <button @click="handleInput">입력</button>
    <p>입력한 메시지: {{ inputMessage }} </p>
</template>
<script>
export default {
    data() {
        return {
            title: '당신의 이름은',
            msg: '',
            inputMessage: '',
        }
    },
    methods: {
        handleClick() {
            alert(`제 이름은 ${this.$refs.name.value}입니다.`);
            this.$refs.name.focus();
        },
        handleInput() {
            this.inputMessage = this.msg + "가 입력되었습니다."
        }
    }
}
</script>
<style lang="scss">

</style>
<template>
    <div>
        <input type="text" placeholder="이름을 입력하세요" v-model="name">
        <hr/>
        <p>현직: {{ presidentName }}</p>
        <p>전직: {{ beforePresidentName }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            presidentName: '',
            beforePresidentName: ''
        }
    },
    //감시자 정의
    watch: {
        'name': {
            handler: function(newVal, oldVal) {
                this.presidentName = this.name + " 대통령";
                this.beforePresidentName = oldVal + " 대통령";
            },
            immediate: true
        }   
    }
}
</script>

<style>

</style>
<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="laptop_type" placeholder="노트북 모델 입력하시오.">
        <span v-if="laptopError" class="error">{{ laptopError }}</span>
        <br/>
        <button type="submit">검색</button>
    </form>

    <div>
        {{ result }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '',
            inputMessage: '',
            laptop_type:'',
            result: '',
            laptopError:''
        }
    },
    methods: {
        handleSubmit() {
            this.laptopError = 
                this.laptopError.length > 1 ? '' :
                                    "2자 이상 입력바랍니다." ; 

            if(!this.laptopError){
                const list = ["맥북", "그램", "갤북"];

                if(list.includes(this.laptop_type)){
                    this.result = "스벅 입장 가능!"
                }else{
                    this.result = "스벅 입장 불가능!"
                }
            }
            
        },
        chkEnter() {
            if(this.msg === "맥북" ||
                this.msg === "그램" ||
                this.msg === "갤북"){
                    this.inputMessage = "스벅 입장가능!"
            }else{
                this.inputMessage = "스벅 입장 불가능!"
            }
        },
        handleSearch(){
            const list = ["맥북", "그램", "갤북"];

            if(list.includes(this.msg)){
                this.result = "스벅 입장 가능!"
            }else{
                this.result = "스벅 입장 불가능!"
            }

        }
    }
}
</script>

<style scoped>
    .error {
        color: #ff0062;
        font-size: 0.8em;
        font-weight: bold;
    }

</style>
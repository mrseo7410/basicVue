const app = Vue.createApp({
    //data
    data() {
        return {
           name: "hello world"
        }
    },
    //function
    methods: {

    },
    computed: {
        callName() {
            return this.name + "님";
        },
        upperCase() {
            return this.name.toUpperCase();
        }
    }
    //template
    // template: '<h2>박찬호</h2>'
});

app.mount("#app");
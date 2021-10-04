Vue.createApp({

    data() {

        return {

            // add here
            word: "",
            words: [],
            message: null,
            showWords: false
        }

    },

    methods: {

        Show(word){
            this.words = []
            this.words.push(word)
            this.words.push(word.toLowerCase())
            this.words.push(word.toUpperCase())
            this.showWords = true
            return this.message = this.words

        },
        
        
    }

}).mount("#app")
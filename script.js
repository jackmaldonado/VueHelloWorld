new Vue({
    el: '#parent',
    data: {
        msg: ""
    },
    methods: {
        display: function(){
            this.msg = this.msg + "Hello World! "
        }
    }
})


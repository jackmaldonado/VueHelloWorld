new Vue({
    el: '#parent',
    data: {
        msg: ""
    },
    methods: {
        display: function(){
            this.msg = alert(this.msg + "Hello World! ")
        },
            write: function(){
                this.msg = this.msg + "Hello World! "
            }
    }
})


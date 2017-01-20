<template>
    <div>11111111</div>
</template>

<script>
    import Api from '../api/dataApi'
    export default {
        data () {
            return {
                msg: 'Hello Vue!',
                tableData: [],
                loading: false
            }
        },
        mounted: function () {
            let self = this;
            let apiInstance = new Api('', self);
    //            apiInstance.getRuleList({
    //                rulesTemplateId: 1
    //            }).then(function (res) {
    //                console.log(1111);
    //                console.log(self);
    //            }, function (error) {
    //                console.log(22222);
    //                console.log(self);
    //            });
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                headers: {
                },
                emulateJSON: true
            }).then(function(response) {
                // 这里是处理正确的回调
                this.articles = response.data.subjects
                // this.articles = response.data["subjects"] 也可以
            }, function(response) {
                // 这里是处理错误的回调
                console.log(response)
            });
        }
    }
</script>
<template>
    <div>
        <div class="nav">
            <ul>
                <li class="l-btn"  onclick="window.history.go(-1)"> </li>
            
            </ul>
        </div>
        <div class="content">
            <div class="cont">
                <h3>{{arrlist.title}}</h3>
                <h3></h3>
                 <div class="text-box" v-html="arrlist.content"></div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return {
            arrlist:{}
        }
    },
    mounted(){
        let id=this.$route.params.id-1;
        this.getData(id)
    },
    methods:{
        getData:function(id){
            this.$http.get('https://zehongfan.github.io/work-data/first-vue-project-data/data/article.txt')
            .then((res) => {
                this.arrlist=res.data[id];
            })
            .catch((err) => {
                console.log(err)
            });
        }
    }
}
</script>

<style scoped>
html,body{ overflow-x: hidden; }
.nav{width:100%; position:fixed;top:0;left:0; background:#fff; border-bottom:1px solid #e8eaec; z-index:99;}
.nav ul{width:6.4rem;height:0.45rem; padding-top:0.15rem; margin:0 auto;}
.nav ul li{width:0.29rem;height:0.31rem; background:url(../assets/img/history.png) no-repeat 0 0; background-size:100%; margin:0 0 0 0.38rem;}

.content{max-width:6.4rem; margin:0 auto; margin-top:0.6rem; background:#f2f4f5; padding-bottom:0.85rem;}
.content .header{ padding:0.39rem 0.28rem 0.15rem 0.28rem; height:auto; background: none}
.content h3{ text-align:center; font-size: 0.3rem;}
.content p{ float:left; margin-top:0.18rem; font-size:0.3rem;}

.content .cont{ padding:0 0.38rem; color:#494d4d;}
.cont h3{ font-size:0.4rem; line-height:0.6rem; padding-bottom:0.25rem; border-bottom:1px solid #494d4d;}

</style>


<template>
    <div class="content">
        <Slider></Slider>
        <div class="newsList">     
            <ul>
                <li v-for="item in items">
                    <router-link :to="'/article/'+item.id">
                    <h1>{{item.id}}.{{item.title}}</h1>
                    <p>{{item.detail}}</p>
                    </router-link>
                </li>
            </ul>
            
        </div>
    </div>
</template>

<script>
import Slider from './Slider'
export default {
    data(){
        return {
            items:[]
        }
    },
    components:{
        Slider
    },
    mounted(){
        this.getData()
    },
    methods:{
        getData:function(){
            this.$http.get('https://zehongfan.github.io/work-data/first-vue-project-data/data/index.txt')
            .then((res)=>{
                this.items=res.data
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }

}
</script>


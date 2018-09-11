<template>
	<div  class="newsList mt30">
		<ul>
			<li v-for="item in items">
				<a href="javascript;">
					<h2>{{item.id}}.{{item.title}}</h2>
					<p>{{item.detail}}</p>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				items:[]
			}
		},
		mounted(){
			this.getData()
		},
		methods:{
			getData(){
				this.$http.get('https://zehongfan.github.io/work-data/first-vue-project-data/data/follow.txt')
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
<style scoped>
	.mt30{
		position: relative;
		margin-top:0.8rem;
		
	}
	.mt30 h2{
		text-align: center;
	}
	.mt30 p{
		text-align: center;
	}
</style>
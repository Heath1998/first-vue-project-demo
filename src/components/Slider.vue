<template>
	<div class="banner">
		<ul class="clearfix">
			<li>
				<img src="../assets/images/img_1.jpg" alt="">
				<div class="text-box">
					<h2>这是图片一</h2>
					<p> / 文1 </p>
				</div>
			</li>
			<li>
				<img src="../assets/images/img_1.jpg" alt="">
				<div class="text-box">
					<h2>这是图片二</h2>
					<p> / 文2 </p>
				</div>
			</li>
			<li>
				<img src="../assets/images/img_1.jpg" alt="">
				<div class="text-box">
					<h2>这是图片三</h2>
					<p>/ 文3 </p>
				</div>
			</li>
		</ul>
		<ol>
			<li class="active"></li>
			<li></li>
			<li></li>
		</ol>
	</div>
</template>
<script >
	import Swipe from '../assets/js/swipe.js'
	export default{
		mounted(){
			this.fnSlider();
		},
		methods:{
			fnSlider(){
				$(function(){
						var mySwipe=new Swipe($('.banner')[0],{
							auto:2000,
							continuous:true,
							stopPropation:true,
							callback:function (index,element){
								$('.banner ol li').removeClass('active');
								$('.banner ol li').eq(index).addClass('active');
						}
					});
				});
			}
		}
	}	
</script>
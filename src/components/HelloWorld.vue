<template>
	<div class="hello">
		<!-- 
		 先说一下vuex到底是什么？
		 vuex 是一个专门为vue.js应用程序开发的状态管理模式。
		 这个状态我们可以理解为在data中的属性，需要共享给其他组件使用的部分。
		 也就是说，是我们需要共享的data，使用vuex进行统一集中式的管理。
		 vuex中，有默认的五种基本的对象：
		 state：存储状态（变量）
		 getters：对数据获取之前的再次编译，可以理解为state的计算属性。我们在组件中使用 $sotre.getters.fun()
		 mutations：修改状态，并且是同步的。在组件中使用$store.commit('',params)。这个和我们组件中的自定义事件类似。
		 actions：异步操作。在组件中使用是$store.dispath('')
		 modules：store的子模块，为了开发大型项目，方便状态管理而使用的。这里我们就不解释了，用起来和上面的一样。
		 -->
		 
		 
		<!-- 
		Vue组件如果调用某个VueX的方法过程中需要向后端请求时或者说出现异步操作时，需要dispatch VueX中actions的方法，以保证数据的同步。可以说，action的存在就是为了让mutations中的方法能在异步操作中起作用。
		 
		如果没有异步操作，那么我们就可以直接在组件内提交状态中的Mutations中自己编写的方法来达成对state成员的操作。注意，1.3.3节中有提到，不建议在组件中直接对state中的成员进行操作，这是因为直接修改(例如：this.$store.state.name = 'hello')的话不能被VueDevtools所监控到。
		 
		最后被修改后的state成员会被渲染到组件的原位置当中去。
		-->
		
		
		<h2>{{$store.state.count}}</h2>

		<div>
			<button @click="handleAddClick(10)">增加</button>
			<button @click="handleReduceClick(10)">减少</button>
		</div>

		<div>异步操作</div>
		<div>
			<button @click="handleActionsAdd(10)">异步增加</button>
			<button @click="handleActionsReduce(10)">异步减少</button>
		</div>

		<h4>啊啊啊啊{{count}}</h4>
		
		
		<div>less</div>
		
		<div class="box"></div>

	</div>
</template>

<script>
	import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
	export default {
		name: 'HelloWorld',
		data() {
			return {}
		},
		computed: {
			// ...mapGetters(['count'])
			count() {
				return this.$store.getters.getterCount
			}
		},
		methods: {
			// 同步操作数据
			handleAddClick(n) {
				this.$store.commit('mutationsAddCount', n);
			},
			handleReduceClick(n) {
				this.$store.commit('mutationsReduceCount', n);
			},
			// action 异步操作数据
			handleActionsAdd(n) {
				this.$store.dispatch('actionsAddCount', n)
			},
			handleActionsReduce(n) {
				this.$store.dispatch('actionsReduceCount', n)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
	
<style lang="less">
	
	
	@color:red;
	@k:100px;
	
	
	.box{
	width:@k;
	height:@k;
	background: @color;
	}
	
	
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>

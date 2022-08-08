import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0
}

/**
 * mutations 里面放置的是我们操作state对象属性的方法
 */
const mutations = {
    mutationsAddCount(state, n = 0) {
        return (state.count += n)
    },
    mutationsReduceCount(state, n = 0) {
        return (state.count -= n)
    }
}

/*

创建actions对象，并且使用
这里我在两个方法中使用了两个不同的参数，一个是context，它是一个和store对象具有相同对象属性的参数。在第二个函数中，我是直接使用了这个对象的commit的方法。
*/

const actions = {
    actionsAddCount(context, n = 0) {
        return context.commit('mutationsAddCount', n)
    },
    actionsReduceCount({ commit }, n = 0) {
        return commit('mutationsReduceCount', n)
    }
}


// actions: {
//     increment(context){
//       context.commit('increment')
//     }
// }
//****************es5参数解构*************
//actions: {
//   increment({commit}){
//     commit('increment')
//   }
// }
	


//getters 使用getters来获取我们的state，因为它算是state的一个计算属性
const getters = {
    getterCount(state) {
        return (state.count)
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})



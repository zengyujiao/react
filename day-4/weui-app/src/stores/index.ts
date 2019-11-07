import { createStore } from 'redux'
interface stateType{
     // 如果在这里定义了类型，那么必须传入什么类型进来,在这里规定了类型，是比较严谨的一种写法
    name: string
    age: Number | boolean
    searchText: string
}
interface actionType{
    type: string
    searchText: string
}
const store:object =  createStore((state: stateType = {
    name: 'react',
    age: 18,
    searchText:''
}, action: actionType) => {
        switch (action.type) {
            case 'INCRMENT':
                // 在stateType里面定义了什么类型，那么这里只能是定义好的类型，如果用其它类型，那么会报错
                return {
                    ...state,
                    name:'redux'
                }
            case 'SEARCHTEXT': 
                return {
                    ...state,
                    searchText:action.searchText
                }
            default:
                return state
        }
})
export default store
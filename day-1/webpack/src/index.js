import React from 'react'
import ReactDOM from 'react-dom'

// React.createElement('div',null,'helloworld')

// 下面这一种叫做JSX写法，需要用专门的babel处理器去处理
const data = {
    name: 'react',
    getAge(){
        return 18
    }
}

// View 可以只有View层
const jsx = <div>
    {/* 直接 */}
    <p>{data.name}</p>
    {/* 把对象以属性的方式放在标签身上 */}
    <p name={data.name}>属性</p>

    {/*  */}
    <p>{data.getAge()}</p>
    <p>{(() => {
        // 修改对象中name的值，在返回
        let name = 'react-dom'
        return name
    })()}</p>
</div>
console.log(jsx)
ReactDOM.render(
    jsx,
    document.querySelector("#app")
)
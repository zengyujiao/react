import React from 'react'
// 函数组件,这个 news 是从外界传进来的一个数组
// 用大括号包围着它，是解出它，因为不知道那边会传什么过来
// 当输入框输入的值跟数组中的值相匹配时，就执行filter方法，或者原封不动的返回
let arr = []
export default ({ news, searchText }) => {
    if (searchText) {
        // filter是根据输入框输入的值来决定出现哪一个数据，map是全部一起出现
        arr = news.filter((item, index) => {
            if (item.title.indexOf(searchText) > -1) {
                return (
                    <a key={index} className="weui-media-box weui-media-box_appmsg">
                        <div className="weui-media-box__hd">
                            <img className="weui-media-box__thumb" src={item.author.avatar_url} alt="" />
                        </div>
                        <div className="weui-media-box__bd">
                            <h4 className="weui-media-box__title">{item.title}</h4>
                            <p className="weui-media-box__desc">{item.author.loginname}</p>
                        </div>
                    </a>
                )
            }
        })
    } else {
        arr = news
    }
    return arr.map((item,index) => {
        return (
            <a key={index} className="weui-media-box weui-media-box_appmsg">
                <div className="weui-media-box__hd">
                    <img className="weui-media-box__thumb" src={item.author.avatar_url} alt="" />
                </div>
                <div className="weui-media-box__bd">
                    <h4 className="weui-media-box__title">{item.title}</h4>
                    <p className="weui-media-box__desc">{item.author.loginname}</p>
                </div>
            </a>
        )
    })
}
// 不这个循环遍历的数据封装成方法，当成组件使用
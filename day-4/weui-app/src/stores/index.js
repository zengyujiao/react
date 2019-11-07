"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var redux_1 = require("redux");
var store = redux_1.createStore(function (state, action) {
    if (state === void 0) { state = {
        name: 'react',
        age: 18,
        searchText: ''
    }; }
    switch (action.type) {
        case 'INCRMENT':
            // 在stateType里面定义了什么类型，那么这里只能是定义好的类型，如果用其它类型，那么会报错
            return __assign(__assign({}, state), { name: 'redux' });
        case 'SEARCHTEXT':
            return __assign(__assign({}, state), { searchText: action.searchText });
        default:
            return state;
    }
});
exports["default"] = store;

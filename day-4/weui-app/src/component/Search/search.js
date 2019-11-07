import { Component as WeElement, createElement as h } from "react";
import store from "../../stores";

class Search extends WeElement {
  render() {
    return h(
      "div",
      {
        className: "page__bd"
      },
      h(
        "div",
        {
          className: this.state.isFouce
            ? "weui-search-bar weui-search-bar_focusing"
            : "weui-search-bar",
          id: "searchBar"
        },
        h(
          "form",
          {
            className: "weui-search-bar__form"
          },
          h(
            "div",
            {
              className: "weui-search-bar__box"
            },
            h("i", {
              className: "weui-icon-search"
            }),
            h("input", {
              value: this.state.searchText,
              onChange: this.getInputValue.bind(this),
              type: "search",
              className: "weui-search-bar__input",
              id: "searchInput",
              placeholder: "\u641C\u7D22",
              required: ""
            }),
            h("a", {
              onClick: this.clear.bind(this),
              className: "weui-icon-clear",
              id: "searchClear"
            })
          ),
          h(
            "label",
            {
              onClick: this.toggle.bind(this),
              className: "weui-search-bar__label",
              id: "searchText"
            },
            h("i", {
              className: "weui-icon-search"
            }),
            h("span", null, "\u641C\u7D22")
          )
        ),
        h(
          "a",
          {
            onClick: this.toggle.bind(this),
            className: "weui-search-bar__cancel-btn",
            id: "searchCancel"
          },
          "\u53D6\u6D88"
        )
      )
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      isFouce: false,
      searchText: ""
    };
  }

  toggle() {
    this.setState({
      isFouce: !this.state.isFouce
    });
  }

  clear() {
    this.setState({
      searchText: ""
    });
  }

  getInputValue(e) {
    store.dispatch({
      type: "SEARCHTEXT",
      searchText: e.target.value
    });
    this.setState({
      searchText: e.target.value
    });
  }
}

export default Search;

import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

class ScrollToTop extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      // window.onbeforeunload = function () {
      //   window.scrollTo(0, 0)
      // }
      window.scrollTo(200, 0)
    }
  }
  // render = () => this.props.children

  render() {
    console.log(
      'this.props',
      this.props,
      'this.props.location.pathname',
      this.props.location.pathname
      // 'window.main.scrollTo',
      // window.main.scrollTo
    )
    return null
  }
}

export default withRouter(ScrollToTop)

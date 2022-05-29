import React, { Component } from 'react'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

class GitalkComment extends Component {
  componentDidMount() {
    var gitalk = new Gitalk({
      clientID: '30153769377c91d8db45',
      clientSecret: '35d73e8d75eecaa0d2a95dde9617235863de18bf',
      repo: 'sado0823.github.io',  // 仓库名称
      owner: 'sado0823',      // 仓库作者
      admin: ['sado0823'],
      id: location.pathname,      // Ensure uniqueness and length less than 50
      distractionFreeMode: false  // Facebook-like distraction free mode
    })

    gitalk.render('gitalk-container')
  }
  render() {
    return <div id="gitalk-container"></div>
  }
}
export default GitalkComment;
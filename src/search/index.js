'use strict'
import React from 'react';
import ReactDom from 'react-dom';
import './index.scss'

class Search extends React.Component{
  render(){
    return <div className="color">我要用react来做搜索</div>
  }
}

ReactDom.render(
  <Search />,
  document.getElementById('root')
)

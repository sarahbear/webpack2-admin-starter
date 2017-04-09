import React from 'react'
import { Menu, Dropdown } from 'antd'
import './Header.scss'

export default class Header extends React.Component {
  render () {

    return (
      <header className='header'>
        <a href='/' className='logo'>webpack2 admin</a>
      </header>
    )
  }
}

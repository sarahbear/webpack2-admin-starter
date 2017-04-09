import React from 'react'
import { Icon } from 'antd'

import Header from 'components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapse: false
    }
    this.onCollapseChange = this.onCollapseChange.bind(this)
  }

  onCollapseChange () {
    this.setState({
      collapse: !this.state.collapse
    })
  }

  render () {
    const collapse = this.state.collapse
    return (
      <div className='core-layout'>
        <div className='header clearfix'>
          <Header />
        </div>
        <div className={collapse ? 'ant-layout-aside ant-layout-aside-collapse' : 'ant-layout-aside'}>
          <aside className='ant-layout-sider'>
            <div className='ant-aside-action' onClick={this.onCollapseChange}>
              {collapse ? <Icon type='right' /> : <Icon type='left' />}
            </div>
          </aside>
          <div className='ant-layout-main'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout

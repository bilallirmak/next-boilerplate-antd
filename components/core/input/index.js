import React from 'react'
import cn from 'classnames'
import { Input, Row, Col } from 'antd'

import styles from './input.module.css'


function AppInput({ icon, className, children, ...props }) {
  return (
    <>
      <Row>
        <Col span={icon ? 2 : ''}>
          {icon && <span className={cn(styles.icon)}>{icon}</span>}
        </Col>
        <Col span={icon ? 22 : 24}>
          <Input className={cn([styles.input, className])}  {...props}>
            {children}
          </Input>
        </Col>
      </Row>
    </>
  )
}
export default AppInput

import React from 'react'
import { Col, Row, Spin } from 'antd'

const Loading = () => {
  return (
    <Row
      justify={'center'}
      align={'middle'}
      style={{ minHeight: '100vh', width: '100%' }}
    >
      <Col>
        <Spin size={'large'} />
      </Col>
    </Row>
  )
}

export default Loading

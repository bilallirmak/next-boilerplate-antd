import React from 'react'
import cn from 'classnames'
import { Card } from 'antd'

import styles from './card.module.css'

function AppCard({ className, children, ...props }) {
  return (
    <Card className={cn([styles.card, className])} {...props}>
      {children}
    </Card>
  )
}
export default AppCard

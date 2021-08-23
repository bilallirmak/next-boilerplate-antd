import React from 'react'
import cn from 'classnames'

import styles from './index.module.css'
import { Button } from 'antd'

function AppButton({ children, className, onClick, ...props }) {
  return (
    <Button
      className={cn(styles.button, className)}
      type={'primary'}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  )
}

export default AppButton

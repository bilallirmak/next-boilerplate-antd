import React from 'react'
import cn from 'classnames'

import styles from './title.module.css'

function TextTitle({ bold = true, className, children }) {
  return <h2 className={cn([className, styles.title, bold && styles.bold])}>{children}</h2>
}
export default TextTitle

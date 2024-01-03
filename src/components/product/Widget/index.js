import React from 'react'
import styles from "./Widget.module.scss"
import classNames from 'classnames/bind'
const cx = classNames.bind(styles);

export default function Widget({children}) {
  return (
    <div className={cx("main-body")}>{children}</div>
  )
}

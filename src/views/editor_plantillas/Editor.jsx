import React from 'react'
import styles from './Editor.module.css'
import Header from './components/Header'
import PanelLateral from './components/PanelLateral'

const Editor = () => {
  return (
    <div className={styles.editor_container}>
        <Header />
        <PanelLateral />
    </div>
  )
}

export default Editor
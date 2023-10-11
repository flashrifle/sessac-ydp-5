import React from 'react';
import styles from './styles/cssModule.module.css';

//CSS module
// - 클래스 명 중복 방지
export default function CssModuleComponent() {
    console.log(styles);
    return (
        <div className={styles.container}>
            <div className={[styles.box, styles.red].join(' ')}></div>
            <div className={[styles.box, styles.orange].join(' ')}></div>
            <div className={`${styles.box} ${styles.yellow}`}></div>
        </div>
    );
}

import * as styles from './subheader.css'
const SubHeader = ({title,children}) => {
    return (
            <div className={styles.subHeaderContainer}>
                <h3>{title}</h3>
                <div className={styles.separator}></div>
                <div>{children}</div>
            </div>
        
    )

}

export default SubHeader;
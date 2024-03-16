import styles from './heading.module.css'
function Heading(){
    console.log(styles.title)
    return(
        <>
         <h2 className={styles.title}>hello world</h2>
        </>
    )
}

export default Heading;
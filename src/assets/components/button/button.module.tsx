import styles from "./button.module.css";

export default function Button(props:any) {
    
    return (
        <input 
            className={styles.button} 
            {...props}
        />
    );
}
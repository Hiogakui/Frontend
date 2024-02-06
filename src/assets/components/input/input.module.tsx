import TextField from '@mui/material/TextField';
import styles from "./input.module.css";

export default function Input(props:any) {
    return (
      // <input className={styles.input}  />
      <TextField
        {...props}
        value={props.inputValue}
        onChange={(e) => props.functionEdicion(e.target.value)}
      />

    );
}
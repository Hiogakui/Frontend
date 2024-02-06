import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import styles from './alert.module.css'

export default function ErroAlert({ mensagem }: { mensagem: string }) {
  return (
    <Stack className={styles.boxAlert}>
      <Alert className={styles.alert} variant="filled" severity="error">{mensagem}</Alert>
    </Stack>
  );
}
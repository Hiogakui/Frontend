import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import styles from './alert.module.css'

export default function SucessAlert({ mensagem }: { mensagem: string }) {
  return (
    <Stack className={styles.boxAlert}>
      <Alert className={styles.alert} variant="filled" severity="success">{mensagem}</Alert>
    </Stack>
  );
}
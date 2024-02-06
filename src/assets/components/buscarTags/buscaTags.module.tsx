import * as React from 'react';
import styles from './buscaTags.module.css'
import {Box, TextField} from '@mui/material';

export default function SeachField({ valueTag,functionSetTag}:any) {
  return (
    <Box>
      <TextField value={valueTag} onChange={(e)=>functionSetTag(e.target.value)} className={styles.seach} label="Buscar tags" />
    </Box>
  );
}
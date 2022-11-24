import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export default function DataTable(props) {
  const columns: GridColDef[] =props.columns;
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.rows?props.rows:[]}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[props.rows?props.rows.length:9]}
        checkboxSelection
      />

    </div>
  );
}

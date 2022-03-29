import React from 'react'
import { Grid } from '@mui/material'

function Header() {
    return (
        <div className="header">
            <Grid container spacing={3} style={{ textAlign: 'center', background: '#FF585D' }}>
                <Grid item md={4}>
                    Logo her
                </Grid>
                <Grid item md={4}>
                    Hjemmeside :)
                </Grid>
                <Grid item md={4}>
                    Dropdown her
                </Grid>
            </Grid>
        </div>
    )
}

export default Header
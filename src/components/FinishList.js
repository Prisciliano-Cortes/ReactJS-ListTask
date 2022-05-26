import React               from 'react';
import CircleIcon          from '@mui/icons-material/Circle';
import { Box, Checkbox, 
        FormControlLabel, 
        Grid, Typography } from '@mui/material';
import { styles }          from '../design/Design';

export const FinishList = ({finList, updateStatus}) => {
    return (
        <>
            <Typography style={styles.status}>Completed</Typography>

            <Grid container style={styles.boxingFin} rowSpacing={1} columnSpacing={{ xs: 1, sm: 6, md: 12 }}>
                {
                    finList && finList.map( item => (
                        <>
                            {
                                ( item.status === 'Completed' ) &&
                                <Grid item xs={12} sm={6} md={6} lg={6} xl={4} key={ item.id }>
                                    <Box component="div" style={styles.mainFin}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    icon={<CircleIcon />}
                                                    sx={{
                                                        "& .MuiSvgIcon-root": {
                                                            marginLeft: '20px',
                                                            color: '#94ADCF',
                                                        }
                                                    }}
                                                />
                                            }
                                            label={item.title}
                                            style={styles.leterFin}
                                            key={ item.id } 
                                            onClick={ ()=> updateStatus( item.id, 'Pending' ) }
                                        />
                                    </Box>
                                </Grid>
                            }
                        </>
                    ))
                }
            </Grid>
        </>
    )
}
import React               from 'react';
import BackspaceIcon       from '@mui/icons-material/Backspace';
import EditIcon            from '@mui/icons-material/Edit';
import CircleUnchecked     from "@mui/icons-material/RadioButtonUnchecked";
import { Box, Checkbox, 
        FormControlLabel, 
        Grid, IconButton } from '@mui/material';
import { styles }          from '../design/Design';

export const MainList = ({ initList, updateStatus, deleteTask, editing }) => {
    return (
        <Grid container style={styles.boxingInit} rowSpacing={1} columnSpacing={{ xs: 1, sm: 6, md: 12 }}>
            {
                initList && initList.map( item => (
                    <>
                        {
                            ( item.status === 'Pending' ) &&
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={4} key={ item.id }>
                                <Box component="div" style={styles.mainInit}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                icon={<CircleUnchecked />}
                                                sx={{
                                                    "& .MuiSvgIcon-root": {
                                                        marginLeft: '20px',
                                                        color: '#94ADCF',
                                                    }
                                                }}
                                            />
                                        }
                                        label={item.title}
                                        style={styles.leterInit}
                                        key={ item.id } 
                                        onClick={ ()=> updateStatus( item.id, 'Completed' ) }
                                    />
                                    <Box component="div" style={styles.actions}>
                                        <IconButton  
                                            size="small" 
                                            onClick={ () => deleteTask(item.id) }
                                            style={styles.icons}
                                        >
                                            <BackspaceIcon />
                                        </IconButton>
                                        
                                        <IconButton  
                                            size="small" 
                                            onClick={ () => editing(item) }
                                            style={styles.icons}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Grid>
                        }
                    </>
                ))
            }
        </Grid>
    )
}
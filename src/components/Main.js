import React, { useState } from 'react';
import { nanoid }          from 'nanoid';
import ArrowBackIosIcon    from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Container, 
        Grid, IconButton, 
        InputAdornment,
        InputBase }        from '@mui/material';
import { MainList }        from './MainList';
import { FinishList }      from './FinishList';
import { styles }          from '../design/Design';

export const Main = () => {

    const [id, setId] = useState('');
    const [task, setTask] = useState('');
    const [list, setList] = useState([]);
    const [edicion, setEdicion] = useState(false);

    const putUpperCase = ( task ) => task.charAt(0).toUpperCase() + task.slice(1);


    const saveTask = (e) => {
        e.preventDefault();

        if (!task) return;

        setList([
            ...list,
            { id: nanoid(), title: task, status: 'Pending' }
        ]);

        setTask('');
    }

    const updateStatus = ( id, newStatus ) => {
        let allList = list;

        allList = allList.map( item => {
            if ( item.id === id ) {
                item.status = newStatus;
            }

            return item;
        });

        setList(allList);
    }

    const deleteTask = ( id ) => {

        const arrayFilter = list.filter( item => item.id !== id );

        setList(arrayFilter);
    }

    const editing = ( item ) => {
        setEdicion(true);
        setTask(item.title);
        setId(item.id);
    }

    const editTask = (e) => {
        e.preventDefault();

        if (!task) return;

        const arrayEdit = list.map(item => item.id === id ? {id, title: task, status: 'Pending'} : item)
        setList(arrayEdit);
        setEdicion(false);
        setTask('');
        setId('');
    }

    return (
        <Container>
            <Grid container style={styles.boxingMain}>
                <Grid item xs={12} sm={6} md={5} lg={5} xl={5}>
                    <Box
                        component="form"
                        autoComplete='off'
                        onSubmit={ edicion ? editTask : saveTask }
                    >
                        <InputBase
                            placeholder="Add new task"
                            name='task'
                            value={ putUpperCase(task) }
                            onChange={ (e) => setTask(e.target.value) }
                            fullWidth
                            size='small'
                            endAdornment={
                                <InputAdornment position="end">
                                    {
                                        edicion ?
                                        <IconButton color="inherit" type='submit' size="small">
                                            <ArrowBackIosIcon style={styles.enter} />
                                        </IconButton> 
                                        : 
                                        <IconButton color="inherit" type='submit' size="small">
                                            <ArrowForwardIosIcon style={styles.enter} />
                                        </IconButton>
                                    }
                                </InputAdornment>
                            }
                            style={styles.input}
                        />
                    </Box>
                </Grid>
            </Grid>

            <MainList initList={list} deleteTask={deleteTask} editing={editing} updateStatus={updateStatus} />
            <FinishList finList={list} updateStatus={updateStatus} />
        </Container>
    )
}
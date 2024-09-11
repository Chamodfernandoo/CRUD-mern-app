import { Grid, Typography, Input, Button } from '@mui/material';
import React, { useEffect } from 'react';

const Userforn = ({add,updateuser,submited ,data ,isedited}) => {
    const [id, setId] = React.useState('0');
    const [name, setName] = React.useState('');

    useEffect(() => {
        if (!submited) {
            setId(0);
            setName('');
        }
    }, [submited]);

    useEffect(() => {
        if (data && data.id && data.id !==0) {  
            setId(data.id);
            setName(data.name); 
        }
    }, [data]);

    return (
        <>
            <Grid 
                container
                spacing={2}
                sx={{
                    marginBottom: '30px',
                    display: 'block',
                    alignItems: 'center',
                }}
            >
                <Grid item xs={12}>
                    <Typography component={'h1'} sx={{color:'#000'}}>User Form</Typography>
                </Grid>

                <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                    <label 
                        htmlFor="id" 
                        style={{
                            color: '#000', 
                            marginRight: '10px', 
                            fontSize: '20px', 
                            width: '100px', 
                            display: 'block'
                        }}
                    >
                        ID
                    </label>
                    <Input 
                        type="text" 
                        id="id" 
                        name="id" 
                        sx={{ 
                            width: '100%', 
                            height: '40px', 
                            border: '1px solid #000', 
                            borderRadius: '5px', 
                            padding: '10px'
                        }}
                        value={id} 
                        onChange={(e) => setId(e.target.value)} 
                    />
                </Grid>

                <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                    <label 
                        htmlFor="name" 
                        style={{
                            color: '#000', 
                            marginRight: '10px', 
                            fontSize: '20px', 
                            width: '100px', 
                            display: 'block'
                        }}
                    >
                        Name
                    </label>
                    <Input 
                        type="text" 
                        id="name" 
                        name="name" 
                        sx={{ 
                            width: '100%', 
                            height: '40px', 
                            border: '1px solid #000', 
                            borderRadius: '5px', 
                            padding: '10px'
                        }}
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </Grid>

                <Button 
                    sx={{ 
                        margin: 'auto', 
                        marginBottom: '20px', 
                        backgroundColor: '#00c6e6', 
                        color: '#000', 
                        marginLeft: '10px', 
                        marginTop: '20px',
                        '&:hover': {
                            opacity: '0.8', 
                            backgroundColor: '#00c6e6'
                        }
                    }}
                    onClick={()=>isedited? updateuser({id, name}) : add({id, name})}
                >
                    { isedited? 'Update user' : 'ADD'}
                </Button>
            </Grid>
        </>
    );
};

export default Userforn;


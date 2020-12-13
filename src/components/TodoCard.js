import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
    height: 540
  },
  media: {
    height: 440,
 },
  card2: {
    height: 100,
    marginTop: '5%',
    maxWidth: '90%',
    marginLeft: 'auto',
    marginRight: 'auto', 
  }  

    
});

export default function MediaCard() {
  const classes = useStyles();
  const [todo, setTodo] = useState(null)
  const [edit, setEdit] = useState(false)

  const handleSubmit = (e) => {
     e.preventDefault()
      
  }

  return (
    <Card className={classes.root}>
        <Card className={classes.card2}>
      <CardActionArea>
       <form onSubmit={handleSubmit} style={{display: 'flex'}}>
        <TextField style={{width: '77%', marginTop: '5%', marginBottom: 'auto'}} onChange={e => setTodo(e.target.value)} id="standard-basic" variant="outlined" label="Add " />
        <Button style={{width: '23%', marginTop:'5%'}} type='submit' size='large' variant="contained" color="primary" >
          Submit
        </Button>
      </form>
 
      </CardActionArea>
      </Card>
      <CardActions>

      </CardActions>
    </Card>
  );
}
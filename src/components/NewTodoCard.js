import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
      maxWidth: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '5px' 
    },
    button: {
        float: 'right'
    }
  
  });

   


const NewTodoCard = ({todo, id, setTodo}) => {
    const classes = useStyles();

    const handleEdit = (e) => {
        e.preventDefault()
        setTodo(todo.task)
     }
    

    return (
   
        <Card className={classes.root} id={id}>
           <CardContent>
              {todo.task}
              <Button className={classes.button} variant="outlined">done</Button>
              <Button className={classes.button} onClick={e => handleEdit(e)} variant="outlined">Edit</Button>
           </CardContent>
        </Card>
      
       
       )
   }
      

        
export default NewTodoCard;

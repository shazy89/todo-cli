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

  const NewTodoCard = ({todo, id, setTodo, setEdit, setId}) => {
      const classes = useStyles();
  console.log(todo)
      const handleEdit = (e) => {
          e.preventDefault()
          setId(todo.id)
          setTodo(todo.task)
          setEdit(true)
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
   



        

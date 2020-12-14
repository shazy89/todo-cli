import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { deleteTodo } from '../actions/index';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
      maxWidth: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '5px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' 
    },
    button: {
        float: 'right'
    }
  
  });

  const NewTodoCard = ({todo, id, setTodo, setEdit, setId, deleteTodo}) => {
      const classes = useStyles();

      const handleEdit = (e) => {
          e.preventDefault()
          setId(todo.id)
          setTodo(todo.title)
          setEdit(true)
       };

       const handleDelete = (e) => {
          e.preventDefault()
          deleteTodo(id)
       };
      
  
      return (
     
          <Card className={classes.root} id={id}>
             <CardContent  style={{fontFamily: 'cursive'}}>
                {todo.title}
                <Button className={classes.button} onClick={e => handleDelete(e)} variant="outlined">remove</Button>
                <Button className={classes.button} onClick={e => handleEdit(e)} variant="outlined">Edit</Button>
             </CardContent>
          </Card>
        
         
         )
     }
        
     export default connect(null, { deleteTodo })(NewTodoCard);
   



        

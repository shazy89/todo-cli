import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { addTodo } from '../actions/index';
import { connect } from 'react-redux';
import NewTodoCard from './NewTodoCard'
import Draggable from 'react-draggable';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
    height: 540,
    backgroundColor: 'cadetblue'
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

 const TodoCard = ({addTodo, storeTodos}) => {
  const classes = useStyles();
  const [todo, setTodo] = useState('')
  const [completed, setCompleted] = useState(false)
  const [edit, setEdit] = useState(false)

  const handleSubmit = (e) => {
     e.preventDefault()
     const todoObj = {
         task: todo,
         completed: completed
  }
     addTodo(todoObj)
     setTodo('')
     setCompleted(false)
  }


  let renderTodos = storeTodos.map((todo, i)=> <NewTodoCard key={i} todo={todo} setTodo={setTodo} />)

  return (
    <Card className={classes.root}>
        <Card className={classes.card2}>
      <CardActionArea>
       <form onSubmit={handleSubmit} style={{display: 'flex'}}>
        <TextField style={{width: '77%', marginTop: '5%', marginBottom: 'auto'}} 
        onChange={e => setTodo(e.target.value)} value={todo} id="standard-basic" variant="outlined" label="Add task .. " />
        <Button style={{width: '23%', marginTop:'5%'}} type='submit' size='large' variant="contained" color="primary" >
          Submit
        </Button>
      </form>
 
      </CardActionArea>
      </Card>
   

        <CardContent>
           {renderTodos}
        </CardContent>
 
  
    </Card>
  );
}
const mapStateToProps = storeTd => {
            
    return {
      storeTodos: storeTd.todo.todos
    }
   };

export default connect(mapStateToProps, { addTodo })(TodoCard);
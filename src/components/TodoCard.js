import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { addTodo, editTd, fetchTodos } from '../actions/index';
import { connect } from 'react-redux';
import NewTodoCard from './NewTodoCard'
import Draggable from 'react-draggable';
import Loading from './Loading'

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

 const TodoCard = ({addTodo, storeTodos, editTd, fetchTodos, loading}) => {
  const classes = useStyles();
  const [todo, setTodo] = useState('')
  const [completed, setCompleted] = useState(false)
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState('') 

  const handleSubmit = (e) => {
     e.preventDefault()
     const todoObj = {
         id: storeTodos.length,
         title: todo,
         completed: completed
  }
     addTodo(todoObj)
     setTodo('')
     setCompleted(false)
  }
  const editTodo = (e) => {
    e.preventDefault()
    editTd(todo, id, completed)
    setTodo('')
    setEdit(false)
  }


  const tasks = storeTodos.map((todo)=> <NewTodoCard id={todo.id} todo={todo} setTodo={setTodo} setEdit={setEdit} setId={setId}/>)

  return (
    <Card className={classes.root} id='1'>
        <Card className={classes.card2} id='2'>
      <CardActionArea>
       <form onSubmit={edit ? editTodo : handleSubmit } style={{display: 'flex'}}>
        <TextField style={{width: '77%', marginTop: '5%', marginBottom: 'auto'}} 
        onChange={e => setTodo(e.target.value)} value={todo} id="standard-basic" variant="outlined" label={edit ? 'Edit' : 'Add task ..'} />
        <Button style={{width: '23%', marginTop:'5%'}} type='submit' size='large' variant="contained" color="primary" >
          Submit
        </Button>
      </form>
 
      </CardActionArea>
      </Card>
        <CardContent>
           {tasks}
        </CardContent>
    </Card>
  );
}

   

 
  
const mapStateToProps = storeTd => {
        
    return {
      storeTodos: storeTd.todo.todos,
      loading: storeTd.todo.loading
    }
 };

export default connect(mapStateToProps, { addTodo, editTd, fetchTodos })(TodoCard);
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createTodo, editTd } from '../actions/index';
import { connect } from 'react-redux';
import NewTodoCard from './NewTodoCard';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    display: 'row',
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
    height: 600,
    backgroundColor: "lightgrey",
    boxShadow: '0 23px 38px rgba(0,0,0,0.35), 0 18px 15px rgba(0,0,0,0.29)'
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
    boxShadow: '0 23px 38px rgba(0,0,0,0.35), 0 18px 15px rgba(0,0,0,0.29)'
  },
  h3: {
    
    marginLeft: 'auto',
    marginRight: 'auto'
  }

});

const TodoCard = ({createTodo, storeTodos, editTd}) => {
 const classes = useStyles();
 const [todo, setTodo] = useState('')
 const [completed, setCompleted] = useState(false)
 const [edit, setEdit] = useState(false)
 const [id, setId] = useState('') 

 const handleSubmit = (e) => {
    e.preventDefault()
    
    const todoObj = {
        id: null,
        title: todo,
        completed: completed
 }
    createTodo(todoObj)
    setTodo('')
    setCompleted(false)
 };

 const editTodo = (e) => {
   e.preventDefault()
   const todoObj = {
     id: id,
     title: todo,
     completed: completed
}
   editTd(todoObj)
   setTodo('')
   setEdit(false)
 }

 const tasks =  storeTodos.sort((a, b) => a.completed - b.completed).map((todo)=> {
                return <NewTodoCard id={todo.id} todo={todo} setTodo={setTodo} setEdit={setEdit} setId={setId}/>})
   
      return (
        <Card className={classes.root} id='1' elevation={4}>
              <CardContent>
                     <Typography align='center' variant='h4' color="initial" gutterBottom>
                        What's the Plan for Today?
                    </Typography>
               </CardContent>
            <Card className={classes.card2} id='2'>
               <CardActionArea>
                <form onSubmit={edit ? editTodo : handleSubmit } style={{display: 'flex'}}>
                 <TextField style={{width: '77%', marginTop: '5%', marginBottom: 'auto'}} 
                    onChange={e => setTodo(e.target.value)} value={todo} id="standard-basic" 
                    variant="outlined" label={edit ? 'Edit' : 'Add task ..'} />
                  <Button style={{width: '23%', marginTop:'5%'}} type='submit' size='large' variant="contained" color="primary" >
                    Submit
                  </Button>
               </form>
               </CardActionArea>
           </Card>
               <CardContent style={{ borderRadius: '1%', resize: 'none', overflowY: 'scroll', height:'500px' }}>
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
       
    export default connect(mapStateToProps, { createTodo, editTd })(TodoCard);



    

  


        
    
  


 
  
        

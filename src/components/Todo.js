import React, { useEffect} from 'react';
import TodoCard from './TodoCard'
import { connect } from 'react-redux';
import Loading from './Loading'
import {fetchTodos} from '../actions/index'

const Todo = ({loading, fetchTodos}) => {

useEffect(() => {
    fetchTodos()
  }, []);
    return (
        <div  >
          {loading ? <Loading /> : <TodoCard />}
        </div>
      )
  }
          
      

const mapStateToProps = storeTd => {
    return {
    
    loading: storeTd.todo.loading
    }
 };
 
        
export default connect(mapStateToProps, {fetchTodos})(Todo);
import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css';

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render(){
        return(
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    {/*下面是一个input框*/}
                    <input
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    componentDidMount(){
        axios.get('/api/todolist')
            .then((res)=>{
                this.setState(() => ({
                    list: [...res.data]
                }));
            })
            .catch(()=>{alert('error')})
    }

    getTodoItem(){
        return this.state.list.map ((item,index) =>{
            return (
                <TodoItem
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleItemDelete}
                />
            )
        })
    };

    handleItemDelete(index){
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index,1);
            return {list}
        })
    };

    handleButtonClick(){
        this.setState((prevState) => ({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }))
    };

    handleInputChange(e){
        const value = e.target.value;
        this.setState(()=>({
            inputValue: value
        }))
    }
}
export default TodoList;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAddListAction, getDelListAction, getInputChangeAction} from "./store/actionCreators";

const TodoList = (props) => {
    return(
        <div>
            <div>
                <input
                    value={props.inputValue}
                    onChange={props.changeInputValue}
                />
                <button onClick={props.handleAddItem}>提交</button>
            </div>
            <ul>
                {
                    props.list.map((item, index) => {
                        return(<li
                            key={index}
                            onClick={() => props.handleDelItem(index)}
                        >{item}</li>)
                    })
                }
            </ul>
        </div>
    )
};

/*class TodoList extends Component{
    render(){
        return(
            <div>
                <div>
                    <input
                        value={this.props.inputValue}
                        onChange={this.props.changeInputValue.bind(this)}
                    />
                    <button onClick={this.props.handleAddItem.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return(<li
                                key={index}
                                onClick={() => this.props.handleDelItem.bind(this)(index)}
                            >{item}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}*/

const mapStateToProps = (state) => {
    return{
        inputValue: state.inputValue,
        list:state.list
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        changeInputValue(e){
            const action = getInputChangeAction(e.target.value);
            dispatch(action);
        },
        handleAddItem(){
            const action = getAddListAction();
            dispatch(action);
        },
        handleDelItem(index){
            const action = getDelListAction(index);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
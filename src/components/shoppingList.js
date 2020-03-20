import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import {getItemsAction, addItemAction, removeItemAction, updateItemAction} from './../actions';
import { connect } from 'react-redux';

// import { Field, reduxForm } from 'redux-form'

class ShoppingList extends Component {

    constructor(props){
        super(props);
        this.state = {
            setModal: false,
            name: '',
            isEdit: false,
            editData: {name: ''}
        }
    }

    componentDidMount(){
        this.props.getItemsAction();
    }

    submitItem = (e)=>{
        this.state.isEdit?
            this.props.updateItemAction({_id: this.state.editData._id, name: this.state.name}):
            this.props.addItemAction(this.state.name);
        e.preventDefault();
    }

    deleteItem = (e, item)=>{
        this.props.removeItemAction(item._id);
    }

    modalToggle = ()=>{
        this.setState({
            setModal: !this.state.setModal,
            name: '',
            editData: {name: ''},
            isEdit: false
        }, ()=>{
            setTimeout(()=>{this.testInput && this.testInput.focus()}, 1);
        })
    }

    editItem = (e, item)=>{
        this.setState({
            isEdit: true,
            editData: item
        })
    }

    render() { 
        const {items} = this.props.itemReducer;
        const {className, handleSubmit} = this.props;
        return ( 
            <>
                <button className="btn btn-dark my-5" onClick={this.modalToggle}>Add Item</button>
                <ul className="list-group">
                    {!items?.length && <li className="list-group-item text-center">No Data found</li>}
                    {items?.length &&
                        <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items?.map((item, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>
                                            <button className="btn btn-success mr-3" onClick={(e)=>{this.modalToggle();this.editItem(e, item)}}>Edit</button>
                                            <button className="btn btn-danger mr-3" onClick={(e)=>this.deleteItem(e, item)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>}
                </ul>

                {/* Modal code */}
                <Modal isOpen={this.state.setModal} toggle={this.modalToggle} className={className}>
                    <ModalHeader toggle={this.modalToggle}>Modal title</ModalHeader>
                    <ModalBody>
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="form-control-label">Name :</label>
                            <input type="text" 
                                   autoFocus={false} 
                                   defaultValue={this.state.editData.name}
                                   onChange={(e)=>this.setState({name: e.target.value})} 
                                   ref={(input) => { this.testInput = input; }}
                                   className="form-control"/>
                        </div>
                        <button onClick={(e)=>{this.submitItem(e);this.modalToggle()}} className="btn btn-dark">Submit</button>
                    </form>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="secondary" onClick={this.modalToggle}>Close</Button>
                    </ModalFooter>
                </Modal>
                {/* / Modal code */}
            </>
         );
    }
}

const mapDispatchToProps = {
    getItemsAction,
    addItemAction,
    removeItemAction,
    updateItemAction
}
const mapStateToProps = (state)=>{
    return state
}

// ShoppingList = reduxForm({
//     // a unique name for the form
//     form: 'addItemForm'
// })(ShoppingList)
 
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
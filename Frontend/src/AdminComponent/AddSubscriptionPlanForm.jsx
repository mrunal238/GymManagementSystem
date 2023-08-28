
import React, { Component } from 'react'
import AdminServices from '../services/AdminServices';


class CreateSubplanComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            subplanId : '',
            planName : '',
            duration :'',
            amount :''
           
            
        }
      
        this.changePlanNameHandler = this.changePlanNameHandler.bind(this);
        this.changeDurationHandler = this.changeDurationHandler.bind(this);
        this.changeAmountHandler = this.changeAmountHandler.bind(this);
        

        this.saveSubPlan = this.saveSubPlan.bind(this);
    }

    saveSubPlan = (e) => {
        
        e.preventDefault();
            let subplan = {
                    subplanId: this.state.subplanId, 
                    planName: this.state.planName, 
                    duration: this.state.duration, 
                    amount: this.state.amount,
                    
                    
                };

        if(this.state.planName.length===0) {
            alert('Please enter Sub Plan name')
        } else if(this.state.duration.length===0) {
            alert('Please enter duration')
        } else if(this.state.amount.length===0) {
            alert('Please enter amount')
        } else {

        console.log('subplan =>' +JSON.stringify(subplan)); 

        AdminServices.createSubplans(subplan).then(res => {
                this.props.history.push('/planlist')
        });


        
     }
        
    }

    cancel() {
        this.props.history.push('/planlist');
    }

    

    changePlanNameHandler = (event) => {
        this.setState({planName: event.target.value});
    }

    changeDurationHandler = (event) => {
        this.setState({duration: event.target.value});
    }

    changeAmountHandler = (event) => {
        this.setState({amount: event.target.value});
    }




    render() {
        return (
            <div>
                <div className="contianer">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{color:'orange',backgroundColor:"black"}}>
                            <h1 className="text-center">Add Subscription plan Form</h1>
                            <div className="card-body">

                                <form>

                                    
                                    <div className="form-group">
                                        <label> Plan Name: </label>
                                        <input placeholder="Plan Name" type="text" name="name" className="form-control"
                                            value={this.state.planName} onChange={this.changePlanNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Duration: </label>
                                        <input placeholder="Duration" type="text" name="contact" className="form-control"
                                            value={this.state.duration} onChange={this.changeDurationHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Amount: </label>
                                        <input placeholder="Amount" type="text" name="email" className="form-control"
                                            value={this.state.amount} onChange={this.changeAmountHandler} />
                                    </div>
                              
                                    <br/>
                                    <br/>
                                    <button type="submit" className="btn btn-success" onClick={this.saveSubPlan}>Save</button>
                                    
                                    <br/>
                                    <br/>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CreateSubplanComponent

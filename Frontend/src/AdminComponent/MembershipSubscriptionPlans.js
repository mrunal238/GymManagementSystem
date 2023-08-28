import React from 'react'
import AdminServices from '../services/AdminServices';


class MembershipplanComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            subplan:[]
        }
     
        this.addSubplan = this.addSubplan.bind(this);
        this.deleteSubplan =this.deleteSubplan.bind(this);
    }

    deleteSubplan(subplanId) {
        AdminServices.deleteSubplans(subplanId).then(res => {
        this.setState({subplan: this.state.subplan.filter(subplans => subplans.subplanId !== subplanId)});
        });

    }

    componentDidMount(){

        AdminServices.getSubplans().then((response) => {
            this.setState({subplan:response.data})
        })
       
    }

    
    addSubplan() {
        this.props.history.push('/addplan');
    }

    render(){
        return(
            <div>
                <h1 style={{textAlign:'center', color:'orange'}}>Plan List</h1>
                <div>
                    <button className="btn btn-success" onClick={this.addSubplan}>Add Subscription-Plan</button>
                    <br/>
                    <br/>
                </div>
                <table className = "table  table-dark"  style={{color:'white',backgroundColor:"black"}}>

                    <thead>
                        <tr>

                            <th>SUBPLAN-Id</th>
                            <th>PLAN-NAME</th>
                            <th>DURATION</th>
                            <th>AMOUNT</th>
                            <th>ACTION</th>
                            
                            
                            
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.subplan.map(
                                subplan =>
                                <tr key = {subplan.subplanId}>
                                    <td>{subplan.subplanId}</td>
                                    <td>{subplan.planName}</td>
                                    <td>{subplan.duration}</td>
                                    <td>{subplan.amount}</td>
                                    <td>
                                       
                             <button  onClick = { () => this.deleteSubplan(subplan.subplanId)} className="btn btn-danger">Delete</button>
                                    </td>
                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MembershipplanComponent 

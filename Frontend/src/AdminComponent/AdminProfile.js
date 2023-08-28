import React from 'react'



class AdminProfileComponents extends React.Component {

   

    render(){
        return(
            <div >
                <br/>
                <br/>
                <h2 style={{textAlign:'center', color:'orange'}}>Admin Profile</h2>
                <br/>
                <br/>
                
                            

                    <table className = "table  table-dark"  style={{color:'white',backgroundColor:"black"}} >
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{localStorage.getItem('admin_name')}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{localStorage.getItem('admin_email')}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{localStorage.getItem('admin_address')}</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>{localStorage.getItem('admin_contact')}</td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>{localStorage.getItem('admin_password')}</td>
                        </tr>
                        <tr>
                            <td>Role</td>
                            <td>{localStorage.getItem('admin_role')}</td>
                        </tr>
                    </tbody>
                </table>
                
                   
            </div>
        )
    }
}

export default AdminProfileComponents
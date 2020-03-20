import React, { PureComponent } from 'react'
import Typography from '@material-ui/core/Typography';
import Layout from '../../Layout'  
class Employee extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Layout>
                <Typography variant="h4" gutterBottom>
                    ข้อมูลหลัก | ข้อมูลพนักงาน
                    
                </Typography>
            </Layout>
        )
    }
}

export default Employee
import React, { PureComponent } from 'react'
import Typography from '@material-ui/core/Typography';
import Layout from '../Layout'  
class Approve extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Layout>
                <Typography variant="h4" gutterBottom>
                    อนุมัติแจ้งซ่อม | 
                    
                </Typography>
            </Layout>
        )
    }
}

export default Approve
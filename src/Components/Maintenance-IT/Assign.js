import React, { Component } from 'react'
import Layout from '../Layout'
import Lorem from '../../Lorem'
import EnhancedTable from '../../TableExample'

class Assign extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Layout>
                <h1>มอบหมายงาน |</h1>
                <EnhancedTable/>
            </Layout>
        )
    }
}

export default Assign
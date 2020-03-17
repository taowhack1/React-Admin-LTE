import React, { Component } from 'react'
import Layout from './Layout'
import Lorem from '../Lorem'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Layout>
                <h1>Welcome | Home Page.</h1>
                <Lorem/>
            </Layout>
        )
    }
}

export default Home
import React, { Component } from 'react'
import Layout from './Layout'
import Lorem from '../Lorem'

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Layout>
                <h1>About Us. | About Page.</h1>
                <Lorem/><Lorem/><Lorem/>
            </Layout>
        )
    }
}

export default About
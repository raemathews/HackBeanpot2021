import React from 'react';

import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { StyledDashboard } from './Dashboard.styled.js';
import DataTable from './Table';
import LineGraphComp from './LineGraphComp.js';


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            lineGraphData: props.lineGraphData
        }
    }

    componentDidMount() {
       fetch("https://jsonplaceholder.typicode.com/posts")
       .then(res => res.json())
       .then(
         (result) => {
           this.setState({
             tableData: result
           });
         }, () => {console.log(this.state.tableData)},
         // Note: it's important to handle errors here
         // instead of a catch() block so that we don't swallow
         // exceptions from actual bugs in components.
         (error) => {
           console.log("error here");
         }
       )
 
    }

    render() {
        return (
            <StyledDashboard>
                <div className="cont">
                    {/*TITLE OF DASHBOARD PAGE*/}
                    <Row>
                        <Col className="pageTitle" offset={1}>Expired Vaccines</Col>
                    </Row>

                    {/*DATA VISUALIZATIONS -- TEMPORARILY HARD CODED IN*/}
                    <Row gutter={80} align="center" >
                        <Col className="dataTable" span={6}>
                            <DataTable data={
                            this.state.tableData
                        } /></Col>
                        <Col className="lineGraph" span={6}><LineGraphComp dates={this.state.lineGraphData

                        } /></Col> 
                    </Row>

                    {/*STATIC FOOTER*/}
                    <Row>
                        <Col>{/*FOOTER*/}</Col>
                    </Row>

                </div>
            </StyledDashboard>

        )
    }
}

export default Dashboard;
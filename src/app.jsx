"use strict";
import React, {Component} from "react";
import Nav from "./nav.jsx";
import FilterTable from "./filtertable.jsx";
import SummaryTable from "./summarytable.jsx";
import MainTable from "./maintable.jsx";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            filteredData: []
        };
        this.computeSummaryData = this.computeSummaryData.bind(this);                
        this.filterByDepartment = this.filterByDepartment.bind(this);
    }

    componentDidMount(){            
        fetch("dstwo/2014staff.json")
            .then((res) => {
                if(res.ok){                    
                    return res.json();               
                }else{
                    throw new Error("Network response error.");
                }
            })
            .then((res) => {
                const cleaned = res.data.map((item) =>                     
                        ({
                            Name: item.Name,
                            Title: item.Title,
                            Department: item.Department.replace(/Services/, ""),
                            Remuneration: parseFloat(item.Remuneration.replace(/,/, "")),
                            Expenses: parseFloat(item.Expenses.replace(/,/, ""))
                        })
                );                     
                this.setState({
                    data: cleaned,
                    filteredData: cleaned                    
                });               
            })
            .catch((err) => {
                console.log(err);
            });
    }

    computeSummaryData(){
        const dept = {};
        this.state.data.forEach((item) => {
            if(dept[item.Department]){
                dept[item.Department]++;
            }else{
                dept[item.Department] = 0
            }
        });        
        return dept;
    }


    filterByDepartment(evt){                 
        let dept = evt.target.value;        
        this.setState((prevState, props) => {            
            return {
                data: prevState.data,
                filteredData: prevState.data.filter(item => item.Department === dept)
            };
        });
    }

   

    render(){
        const style = {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignContent: "center",
            background: "orange",
            width: "730px"            
        };

        return (
            <div style = {style}>
                <Nav/>
                <FilterTable 
                    departments = {this.computeSummaryData()} 
                    filterByDepartment = {this.filterByDepartment}/>
                <SummaryTable 
                    sumData = {this.state.data} 
                    departments = {this.computeSummaryData()}/>
                <MainTable filteredData = {this.state.filteredData}/>                
            </div>
        );
    }
}

export default App;
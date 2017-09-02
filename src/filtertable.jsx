import React, {Component} from "react";

class FilterTable extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        const style = {
            display: "flex",
            alignItems: "left",
            width: "100%",
            background: "grey"
        };
        
        return (
            <div style = {style}>
                <span>
                    <select name = "data">                        
                        <option value="2014staff">2014 Staff</option>
                        <option value="2015staff">2015 Staff</option>
                        <option value="2016staff">2016 Staff</option>
                    </select>
                </span>

                <span>
                    <select name="data" onChange = {this.props.filterByDepartment.bind(this)}>                
                        {                    
                            Object.keys(this.props.departments).map((dept, index) => (
                                <option key = {index} 
                                        value = {dept} 
                                        onSelect = {() => { 
                                            console.log("selected");
                                            this.props.filterByDepartment({dept});
                                            }}>
                                        {dept}
                                </option>
                            ))
                        }
                    </select>
                </span>
            </div>        
        );
    }
}


    

export default FilterTable;
import React, {Component} from "react";

const style = {
    display: "flex",
    justifyContent: "left",
    backgroundColor: "white",
    width: "100%"    
};

const SummaryTable = (props) => (      
    <div style = {style}>
        <table>
            <tbody>
                <th>                    
                    <td>Department</td>                    
                    <td>Employee Count</td>
                    <td>Total Expenses</td>
                    <td>Total Remuneration</td>                    
                </th>
                <tr>
                    <td>{Object.keys(props.departments).length - 1}</td>
                    <td>{Object.values(props.departments)}</td>
                    <td></td>
                    <td></td>
                </tr>  
            </tbody>             
        </table>
    </div>  
);

export default SummaryTable;
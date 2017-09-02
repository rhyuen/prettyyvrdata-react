import React, {Component} from "react";

const style = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "pink"
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
                    <td>{Object.keys(props.departments).length}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>  
            </tbody>             
        </table>
    </div>  
);

export default SummaryTable;
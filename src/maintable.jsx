import React from "react";

const style = {
    display: "flex",
    justifyContent: "center"
};

const MainTable = ({filteredData}) => (
    <div style = {style}>    
        <table>
            <tbody>
                {
                    filteredData.map((item, index) => {
                        if(index === 0){
                            return (
                                <tr key = {index}>
                                    <td>{item.Name}</td>
                                    <td>{item.Title}</td>
                                    <td>{item.Department}</td>
                                    <td>Expenses</td>
                                    <td>Remuneration</td>    
                                </tr>
                            );
                        }else{
                            return (
                                <tr key = {index}>
                                    <td>{item.Name}</td>
                                    <td>{item.Title}</td>
                                    <td>{item.Department}</td>
                                    <td>{item.Expenses}</td>
                                    <td>{item.Remuneration}</td>
                                </tr>
                            );
                        }
                    })                                    
                }
            </tbody>
        </table>
    </div>
);

export default MainTable;
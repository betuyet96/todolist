import React from 'react';

export default function TodoTable(props) {

    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                </tr>
                {
                props.todos.map((item, index) =>           
                <tr key = {index}>
                    <td>{item.date}</td>
                    <td>{item.desc}</td>
                    <td><button id ={index} onClick={props.Delete}>Delete</button></td>
                </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}
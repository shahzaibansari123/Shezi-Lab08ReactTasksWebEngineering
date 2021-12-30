import React from 'react'

export default function StudentTable() {
    return (
        <div>
            <table cellPadding={20} style={{border: "2px solid"}}>
                <td style={{border: "2px solid"}}>
                <tr ><h1>Student name:</h1></tr>
                    <tr>Shahzaib</tr>
                    <tr>Fahad</tr>
                    <tr>Shareh</tr>
                    <tr>khubaib</tr>
                </td>
                <td style={{border: "2px solid"}}>
                <tr><h1>Roll #:</h1></tr>
                    <tr>2019-Se-249</tr>
                    <tr>2019-Se-206</tr>
                    <tr>2019-Se-232</tr>
                    <tr>2019-Se-245</tr>
                </td>
                <td style={{border: "2px solid"}}>
                <tr><h1>department:</h1></tr>
                    <tr>software engineering</tr>
                    <tr>software engineering</tr>
                    <tr>software engineering</tr>
                    <tr>software engineering</tr>
                </td>
            </table>
        </div>
    )
}

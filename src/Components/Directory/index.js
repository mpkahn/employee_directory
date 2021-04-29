import React from 'react'

function Directory(props){

    return (
        <table style={{width: "100%"}}>
            <thead>
                <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone Number <button className='btn btn-outline-dark btn-sm' onClick={props.sortNumber}>Filter<i className="fas fa-filter"></i></button></th>
                <th>Email <button className='btn btn-outline-dark btn-sm' onClick={props.sortEmail}>Filter<i className="fas fa-filter"></i></button></th>
                <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(user => 
                <tr style={{borderTop: ".5px solid gray"}}>
                <td>
                    <img src={user.picture.thumbnail} alt="profile"/>
                </td>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.location.state}, {user.location.country}</td>
                </tr>
                )}
            </tbody>
        </table>
    )
}

export default Directory

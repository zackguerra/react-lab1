import React from 'react';

const StudentListChild = props => {
    return(
        <div className="msg">
            <ul>
                {props.students.map((student, val) => (
                    <li key={val}>{student}</li>
                ))}
            </ul>
        </div>
    )
}
export default StudentListChild;
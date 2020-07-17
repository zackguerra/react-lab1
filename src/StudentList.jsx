import React, {Component} from 'react';
import StudentListChild from './StudentListChild'


class StudentList extends Component{
    state = {
        arr: [],
        isLoading: false        
    }

    componentDidMount(){
        this.setState({isLoading:true});
        setTimeout(() => {
            this.setState({
                arr:this.props.list,
                isLoading: false
            })
        }, 3000);
    }

    randomize = () => {
        const newArr = this.shuffle(this.state.arr);
        this.setState({
            arr: [...newArr]
        });
    };
    shuffle = a => {
        for(let i = a.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    render(){
        return (
        <>
        <h1 className="challengetitle">Challenge II</h1>
        <StudentListChild isLoading={this.state.isLoading} students={this.state.arr} />
        
        <center>
        <button className="btn-large" onClick={this.randomize}>RANDOM</button>
        </center>
        </>
        );
    }
}

export default StudentList;
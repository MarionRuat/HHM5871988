import React, {Component} from 'react';
import fileList from '../file.json';
import './List.css';
import Loader from '../circles-loader.svg';
import '../App.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wait: false,
        };
    }
    
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                wait : true,
            }) 
        }, 3000);
    }
    
    render() { 
        let display;

        if (this.props.card) {
            let match = new RegExp(this.props.card, "i");
            display = fileList.filter( card => match.test( card.username ) )
        } else {
            display = fileList
        }

        return ( 
            <div >
                {!this.state.wait && <img src={Loader} className="App-loader" alt="loader"/>}
                    {this.state.wait && display.map(image => (   
                     <div className ="listgrid">
                        <img src = {image.picture} />   
                        <p key={image.id}> {image.username} </p>
                     </div>
                    )
                 )}
            </div>
        )
    }
}

export default List;
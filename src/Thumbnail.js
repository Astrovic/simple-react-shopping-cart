import React from 'react';

/*export default class Thumbnail extends Component {
    render() {
        return (
            <div style={{margin: 20}}>
                <img style={{width: 150, height: 150}} src={this.props.url} alt=""/>    
            </div>
        )
    }
}*/

const Thumbnail = (props) => (
    <div style={{margin: 20}}>
        <img style={{width: 150, height: 150}} src={props.url} alt=""/>    
    </div>
);

export default Thumbnail;
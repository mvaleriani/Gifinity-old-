import React from 'react';

class GIFComp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            gifQuality: 'downsized',
        };
    }

    render(){
        return (
            <article className="gif-comp" style={{width: '50%'}}>
                <img className="gif" src={this.props.gifData.images[this.state.gifQuality].url} alt="" style={{width: '100%', maxWidth: '100%'}}/>
            </article>
        );
    }
}

export default GIFComp;
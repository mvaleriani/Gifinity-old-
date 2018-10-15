import React from 'react';
import { connect } from 'react-redux';
import { fetchTrendingGIFS, fetchSearchGIFS } from '../../actions/gifActions';
import GIFComp from './GIFComp';

class Content extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            currentTab: 'trendingGIFComps',
        };

        this.trendingGIFComps = [];
        this.searchGIFComps = [];
    }

    componentDidMount(){
        this.props.fetchTrendingGIFS(10, 0);
    }

    componentWillReceiveProps(newProps){
        if(newProps.trendingGIFs.length > this.trendingGIFComps.length){
            let currLength = this.props.trendingGIFs.length;
            let newLength = newProps.trendingGIFs.length;

            for (let i = currLength; i < newLength; i++) {
                let newGIFData = newProps.trendingGIFs[i];   
                console.log(newGIFData);
                
                this.trendingGIFComps.push(<GIFComp gifData={newGIFData}/>)
            }            
        }
        if (newProps.searchGIFs.length > this.searchGIFComps.length) {
            let currLength = this.props.searchGIFs.length;
            let newLength = newProps.searchGIFs.length;

            for (let i = currLength; i < newLength; i++) {
                let newGIFData = newProps.searchGIFs[i];
                this.searchGIFComps.push(<GIFComp gifData={newGIFData} />)
            }     
        }
    }

    render(){
        return (
            <main id='content'>
                {this.trendingGIFComps}
            </main>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let trendingGIFs = [];
    let searchGIFs = [];

    if (state.gifs.trendingGIFs && state.gifs.trendingGIFs.data) {
        trendingGIFs = state.gifs.trendingGIFs.data;
    }
    if (state.gifs.searchGIFs && state.gifs.searchGIFs.data) {
        searchGIFs = state.gifs.searchGIFs.data;
    }
    
    return ({
        trendingGIFs,
        searchGIFs,
    });
};
const mapDispatchToProps = dispatch => ({
    fetchTrendingGIFS: (num, offset) => dispatch(fetchTrendingGIFS(num, offset)),
    fetchSearchGIFS: (searchStr, num, offset) => dispatch(fetchSearchGIFS(searchStr, num, offset)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);
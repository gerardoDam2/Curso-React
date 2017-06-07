
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyCWjKP9dhQIBjXwj3qOZzknKBG7pRGHf7U'; 



class App extends Component{ 

    constructor(props){
        super(props);

        this.state= { 
            videos: [],
            selectedVideo:null
        };

       this.videoSearch('netflix')
    }
    render(){
        return ( 
            <div>
                <SearchBar onSearchTermChange={term=>this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect={selectedVideo=>this.setState({selectedVideo})} 
                videos={this.state.videos} />
            </div>);
    }

    videoSearch(term){
         YTSearch({key: API_KEY , term: term},(videos)=>{
            this.setState({videos:videos,
                selectedVideo:videos[0]
            });
        });
    }
}

ReactDom.render(<App/>,document.querySelector('.container'));

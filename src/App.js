import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends React.Component {
  state = {videos:[],selectedVideo: null};

  componentDidMount(){
      this.onTermSubmit('playboy')
    }


  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params:{
          q: term,
        }
    })
    console.log(response);

    this.setState({videos: response.data.items, selectedVideo: response.data.items[0] })
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo:video})

    }


  render(){
    return(
      <div className="container">
       <SearchBar onFormSubmit ={this.onTermSubmit} />
     
      <div className="row">
      <div className="col-8">
      <VideoDetail  video={this.state.selectedVideo} />
      </div>
      <div  className="col-4">
      <VideoList onVideoSelect={this.onVideoSelect} videos = {this.state.videos}  />
      </div>
      </div>
      
     </div>
     );
   }
  } 

export default App;

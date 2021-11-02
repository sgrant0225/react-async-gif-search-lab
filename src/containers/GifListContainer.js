import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
   
    state = {
        gifs: []
    };
    
 
    render() {
        return (
        <div> 
            <GifList gifs={this.state.gifs} />
            <GifSearch fetchGifs={this.fetchGifs} />
        </div>
        )
    }

   fetchGifs = (query = "dolphins") => {
       fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=kHDVylkwXAJcyw52K88OJvzbxIRChA6A&rating=g`)
       .then((response) => response.json())
       .then(({data}) => {
           
           this.setState({
               gifs: data.map( gif => ({ url: gif.images.original.url}))
           })
       })
   }

   componentDidMount() {
     this.fetchGifs()
   }
   
}

export default GifListContainer;


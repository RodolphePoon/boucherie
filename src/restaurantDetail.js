import React, { Component } from 'react';
import data from './boucherie.json';
import Marker from './Marker';
import GoogleMap from 'google-map-react';

const API_KEY= 'AIzaSyCcoWozx__Xlcj7DWovSOX2WzAO25h7AhQ'

class List extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      center:{
    lat:46.47369,
    lng:2.31162
  },zoom:5
    };
  }

  componentWillMount(){
    this.setState({
      length:data.length,
      index:this.props.location.state.index,
    })

  }

  precedent=()=>{
    this.setState({
      index:this.state.index-1
    })
  }

  suivant=()=>{ 
    this.setState({ 
      index:this.state.index+1 
    })
  }

  pressMarker=()=>{
    console.log('marker')
  }
  
  render() {
    return (
      <div style={{padding:10}}>
      <div style={{flexDirection: 'row' ,display: 'flex' }}> 
        <div style={{width: 100}}>
          {this.state.index!==0&&
            <button onClick={this.precedent}>precedent</button>
          }
        </div>
        <div style={{width: 200}}> 
          {this.state.index!==this.state.length-1&&
            <button onClick={this.suivant}>suivant</button>
          }
        </div>
      </div>

      <div>{data[this.state.index].Nom}</div>
      <div>{data[this.state.index].Libelle}</div>
      <div>{data[this.state.index].Adresse1}</div>
      <div>{data[this.state.index].CP_Ville}</div>
      <div>{data[this.state.index].Telephone}</div>
      <div>{data[this.state.index].lat}</div>
      <div>{data[this.state.index].lng}</div>
      <a href={data[this.state.index].extra}>{data[this.state.index].extra}</a>
 <div style={{ marginTop: 20,height:500 , width: 500}} >
            <GoogleMap
                bootstrapURLKeys={{ key: API_KEY}}
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}>
                    <Marker
                      onClick={this.pressMarker}
                      lat={data[this.state.index].lat}
                      lng={data[this.state.index].lng}
                      text={data[this.state.index].Nom}
                    />
            </GoogleMap>
          </div>



       
      </div>
      
    );
  }
}

export default List;

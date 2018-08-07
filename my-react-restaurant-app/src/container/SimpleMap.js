import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

  static defaultProps = {
    center: {
      lat: 30.26,
      lng: -97.74
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBqdKaoCRIEpRtf549s7RlOKe8IzT2KUB8" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={30.2672}
            lng={-97.7431}
            text={''}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

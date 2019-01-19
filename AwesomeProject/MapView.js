import propTypes from 'prop-types';
import React from 'react';
import {requireNativeComponent} from 'react-native';
// requireNativeComponent 自动把'RNTMap'解析为'RNTMapManager'
//export default requireNativeComponent('RNTMap', null);Map

class MapView extends React.Component {
    _onRegionChange = (event) => {
        if (!this.props.onRegionChange) {
          return;
        }
    
        // process raw event...
        this.props.onRegionChange(event.nativeEvent);
      }

    render() {
      return (<RNTMap {...this.props} 
        onRegionChange = {this._onRegionChange}
      />
      );
    }
  }

MapView.propTypes = {
  /**
   * Callback that is called continuously when the user is dragging the map.
   */
  onRegionChange :propTypes.func,
      /**
   * A Boolean value that determines whether the user may use pinch
   * gestures to zoom in and out of the map.
   */
zoomEnabled: propTypes.bool,

region: propTypes.shape({
    /**
     * 地图中心点的坐标。
     */
    latitude: propTypes.number.isRequired,
    longitude: propTypes.number.isRequired,

    /**
     * 最小/最大经、纬度间的距离。
     *
     */
    latitudeDelta: propTypes.number.isRequired,
    longitudeDelta: propTypes.number.isRequired,
  }),
};

var RNTMap = requireNativeComponent('RNTMap',MapView);
export default MapView;
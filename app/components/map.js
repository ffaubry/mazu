import Component from '@glimmer/component';
import { inject } from '@ember/service';
import { action } from '@ember/object';
// import esriConfig from 'esri/config';
// import { addProxyRule, getProxyRule, addProxy } from 'esri/core/urlUtils';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
// import WebTileLayer from 'esri/layers/WebTileLayer';
import ImageryLayer from 'esri/layers/ImageryLayer';

export default class MapComponent extends Component {
  @inject application;

  @action
  initialize(element) {
    // // esriConfig.request.proxyUrl = `https://www.arcgis.com/sharing/proxy/`;
    // addProxyRule({
    //   urlPrefix: 'http://tileservice.charts.noaa.gov/tiles/50000_1',
    //   proxyUrl: 'https://www.arcgis.com/sharing/proxy'
    // });
    // console.log(
    //   getProxyRule('http://tileservice.charts.noaa.gov/tiles/50000_1/GoogleMapsCompatible/{level}/{col}/{row}.png')
    // );
    // console.log(
    //   addProxy('http://tileservice.charts.noaa.gov/tiles/50000_1/GoogleMapsCompatible/{level}/{col}/{row}.png')
    // );

    // Define the RNC Tile Layer
    // const metadata = this.application.metadata;
    // const rncTileLayer = new WebTileLayer({
    //   urlTemplate: 'http://tileservice.charts.noaa.gov/tiles/50000_1/GoogleMapsCompatible/{level}/{col}/{row}.png',
    //   copyright: metadata.attribution,
    //   id: metadata.name
    // });

    const rncImageryLayer = new ImageryLayer({
      url: 'https://seamlessrnc.nauticalcharts.noaa.gov/arcgis/rest/services/RNC/NOAA_RNC/ImageServer'
    });

    const map = new Map({
      basemap: 'topo-vector',
      layers: [rncImageryLayer]
    });

    this.view = new MapView({
      container: element,
      map: map,
      center: [-118.71511, 34.09042],
      zoom: 11
    });
  }
}

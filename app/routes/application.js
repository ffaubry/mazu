import Route from '@ember/routing/route';
// import { inject } from '@ember/service';

export default class ApplicationRoute extends Route {
  // @inject application;

  // async beforeModel() {
  //   try {
  //     const reponse = await fetch('https://tileservice.charts.noaa.gov/tiles/50000_1/metadata.json');
  //     this.application.metadata = await reponse.json();
  //     console.log(this.application.metadata);
  //   } catch (error) {
  //     this.application.error = error;
  //   }
  // }
}

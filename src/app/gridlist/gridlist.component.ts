
import { Component, OnInit, Inject } from '@angular/core';
import { LoopBackConfig } from '../shared/sdk';
import { API_VERSION } from '../shared/baseUrl';
import { Dishes } from '../shared/sdk/models';
import { DishesApi } from '../shared/sdk/services';
import { Promotions } from '../shared/sdk/models';
import { PromotionsApi } from '../shared/sdk/services';
import { Leaders } from '../shared/sdk/models';
import { LeadersApi } from '../shared/sdk/services';
import { flyInOut, expand } from '../animations/app.animation';


@Component({
  selector: 'app-gridlist',
  templateUrl: './gridlist.component.html',
  styleUrls: ['./gridlist.component.scss']


})



export class GridlistComponent implements OnInit {

  leaders: Leaders[];
  errMess: string;
  dishes: Dishes[];
  dish: Dishes;
  dishka: Dishes;

  constructor(private leaderservice: LeadersApi, 
    private dishService: DishesApi, 
    @Inject('baseURL') private baseURL) {
      LoopBackConfig.setBaseURL(baseURL);
      LoopBackConfig.setApiVersion(API_VERSION);
      this.loadScripts();
    }

    ngOnInit() {
      this.leaderservice.find()
        .subscribe((leaders: Leaders[]) => this.leaders = leaders,
          errmess => this.errMess = <any>errmess);
       
      this.dishService.find()
          .subscribe((dishes: Dishes[]) => this.dishes = dishes,
            errmess => this.errMess = <any>errmess);
           
    }


  loadScripts() {
    const dynamicScripts = [
      "http://maps.googleapis.com/maps/api/js?libraries=weather,geometry,visualization,places,drawing&key=AIzaSyDmXybAJzoPZ6hH-Jhv7QMCSGgQ6MY8WqY",
      '../assets/js/jquery.js',
      "../assets/js/tether.min.js",
      "../assets/js/bootstrap.min.js",
     "../assets/js/chartist.min.js",
     "../assets/js/google-map-richmarker.min.js",
     "../assets/js/google-map-infobox.min.js",
     "../assets/js/google-map-markerclusterer.js",
     "../assets/js/google-map.js",
     "../assets/js/jquery.trackpad-scroll-emulator.min.js",
     "../assets/js/jquery.inlinesvg.min.js",
     "../assets/js/jquery.affix.js",
      "../assets/js/jquery.scrollTo.js",
     "../assets/libraries/slick/slick.min.js",
     "../assets/js/nouislider.min.js",
      "../assets/js/jquery.raty.js",
      "../assets/js/wNumb.js",
      "../assets/js/particles.min.js",
      "../assets/js/explorer.js",
      "../assets/js/explorer-map-search.js"
  
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}

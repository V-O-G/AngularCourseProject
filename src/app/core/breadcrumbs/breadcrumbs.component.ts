import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  routes: any;
  newCourseActive: boolean;

  constructor(
    location: Location, 
    router: Router,
  ) {
    router.events.subscribe(() => {
      if(location.path() != '') {
        const routesList = location.path().slice(1).split('/');
        this.routes = routesList.reduce((routes, route, i) => {
          const currentRoute = {};
          const arrayForRoutePath = routesList.slice(0, i + 1);
          const routePath = arrayForRoutePath.reduce(
            (total, current) => {
              return total + '/' + current;
            },'');
          currentRoute['name'] = route;
          currentRoute['path'] = routePath;
          return routes.concat(currentRoute);
        }, []);
      }
    });
  }
}

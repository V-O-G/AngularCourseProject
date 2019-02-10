import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NewCourseService } from '../shared/services/newCourse.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  routes: any;
  newCourseActive: boolean;

  constructor(
    location: Location, 
    router: Router,
    private newCourseService: NewCourseService,
  ) {
    router.events.subscribe((val) => {
      if(location.path() != '') {
        const routesList = location.path().slice(1).split('/');
        this.routes = routesList.reduce((routes, route, i) => {
          const currentRoute = {};
          const arrayForRoutePath = routesList.slice(0, i + 1);
          const routePath = arrayForRoutePath.reduce(
            (total, current) => {
              return total + '/' + current
            },'');
          currentRoute['name'] = route;
          currentRoute['path'] = routePath;
          return routes.concat(currentRoute);
        }, []);
      }
    });
  }

  ngOnInit() {
  }

  onNavigate(routerPath: string) {
    if(routerPath === '/courses') {
      this.newCourseService.addNewCourseActive.next(false);
    }
  }

}

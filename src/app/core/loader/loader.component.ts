import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../shared/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  show: boolean = true;

  private subscription: Subscription;

  constructor(
      private loaderService: LoaderService
  ) { }

  ngOnInit() { 
      this.subscription = this.loaderService.loaderState
          .subscribe((state: boolean) => {
            this.show = state;
          });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
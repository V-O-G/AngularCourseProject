import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchControlComponent } from './search-control/search-control.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { LabelInfoComponent } from './label-info/label-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent,
    BreadcrumbsComponent,
    SearchControlComponent,
    LoaderComponent,  
    LabelInfoComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    SearchControlComponent,
    LoaderComponent,
    LabelInfoComponent,
  ]
})
export class CoreModule { }

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { PageLayoutModule } from 'src/app/components/page-layout/page-layout.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    PageLayoutModule,
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}

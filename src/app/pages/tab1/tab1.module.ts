import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { PageLayoutModule } from 'src/app/components/page-layout/page-layout.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    PageLayoutModule,
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}

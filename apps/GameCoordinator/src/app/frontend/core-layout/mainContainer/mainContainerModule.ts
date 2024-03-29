import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './mainContainerRouting';

/* components */
import { MainContainerComponent } from './mainContainerComponent';
import { LayoutModule } from '../layout.module';
import { UIModule } from '../../UI/ui.module';
import { HomePageModule } from '../../pages/home/homePageModule';
import { GroupPageModule } from '../../pages/group/groupPageModule';
import { BrowsePageModule } from '../../pages/browse/browsePageModule';
import {CreateEventComponent} from '../../components/createEvent/createEventComponent';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        routing,
        UIModule,
        HomePageModule,
        GroupPageModule,
        BrowsePageModule,
        CreateEventComponent,
    ],
  declarations: [MainContainerComponent],
})
export class MainContainerModule {}

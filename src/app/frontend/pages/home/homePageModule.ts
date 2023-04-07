import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './homePageRouting';
import { AddBoardGameToCollectionDialogModule } from '../../dialogs/addBoardGameToCollectionDialog/addBoardGameToCollectionDialogModule';
import { CreateGroupDialogModule } from '../../dialogs/createGroup/createGroupDialogModule';
import { HomePageComponent } from './homePageComponent';
import { UIModule } from '../../UI/ui.module';
import { LayoutModule } from '../../core-layout/layout.module';

@NgModule({
    imports: [
        CommonModule,
        AddBoardGameToCollectionDialogModule,
        CreateGroupDialogModule,
        UIModule,
        LayoutModule
    ],
    declarations: [
        HomePageComponent
    ]
})
export class HomePageModule { }

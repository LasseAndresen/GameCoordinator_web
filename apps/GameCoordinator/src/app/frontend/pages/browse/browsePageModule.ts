import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIModule } from '../../UI/ui.module';
import { BoardgameDetailDialogModule } from '../../dialogs/boardgameDetailsDialog/boardgameDetailDialogModule';
import { BrowsePageComponent } from './browsePageComponent';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {BoardgameDetailComponent} from '../../components/boardgameDetail/boardgameDetailComponent';
import {ColumnHeaderNamePipe} from './pipes/columnHeaderName';

@NgModule({
  declarations: [BrowsePageComponent],
  imports: [
    CommonModule,
    UIModule,
    BoardgameDetailDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    BoardgameDetailComponent,
    ColumnHeaderNamePipe
  ],
})
export class BrowsePageModule {}

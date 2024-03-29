import { Component, OnDestroy, OnInit } from '@angular/core';
import { GroupPost } from '../../../backend/models/GroupPost';
import { FirestoreService } from '../../../backend/services/FirestoreService';
import { ApplicationContext } from '@services';
import { DialogHandle } from '@la-ui';
import { AddGroupPostDialogArgs } from './addGroupPostDialogArgs';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  templateUrl: './addGroupPostDialogComponent.html',
})
export class AddGroupPostDialogComponent implements OnDestroy, OnInit {
  public post: GroupPost;

  constructor(
    private _dialogHandle: DialogHandle,
    private _firestoreService: FirestoreService,
    private _applicationContext: ApplicationContext,
    private _dialogArgs: AddGroupPostDialogArgs
  ) {
    this.post = _dialogArgs.existingPost || new GroupPost();
    this.post.groupID = _dialogArgs.groupID;
    this.post.authorID = this._applicationContext.loggedInUser.guid;
    this.post.authorName = this._applicationContext.loggedInUser.name;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  public textChange() {
    // Check for tags
  }

  public async onConfirmClick() {
    if (!!this.post.timestamp) {
      this.post.editTimestamp = Timestamp;
    } else {
      this.post.timestamp = Timestamp;
    }
    await this._firestoreService.addNewGroupPost(this.post);
    this._dialogHandle.closeDialog();
  }

  public onCancelClick() {
    this._dialogHandle.closeDialog();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  modalDialog: any;

  constructor(public dialog:MatDialog
    ) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.modalDialog = this.dialog.open(FormDialogComponent)
  }

}

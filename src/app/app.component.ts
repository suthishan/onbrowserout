import { Component,HostListener } from '@angular/core';
import { ConfirmDialogModule } from './confirm-dialog/confirm-dialog.module';
import { ConfirmDialogService } from './confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'confirm-dialog';
  /**
   *
   */
   @HostListener('window:focus',['$event'])
   onFocus(event: any){
     console.log("User Leaving the tab");
     // alert ("you are leaving");
     this.showDialog();
     
   }
  constructor(private confirmDialogService: ConfirmDialogService) {

  }

  showDialog(): any {
    this.confirmDialogService.confirmThis('You are leaving the Exam tab ?', () =>  {
      console.log("yesy clicked");
    }, () => {
      console.log("No clicked");
    });
  }
}

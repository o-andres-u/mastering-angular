import { Component } from '@angular/core';
import {ConfirmationService, Message} from "primeng/components/common/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  msgs: Message[] = [];

  showInfo() {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
  }

  showWarn() {
    this.msgs = [];
    this.msgs.push({severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'});
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
  }

  showMultiple() {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Message 1', detail:'PrimeNG rocks'});
    this.msgs.push({severity:'info', summary:'Message 2', detail:'PrimeUI rocks'});
    this.msgs.push({severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'});
  }

  showSuccess(){
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Success Message', detail:'PrimeNG rocks'});
  }

  clear() {
    this.msgs = [];
  }
}

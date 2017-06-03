import { NgModule, Component, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule,
         DxDataGridComponent,
         DxTemplateModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import {Service, Company} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Service]
})
export class AppComponent {
   @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  name: string;
  dataSource: Company[];
   events: Array<string> = [];

  constructor(service: Service){
    this.dataSource = service.getCompanies();
  }

  sayHello(params) {
    if (params.validationGroup.validate().isValid){
    notify('hello ' + this.name +' !', "info", 2000);
    }
  }

  logEvent(eventName) {
    console.log(eventName);
    }
  
  onCellPrepared(e) {
        if (e.rowType === "data" && e.column.command === "edit") {
            var isEditing = e.row.isEditing,
                $links = e.cellElement.find(".dx-link");

            $links.text("");
                $links.filter(".dx-link-delete").addClass("dx-icon-trash");
        }
    }

    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift({
            location: 'before'
        }, {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'refresh',
                    onClick: this.refreshDataGrid.bind(this)
                }
            });
    }

    refreshDataGrid() {
        this.dataGrid.instance.refresh();
    }


}

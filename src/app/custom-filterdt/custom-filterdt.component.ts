import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { DatatableexampleComponent } from '../datatableexample/datatableexample.component';

@Component({
  selector: 'app-custom-filterdt',
  templateUrl: './custom-filterdt.component.html',
  styleUrls: ['./custom-filterdt.component.css']
})
export class CustomFilterdtComponent implements OnDestroy, OnInit {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  min: number;
  max: number;

  dtOptions: DataTables.Settings = {};
  private apiUrl = 'http://localhost/angular7demo/person.php?type=get-person1';

  ngOnInit(): void {
    // We need to call the $.fn.dataTable like this because DataTables typings do not have the "ext" property
    $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {

      console.log(data[1]);
    
      
      const id = parseFloat(data[0]) || 0; // use data for the id column
      if ((isNaN(this.min) && isNaN(this.max)) ||
        (isNaN(this.min) && id <= this.max) ||
        (this.min <= id && isNaN(this.max)) ||
        (this.min <= id && id <= this.max)) {
        return true;
      }
      return false;
    });

    this.dtOptions = {
      ajax: this.apiUrl,
      columns: [{
        title: 'id',
        data: 'id'
      }, {
        title: 'first_name',
        data: 'first_name'
      }, {
        title: 'last_name',
        data: 'last_name',
      },
      {
        title: 'date_of_birth',
        data: 'date_of_birth',
      },

      ]
    };
  }

  ngOnDestroy(): void {
    $.fn['dataTable'].ext.search.pop();
  }

  filterById(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

}

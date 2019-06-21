import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-indivisual-dt',
  templateUrl: './indivisual-dt.component.html',
  styleUrls: ['./indivisual-dt.component.css']
})
export class IndivisualDtComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;
  private apiUrl = 'http://localhost/angular7demo/person.php?type=get-person1';
  //dtOptions: DataTables.Settings = {};
  dtOptions: any = {};
  constructor() { }
  ngOnInit(): void {
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

      ],
       // Declare the use of the extension in the dom parameter
       dom: 'Bfrtip',
       // Configure the buttons
       buttons: [
         'columnsToggle',
         'colvis',
         'copy',
         'print',
         'excel',
         {
           text: 'Some button',
           key: '1',
           action: function (e, dt, node, config) {
             alert('Button activated');
           }
         }
       ]
     };
  }
  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((
      dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup chnage', function () {
          if (that.search() !== this['value']) {
            that.search(this['value'])
              .draw();
          }
        });
      });
    });
  }
  

}

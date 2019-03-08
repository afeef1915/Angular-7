import { Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-bootsrap',
  templateUrl: './add-bootsrap.component.html',
  styleUrls: ['./add-bootsrap.component.css']
  // providers: [BsModalService]
})
export class AddBootsrapComponent {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }
  // constructor() { }
  // ngOnInit() {
  // }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModalWithComponent() {
    const initialState = {
        list: [
          'Open  Modal with Component',
          'Pass Your Data',
          'Do Something else'
        ],
        title:  'Modal with Compoenent'
    };
    this.modalRef = this.modalService.show(ModalContentComponent, {initialState});
    this.modalRef.content.closeBtnName = 'Close';
  }


}
@Component({
  selector: 'app-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul *ngIf="list.length">
        <li *ngFor="let item of list">{{item}}</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
    </div>
  `
})

export  class  ModalContentComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any [] = [];
  constructor(public bsModalRef: BsModalRef) {}
  ngOnInit() {
    this.list.push('doneee');
  }
}


// export class  DemoModalServiceNestedComponent  implements OnInit {
//   modalRef: BsModalRef | null;
//   modalRef2: BsModalRef;
//   constructor(private modalService: BsModalService) {}

//    openModal(template: TemplateRef<any>) {
//     this.modalRef = this.modalService.show(template, { class: 'modal-sm'});
//    }

//    openModal2(template: TemplateRef<any>) {
//       this.modalRef2 = this.modalService.show(template, { class: 'second'});
//    }
//    ngOnInit() {}

//    closeFirstModal() {
//       if (!this.modalRef) {
//         return;
//       }
//    }

//   }
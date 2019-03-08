import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-addnested-bootstrap',
  templateUrl: './addnested-bootstrap.component.html',
  styleUrls: ['./addnested-bootstrap.component.css']
})
export class AddnestedBootstrapComponent implements OnInit {
  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { class: 'second' });
  }
  closeFirstModal() {
    if (!this.modalRef) {
      return;
    }
    this.modalRef.hide();
    this.modalRef = null;
  }


  ngOnInit() {
  }

}

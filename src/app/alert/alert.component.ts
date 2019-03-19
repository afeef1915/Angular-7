import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../alert.service';
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
// import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;
  constructor(private alertService: AlertService) { }

  ngOnInit() {
      this.subscription = this.alertService.getMessage().subscribe(message => {
              this.message = message;
      });

  }

  ngOnDestroy() {
     this.subscription.unsubscribe();
  }

}

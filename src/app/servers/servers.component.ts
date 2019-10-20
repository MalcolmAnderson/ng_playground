import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  userName = '';
  btnResetNameDisabled = true;
  serverCreated = false;

  constructor() {
    this.allowNewServer = true;
  }

  ngOnInit() {}

  onCreateServer() {
    console.log('test');
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created.  Name is ' + this.serverName;
  }

  // checkIfEmpty() {
  //   if (this.userName === '') {
  //     this.btnResetNameDisabled = true;
  //   }
  // }

  // onClickResetName() {
  //   this.userName = '';
  // }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';
  userName: string = '';
  btnResetNameDisabled: boolean = true;
  serverCreated: boolean = false;
  servers: string[] = ['Testserver', 'Testserver2', 'Testserver3'];

  constructor() {
    this.allowNewServer = true;
  }

  ngOnInit(): void {}

  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
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

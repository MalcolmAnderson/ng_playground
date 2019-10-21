import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offLine';

  constructor() {
    const randomVal = Math.random();
    this.serverStatus = randomVal > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(): string  {
    return this.serverStatus;
  }

  getColor(): string {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}

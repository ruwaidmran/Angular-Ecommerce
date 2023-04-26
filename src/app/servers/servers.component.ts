import {
  Component,
  OnInit
} from '@angular/core';
@Component({
  selector: 'app-servers',
  // templateUrl: './servers.component.html', 
  // template: '<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  title = "Servers"
  allowNewServer = false;

  serverCreationStatus = 'server not created';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}

  onServerStatus() {
    this.serverCreationStatus = 'server is created';
  }

}

import { Component, OnInit } from '@angular/core';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(
    private _fuseSplashScreenService: FuseSplashScreenService,
  ) { }

  ngOnInit(): void {
  }

}

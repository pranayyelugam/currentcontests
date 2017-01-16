import { Component , OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { CurrentserviceService } from './Currentservice.service';
import { ongoing1 } from './ongoing1';
import { upcoming1 } from './upcoming1';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CurrentserviceService]
})
export class AppComponent {
  title = 'app works!';
  ongoingres: ongoing1[];
  upcomingres: upcoming1[];

  constructor(private currentservice: CurrentserviceService){

  }

  ngOnInit(){
    this.currentservice.getdata()
        .subscribe(res => {
          console.log(res.result);
          this.ongoingres = res.result.ongoing;
          this.upcomingres = res.result.upcoming;
        })
  }




}

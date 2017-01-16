import { Component , OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { CurrentserviceService } from './Currentservice.service';
import { ongoing } from './ongoing';
import { upcoming } from './upcoming';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CurrentserviceService]
})
export class AppComponent {
  title = 'app works!';
  ongoingres: ongoing[];
  upcomingres: upcoming[];

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

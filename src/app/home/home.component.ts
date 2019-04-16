import { Component, OnInit } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  alert: Alert = null;
  hierarchies = null;

  constructor() {
    this.alert = {
      type: 'danger',
      message: 'This is a danger alert'
    };
    this.hierarchies = {
      published: [
        {
          business: 'International Banking',
          published: new Date(new Date().getTime() + (-5 * 24 * 60 * 60 * 1000)),
          open: 5
        },
        {
          business: 'Canadian Banking',
          published: new Date(new Date().getTime() + (-10 * 24 * 60 * 60 * 1000)),
          open: 10
        },
        {
          business: 'Audit',
          published: new Date(new Date().getTime() + (-15 * 24 * 60 * 60 * 1000)),
          open: 15
        }
      ],
      proposed: [
        {
          business: 'Treasury',
          published: new Date(new Date().getTime() + (-30 * 24 * 60 * 60 * 1000)),
          open: 30
        },
        {
          business: 'Canadian Banking',
          published: new Date(new Date().getTime() + (-25 * 24 * 60 * 60 * 1000)),
          open: 25
        },
        {
          business: 'Audit',
          published: new Date(new Date().getTime() + (-20 * 24 * 60 * 60 * 1000)),
          open: 20
        }
      ],
      drafts: [
        {
          business: 'General Counsel',
          published: new Date(new Date().getTime() + (-35 * 24 * 60 * 60 * 1000)),
          open: 35
        },
        {
          business: 'Canadian Banking',
          published: new Date(new Date().getTime() + (-40 * 24 * 60 * 60 * 1000)),
          open: 40
        },
        {
          business: 'International Banking',
          published: new Date(new Date().getTime() + (-45 * 24 * 60 * 60 * 1000)),
          open: 45
        }
      ]
    }
  }

  ngOnInit() {
  }

}

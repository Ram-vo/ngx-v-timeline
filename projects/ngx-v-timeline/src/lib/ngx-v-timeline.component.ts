import { Component, OnInit, Input } from '@angular/core';
import { TimelineItem } from '../public-api';

@Component({
  selector: 'lib-ngx-v-timeline',
  templateUrl: './ngx-v-timeline.component.html',
  styleUrls: ['./ngx-v-timeline.component.css'],
})
export class NgxVTimelineComponent implements OnInit {
  list: TimelineItem[] = [];
  color?: string = '#2a2b35';


  constructor() {}

  @Input()
  set items(list: TimelineItem[]) {
    this.list = list;
  }

  ngOnInit() {
    this.colorUpdate();
  }

  action(item: TimelineItem) {
    if (item.command) {
      item.command();
    }
  }

  colorUpdate(){
    document.documentElement.style.setProperty(`--color-bg`, this.color); //suffix may be px or ''
  }
}

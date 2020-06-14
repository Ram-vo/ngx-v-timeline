# NgxVTimeline

A simple and responsive easy to customize Angular Timeline Component

## Installation

```javascript
$ npm i ngx-v-timeline
```
## Usage

### Import

```javascript
import { NgxVTimelineModule } from 'ngx-v-timeline';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxVTimelineModule
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
### Component

```javascript
import { TimelineItem } from 'ngx-v-timeline';

...
 items: TimelineItem[] = [];
  popupMessage = 'Hello World';
 
  ngOnInit(): void {
    const self = this;
 
    this.items.push({
      label: 'Action',
      icon: 'fa fa-calendar-plus-o',
      styleClass: 'teste',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      title: 'June 29, 2020, 10:12',
      command() {
        alert(`test: ${self.popupMessage}`);
      }
    });
 
    this.items.push({
      label: 'Action',
      icon: 'fa fa-plus',
      styleClass: 'teste',
      content: `Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.`,
      title: 'June 08, 2020, 12:00',
      command() {
        alert('Action!');
      }
    });
  }
```
### Template

```html
<lib-ngx-v-timeline [(items)]="items" [color]="gray" ></lib-ngx-v-timeline>
```

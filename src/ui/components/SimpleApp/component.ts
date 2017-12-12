import Component, { tracked } from '@glimmer/component';

export default class SimpleApp extends Component {
  @tracked examples: any = [];
  @tracked examples2: any = [];
  @tracked temp: any = [];

  constructor(options) {
    super(options);
    
     for (var i = 0; i < 5000; ++i) {
       this.examples.push({ text: Math.random().toString(), id: "label-"+i  })
       this.examples2.push({ text: Math.random().toString(), id: Math.random().toString() })
     }
  }


  updateGlimmer() {
    setTimeout(clearInterval, 60000, setInterval(function () {
      this.temp = this.examples;
      this.examples = this.examples2;
      this.examples2 = this.temp;
    }.bind(this), 0));
  }


  didInsertElement() {
    this.updateGlimmer();
  }
}

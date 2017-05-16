export class TabsController {

    constructor() {
        
        this.tabs =[ {title: 'Burger', template :'burger'}, 
        {title: 'Application', template :'application'},
        {title: 'tourte', template :'tourte'},
        {title: 'caniche', template : 'caniche'}
        ];
        this.tab = 0;
    }
    changeTab(tab){
    	this.tab=tab;
    }
    navigateTab (direction) {
    this.tab = (this.tabs.length + this.tab + direction) % this.tabs.length;

    // if (this.tab === 0 && direction === -1) {
    //   this.tab = this.tabs.length - 1
    //   return
    // }
    // if (this.tab === this.tabs.length - 1 && direction === 1) {
    //   this.tab = 0
    //   return
    // }
    // this.tab += direction
  }
      getTemplate (tab) {
    return `views/${tab.template}.html`;
  }
}
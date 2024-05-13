export default class Components extends HTMLElement {
    constructor() {
        super();
        
        this.innerHTML = this.render();
        
        
    }

    render() {
        return `
            <nav-bar-hello></nav-bar-hello>
            
            
        `;
    }
}
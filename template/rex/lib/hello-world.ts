const template = document.createElement("template");
template.innerHTML = `<div class="text-black bg-slate-600 text-lg ">hello rex</div>`;

class HelloWorld extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
    }
  
    disconnectedCallback() {
    }
  
    render() {
        this.appendChild(template.content.cloneNode(true));
    }
  }

  export { HelloWorld };
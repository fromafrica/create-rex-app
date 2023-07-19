const template = document.createElement("template");
template.innerHTML = `<div class="text-white w-full h-full bg-red-700 text-lg ">404 not found</div>`;

class ErrorPage extends HTMLElement {
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

  export { ErrorPage };
import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="notification"
export default class extends Controller {
    connect() {
      if (!this.isPreview) { 
          setTimeout(()=>{ 
              this.element.classList.remove('hidden'); 
              this.element.classList.add("transform", "ease-out", "duration-300", "transition", "transition-y-2", "opacity-2", "sm:translate-y-0", "sm:translate-x-2");

              setTimeout(() => { 
                  this.element.classList.add("translate-y-0", "opacity-100", "sm:translate-x-0");
              }, 100)
          }, 500)
      }

      setTimeout(() => { 
          this.close();
      }, 5000);
  }

    close() { 
        this.element.classList.remove("transform", "ease-out", "duration-300", "transition", "transition-y-2", "opacity-2", "sm:translate-y-0", "sm:translate-x-2");
        this.element.classList.add("opacity-0");

        // trigger transition
        setTimeout(() => { 
            this.element.classList.add('opacity-0');
        }, 100);

        // remove element after transition 

        setTimeout(() => { 
            this.element.remove();
        }, 300);
    }

    get isPreview() { 
        return document.documentElement.hasAttribute('data-turbolinks-preview');
    }
}

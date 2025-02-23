import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="removals"
export default class extends Controller {
  connect() {
    // Force reflow to restart animation
    this.element.style.animation = "none";
    this.element.offsetHeight; // Trigger reflow
    this.element.style.animation = null;
  }
  
  remove() {
    this.element.remove()
  }
}

import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('name') inputName: ElementRef;
  @ViewChild('country') inputCountry: ElementRef;
  @ViewChild('postal') inputPostal: ElementRef;

  constructor(private renderer: Renderer2) { }

  /**
   * disables autofit functionality on elements form.
   */
  disableAutofit(): void {
    this.addAutocomplete(this.inputCountry);
    this.addAutocomplete(this.inputName);
    this.addAutocomplete(this.inputPostal);
  }

  /**
   * disables autofit in the html element by adding invalid autocomplete value
   * @param element the element for autofit disable
   */
  private addAutocomplete(element: ElementRef): void {
    this.renderer.setAttribute(element.nativeElement, 'autocomplete', 'ÑÇOff');
  }
}

import { Component, Renderer2, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('name') inputName: ElementRef;
  @ViewChild('country') inputCountry: ElementRef;
  @ViewChild('postal') inputPostal: ElementRef;
  private fillElements: ElementRef[];

  constructor(private renderer: Renderer2) { }

   ngOnInit(): void {
    this.fillElements = [this.inputCountry, this.inputName, this.inputPostal];
  }

  /**
   * disables autofit functionality on elements form.
   */
  disableAutofit(): void {
    this.fillElements.forEach(element => {
      this.addAutocomplete(element);
    });
  }

  /**
   * disables autofit in the html element by adding invalid autocomplete value
   * @param element the element for autofit disable
   */
  private addAutocomplete(element: ElementRef): void {
    this.renderer.setAttribute(element.nativeElement, 'autocomplete', 'ÑÇOff');
  }
}

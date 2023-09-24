import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {

  private _slides: string[] = [];
  @Input()
  public set slides(slides: string[]) {
    this._slides = slides;
    this.currentSlide = slides[0];
  }

  public currentSlide: string = '';

  constructor() { }

  public getNextSlide(): void {
    const currentIndex = this._slides.indexOf(this.currentSlide);
    const nextIndex = currentIndex === (this._slides.length - 1) ? 0 : currentIndex + 1;
    this.currentSlide = this._slides[nextIndex];
  }

  public getPrevSlide(): void {
    const currentIndex = this._slides.indexOf(this.currentSlide);
    const prevIndex = currentIndex === 0 ? (this._slides.length - 1) : currentIndex - 1;
    this.currentSlide = this._slides[prevIndex];
  }

}

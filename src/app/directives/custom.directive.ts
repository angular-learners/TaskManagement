import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private elementRef:ElementRef) { 
          this.elementRef.nativeElement.style.color="red";
          this.elementRef.nativeElement.style.backgroundColor="black";
          this.elementRef.nativeElement.style.padding="5px";
  }

}

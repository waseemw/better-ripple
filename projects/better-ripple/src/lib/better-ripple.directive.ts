import { AfterViewInit, Directive, ElementRef, Input, NgZone } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { Platform } from '@angular/cdk/platform';

@Directive({
  selector: '[betterRipple]'
})
export class BetterRippleDirective extends MatRipple implements AfterViewInit {

  /***
   * timeout for ripple in ms, 100 by default
   */
  @Input() rippleTimeout = 100;

  /**
   * If true, there will be no ripple if the click was on a child rather than the element itself
   */
  @Input()
  set noRippleOnPropagation(_: any) {
    this.noPropagation = true;
  }

  private noPropagation = false;

  private touchMoved = false;

  constructor(private elRef: ElementRef<HTMLElement>, private zone: NgZone, private platform: Platform) {
    super(elRef, zone, platform, {}, undefined);
  }

  ngAfterViewInit() {
    const element = this.elRef.nativeElement as HTMLElement;
    this.trigger = { addEventListener: () => null, removeEventListener: () => null } as any;


    // When clicked by a mouse, just ripple as it can't be done by mistake
    element.addEventListener('mousedown', (ev) => {
      if (!this.touchMoved && (!this.noPropagation || ev.target === this.elRef.nativeElement)) {
        this.launch(ev.clientX, ev.clientY);
      }
    }, { passive: true });


    // When touch starts, start timeout
    element.addEventListener('touchstart', e => this.touchEvent(e), { passive: true });

    // If user is scrolling don't make a ripple
    element.addEventListener('touchmove', () => this.touchMoved = true, { passive: true });

    // If touch is cancelled by device or anything else, don't do a ripple
    element.addEventListener('touchcancel', () => this.touchMoved = true, { passive: true });


    // When finger is pulled, disable other events and do a ripple
    element.addEventListener('touchend', e => !this.touchMoved && this.doRipple(e), { passive: true });
  }

  private touchEvent(e: TouchEvent) {
    this.touchMoved = false;
    setTimeout(() => {
      if (!this.touchMoved) {
        this.doRipple(e);
      }
    }, this.rippleTimeout);
  }

  private doRipple(e: TouchEvent) {
    this.touchMoved = true;
    const touches = e.touches.length > 0 ? e.touches : e.changedTouches;
    const touch = touches[touches.length - 1];
    this.launch(touch.clientX, touch.clientY);
  }

}

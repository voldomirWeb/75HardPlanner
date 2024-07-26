import {Directive, HostBinding, Input} from '@angular/core';
import {twMerge} from 'tailwind-merge';

export type ButtonVariant = 'primary' | 'secondary' | 'destructive';

const variantStyles: { [key in ButtonVariant]: string } = {
  primary:
    'w-full text-black text-semibold',
  secondary:
    'bg-white !text-primary font-semibold hover:bg-subtlegray active:bg-lightgray border-primary disabled:text-secondary/40 ' +
    'disabled:border-primary/40 disabled:hover:bg-white disabled:active:bg-white',
  destructive: 'bg-red font-semibold !text-white',
};

@Directive({
  selector: '[appButton]',
  standalone: true
})
export class ButtonDirective {

  @Input() public variant: ButtonVariant = 'primary';
  @Input() public type: 'button' | 'submit' = 'button';

  @Input() public classList: string = '';

  @HostBinding('class')
  public get class() {
    return twMerge(
      'relative flex items-center justify-center py-5 px-6 appearance-none outline-none items-center min-h-6 rounded-md focus:outline-none h-6 has-[mat-icon]:gap-2',
      variantStyles[this.variant],
      this.classList
    );
  }

  constructor() {
  }

}

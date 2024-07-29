import {Directive, HostBinding, Input} from '@angular/core';
import {twMerge} from 'tailwind-merge';

export type ButtonVariant = 'primary' | 'secondary' | 'destructive';

const variantStyles: { [key in ButtonVariant]: string } = {
  primary:
    'bg-secondary font-medium w-full text-white py-4 rounded-md',
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
      'relative flex items-center justify-center appearance-none outline-none items-center rounded-md focus:outline-none has-[mat-icon]:gap-2',
      variantStyles[this.variant],
      this.classList
    );
  }

  constructor() {
  }

}

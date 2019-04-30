import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {RadiobuttonOption} from '../home.component';


@Component({
  selector: 'app-card-radiobutton',
  templateUrl: './card-radiobutton.component.html',
  styleUrls: ['./card-radiobutton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CardRadiobuttonComponent),
      multi: true
    }
  ]
})
export class CardRadiobuttonComponent implements OnInit, ControlValueAccessor {
  @Input() options: RadiobuttonOption[];
  private value = 'all';

  selectedOption: RadiobuttonOption;
  constructor() { }

  ngOnInit() {

  }

  optionSelect(option: RadiobuttonOption) {
    this.writeValue(option.value);
    this.onTouch();
  }

  onTouch: any = () => {};

  onModelChange: any = () => {};

  writeValue(value: any) {
    this.value = value;
    const selectedEl = this.options.find(el => el.value === value);
    if (selectedEl) {
      this.selectedOption = selectedEl;
      this.onModelChange(this.selectedOption.value);
    }
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

}

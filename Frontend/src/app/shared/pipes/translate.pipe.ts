import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from "../services/translate.service";
import { Observable } from 'rxjs';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateService: TranslateService) {}

  transform(value: string): Observable<string> {
    return this.translateService.translate(value);
  }
}

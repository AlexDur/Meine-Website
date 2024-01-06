import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private currentLang = new BehaviorSubject<string>('de');
  private translations: any = {};

  constructor(private http: HttpClient) {
  }

  use(lang: string): Observable<any> {
    this.currentLang.next(lang);
    if (!this.translations[lang]) {
      return this.http.get(`/assets/i18n/${lang}.json`).pipe(
        map(translation => {
          this.translations[lang] = translation;
          console.log('Geladene Übersetzung:', translation);
          return translation;
        })
      );
    } else {
      return new BehaviorSubject(this.translations[lang]);
    }
  }

  translate(key: string): Observable<string> {
    return this.currentLang.asObservable().pipe(
      map(lang => {
        // Zugriff auf die Übersetzung für verschachtelten Schlüssel
        const keys = key.split('.');
        let translation = this.translations[lang];

        for (const k of keys) {
          translation = translation?.[k];
          if (!translation) break;
        }

        // Fallback, wenn keine Übersetzung gefunden wird
        return translation || `N. gefundene Übersetzung: ${key}`;
      })
    );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private currentLang = new BehaviorSubject<string>('de');
  private translationsLoaded = new BehaviorSubject<boolean>(false);

  private translations: any = {};

  constructor(private http: HttpClient) {
  }

  use(lang: string): Observable<any> {
    this.currentLang.next(lang);
    if (!this.translations[lang]) {
      if (!this.translationsLoaded.getValue()) {
        return this.http.get(`/assets/i18n/${lang}.json`).pipe(
          map(translation => {
            this.translations[lang] = translation;
            this.translationsLoaded.next(true);
            console.log('Geladene Übersetzung:', translation);
            return translation;
          })
        );
      } else {
        return of(this.translations[lang]);
      }
    } else {
      return of(this.translations[lang]);
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

  areTranslationsLoaded(): Observable<boolean> {
    return this.translationsLoaded.asObservable();
  }

}

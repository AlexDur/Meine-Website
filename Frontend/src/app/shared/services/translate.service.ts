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
    // Aktualisiert den aktuellen Sprachzustand.
    this.currentLang.next(lang);
    // Objekt this.translations speichert alle geladenen Übersetzungen
    // Prueft, ob es bereits einen Eintrag für die angeforderte Sprache ("lang") gibt
    if (!this.translations[lang]) {
      // Prüft, ob die Übersetzung für die angeforderte Sprache bereits geladen wurde
      // getValue() liefert den aktuellen Wert des BehaviorSubjects. Falls false, noch keine Übersetzung geladen
      if (!this.translationsLoaded.getValue()) {
        // HTTP-Client um JSON aus Ordner zu laden (dynamisch mit lang)
        return this.http.get(`/assets/i18n/${lang}.json`).pipe(
          map(translation => {
            // Übersetzungsobjekt, das von der HTTP-Anfrage zurückgegeben wurde, wird dem translations-Objekt zugewiesen.
            this.translations[lang] = translation;
            // Übersetzungen wurden geladen
            this.translationsLoaded.next(true);
            console.log('Geladene Übersetzung:', translation);
            return translation;
          })
        );

        // Falls this.translationsLoaded.getValue() true zurückgibt, bedeutet das, dass die Übersetzungen bereits geladen sind.
        // In diesem Fall wird einfach die bereits geladene Übersetzung zurückgegeben, ohne eine neue HTTP-Anfrage zu starten.
      } else {
        return of(this.translations[lang]);
      }
      //  wenn bereits eine Übersetzung für die angefragte Sprache in this.translations vorhanden ist.
      //  In diesem Fall wird diese Übersetzung direkt zurückgegeben.
    } else {
      return of(this.translations[lang]);
    }
  }


  translate(key: string): Observable<string> {
    return this.currentLang.asObservable().pipe(
      map(lang => {
        // Zugriff auf die in JSON verschachtelte Übersetzung
        const keys = key.split('.');
        // Initialisierung der Variable, die auf die Übersetzungen für die aktuelle Sprache "lang" im Übersetzungsobjekt zugreift
        let translation = this.translations[lang];

        for (const k of keys) {
          translation = translation?.[k];
          if (!translation) {break;}
        }

        // Fallback, wenn keine Übersetzung gefunden wird
        return translation !== undefined ? translation : 'Home';
      })
    );
  }

  areTranslationsLoaded(): Observable<boolean> {
    return this.translationsLoaded.asObservable();
  }


}

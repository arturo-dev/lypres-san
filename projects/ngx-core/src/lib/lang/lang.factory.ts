import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Injector } from '@angular/core';
import { AppEnv } from '../init/config/config';

export function languageLoader(http: HttpClient, injector: Injector) {
  const appEnv = injector.get(AppEnv);
  return new TranslateHttpLoader(
    http,
    `/v1/language/`,
    '.json'
  );
}

import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ConfigFactory } from './init/config/config.factory';
import { ConfigService } from './init/config/config.service';
import { Environment } from './init/config/config';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { languageLoader } from './lang/lang.factory';

@NgModule({
  imports: [
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: languageLoader,
        deps: [HttpClient, Injector]
      },
    }),
  ],
  providers: [
    {
      provide: 'AppEnv',
      useClass: Environment,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigFactory,
      deps: [ConfigService],
      multi: true,
    },
  ]
})
export class NgxCoreModule {}

import { NgModule } from '@angular/core';
import { AngularDynamicStylePluginLibComponent } from './angular-dynamic-style-plugin-lib.component';
import { ApplyDynamicStylesPipe } from './apply-dynamic-styles.pipe';

@NgModule({
  declarations: [AngularDynamicStylePluginLibComponent, ApplyDynamicStylesPipe],
  imports: [],
  exports: [AngularDynamicStylePluginLibComponent, ApplyDynamicStylesPipe]
})
export class AngularDynamicStylePluginLibModule {}

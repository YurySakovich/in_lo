/* Modules */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

/* Components */
import {LogoSvgComponent} from './logo-svg/logo-svg.component';
import {BottomArrowSvgComponent} from './bottom-arrow-svg/bottom-arrow-svg.component';
import {UserSvgComponent} from './user-svg/user-svg.component';
import {MeasurementSvgComponent} from './measurement-svg/measurement-svg.component';
import {PlanSvgComponent} from './plan-svg/plan-svg.component';

const modules: any[] = [CommonModule];

const components: any[] = [BottomArrowSvgComponent, UserSvgComponent, LogoSvgComponent];

@NgModule({
  imports: [...modules],
  declarations: [...components, MeasurementSvgComponent, PlanSvgComponent],
  providers: [],
  exports: [...components],
  entryComponents: [...components],
})
export class SvgModule {}

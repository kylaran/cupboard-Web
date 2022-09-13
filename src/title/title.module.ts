import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBodyComponent } from './title-body/title-body.component';
import { TitleContentComponent } from './title-content/title-content.component';
import { TitleFooterComponent } from './title-footer/title-footer.component';
import { TitleHeaderComponent } from './title-header/title-header.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TitleBodyComponent, TitleContentComponent, TitleFooterComponent, TitleHeaderComponent],
    exports: [TitleBodyComponent, TitleContentComponent, TitleFooterComponent, TitleHeaderComponent]
})
export class TitleModule {}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applyDynamicStyles'
})
export class ApplyDynamicStylesPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const val = value.replace(/[\s\n]+/g, '').match(/{(.*?)}/);
    if (!val) {
      return '';
    }
    const styles = {};
    val[1].split(';').forEach(ele => {
      ele = ele.replace(/[\s\n]+/g, '');
      if (!ele) {
        return styles;
      }
      const [style, prop] = ele.split(':');
      const appliedStyle = prop ? prop.match(/"(.*?)"/) : null;
      styles[style] =
        appliedStyle && appliedStyle.length ? appliedStyle[1] : prop;
    });
    return styles;
  }
}

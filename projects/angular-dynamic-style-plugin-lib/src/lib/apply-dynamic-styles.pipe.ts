import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applyDynamicStyles'
})
export class ApplyDynamicStylesPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const val = value.replace(/[\s\n]+/g, '').match(/{(.*?)}/);
    // console.log(val);
    if (!val) {
      return '';
    }
    const styles = {};
    const vals = val[1].split(';').forEach(ele => {
      ele = ele.replace(/[\s\n]+/g, '');
      if (ele) {
        const [style, prop] = ele.split(':');
        const appliedStyle = prop.match(/"(.*?)"/);
        if (appliedStyle) {
          styles[style] = appliedStyle[1];
        } else {
          styles[style] = prop;
        }
      }
    });
    // console.log(styles);
    // return { color: "blue", background: "#ffeeaa" };
    return styles;
  }
}

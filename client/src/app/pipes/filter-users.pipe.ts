import { Pipe, PipeTransform } from '@angular/core';
import { Server } from '../models/models';

@Pipe({
  name: 'filteredServers',
})
export class FilteredServersPipe implements PipeTransform {
  transform(value: Array<Server>, str: string) {
    console.log('STR : ', str);
    if (str == '') return value;

    let arr = value.filter((item) => item.ServerName.includes(str));
    console.log('ARR : ', arr);
    return arr;
  }
}

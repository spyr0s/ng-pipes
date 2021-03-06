import {PipeTransform, Pipe} from '@angular/core';
import GeneralHelper from '../helpers/helpers';

@Pipe({name: 'pick'})
export class PickPipe implements PipeTransform {

  transform(obj: any, ...args: Array<string>): Object {
    if (Array.isArray(obj) || !GeneralHelper.isObject(obj)) {
      return obj;
    }

    return args.reduce((o, k) => Object.assign(o, {[k]: obj[k]}), {});
  }
}

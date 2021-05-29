import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, args: string): string {
    const limit = args ? parseInt(args, 10) : 10;
    const trail = '...';
    const plainValue = value.replace(/<[^>]*>/g, '');

    return plainValue.length > limit ? plainValue.substring(0, limit) + trail : plainValue;
  }

}

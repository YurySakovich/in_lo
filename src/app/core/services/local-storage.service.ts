import * as _ from "lodash";
import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {
  public set(key: string, value: any): void {
    if (_.isObject(value) || _.isString(value)) {
      value = JSON.stringify(value);
    }

    if (_.isUndefined(value)) {
      value = null;
      console.warn("something went wrong. trying to set `undefined` value");
    }

    localStorage.setItem(key, value);
  }

  public get(key: string): any {
    let item: string = localStorage.getItem(key);

    try {
      return JSON.parse(item);
    } catch (e) {
      // commented, because before didn't use json format and now have many messages in console
      // console.error(`a value '${item}' wasn't correctly formatted`);

      return item;
    }
  }

  public delete(key: string): void {
    localStorage.removeItem(key);
  }
}

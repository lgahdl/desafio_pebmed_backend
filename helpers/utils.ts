export default class Utils {
  static clone(obj: any): any {
    let copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
      copy = [];
      for (let i = 0, len = obj.length; i < len; i++) {
        copy[i] = Utils.clone(obj[i]);
      }
      return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
      copy = {};
      for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) { // @ts-ignore
          copy[attr] = Utils.clone(obj[attr]);
        }
      }
      return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
  }

  static validateEmail(email: string):boolean {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
  }

  static validatePassword(password: string): boolean {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    return password?.match(pattern)?.length>0;
  }
}
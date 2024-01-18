export default class ObjUtils {
  public static keepOnlyTheseKeys(obj: any, keys: string[]) {
    let newObj: any = {};
    keys.forEach((key) => {
      newObj[key] = obj[key];
    });
    return newObj;
  }
}

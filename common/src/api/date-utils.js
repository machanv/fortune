export class DateUtils {
  /**
   * 获取时间戳
   * */
  getTimestamp(date) {
    if (date instanceof Date) {
      const timestamp = parseInt((date.getTime()) / 1000);
      return timestamp;
    }
  }


}

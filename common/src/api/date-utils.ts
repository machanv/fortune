export class DateUtils {
  /**
   * 获取时间戳
   * */
  getTimestamp(date: Date) {
    if (date instanceof Date) {
      const timestamp = ((date.getTime()) / 1000).toFixed(0);
      return timestamp;
    }
  }

  /**
   * 当前时间转日期字符串*/
  dateToYmd(date: Date) {
    if (date instanceof Date) {

    }
  }

  /**
   * 日期字符转为时间戳
   * @param date = '2015-03-05 17:59:00.0';*/
  toTimestamp(date: string) {
    date = date.substring(0, 9);
    date = date.replace(/-/g, '/');
    let timestamp = new Date(date).getTime();
    return timestamp;
  }
}

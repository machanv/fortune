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

  /**
   * 当前时间转日期字符串*/
  dateToYmd(date) {
    if (date instanceof Date) {

    }
  }

  /**
   * 日期字符转为时间戳
   * @param date = '2015-03-05 17:59:00.0';*/
  toTimestamp(date) {
    date = date.substring(0, 9);
    date = date.replace(/-/g, '/');
    let timestamp = new Date(date).getTime();
    return timestamp;
  }
}

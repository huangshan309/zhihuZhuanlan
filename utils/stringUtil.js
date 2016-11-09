
export default class StringUtil {
  /*
  * 去掉字符串左右空格、换行
  */
  static trim( text ){
    if (typeof(text) == "string")  {
      return text.replace(/^\s*|\s*$/g, "");
    }
    else{
      return text;
    }
  }
  
  static filterHtmlTag(str){
    let reg = /<[^<>]+>/g;
    return str.replace(reg,'')
  }
  static urlToHttp(url){
    return url.replace("https","http");
  }
}
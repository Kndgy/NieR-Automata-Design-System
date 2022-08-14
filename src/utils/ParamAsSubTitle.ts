export function SubTitle(ParamType, ParamTail){
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let subTitle = (`${ParamType} ${ParamTail}`);
  let strip = "- ";
  if (ParamType === undefined) {
    subTitle = "";
    strip =""
  }
  return(
    strip + capitalizeFirstLetter(subTitle)
  )
}
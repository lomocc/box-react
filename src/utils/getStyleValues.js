import CSSProps from './CSSProps';
import CustomCSSProps from './CustomCSSProps';
import dangerousStyleValue from './dangerousStyleValue';
import hyphenateStyleName from './hyphenateStyleName';

const formatStyle = (styleName, styleValue) => {
  return hyphenateStyleName(styleName) + ':' + styleValue + ';';
};
const formatStylePretty = (styleName, styleValue) => {
  return '  ' + hyphenateStyleName(styleName) + ': ' + styleValue + ';\n';
};

const getStyleValues = (styleObj, propName, propValue, pretty = false) => {
  const formatString = pretty ? formatStylePretty : formatStyle;
  if (CustomCSSProps.hasOwnProperty(propName)) {
    let styles = CustomCSSProps[propName](propValue);
    if (styles) {
      let styleStr = '';
      for (const styleName in styles) {
        if (styles.hasOwnProperty(styleName)) {
          const styleValue = styles[styleName];
          styleStr += formatString(
            styleName,
            dangerousStyleValue(styleName, styleValue)
          );
        }
      }
      styleObj.styles += styleStr;
    }
  } else if (CSSProps.hasOwnProperty(propName)) {
    styleObj.inlineStyles += formatString(
      propName,
      dangerousStyleValue(propName, propValue)
    );
  }
};
export default getStyleValues;

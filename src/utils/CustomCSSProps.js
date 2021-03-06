const roundedBorderRadius = '0.25em';
const shapes = {
  square: { borderRadius: 0 },
  circle: { borderRadius: '50%' },
  pill: { borderRadius: '999px' },
  rounded: { borderRadius: `${roundedBorderRadius}` },
  roundedTop: {
    borderRadius: `${roundedBorderRadius} ${roundedBorderRadius} 0 0`
  },
  roundedRight: {
    borderRadius: `0 ${roundedBorderRadius} ${roundedBorderRadius} 0`
  },
  roundedBottom: {
    borderRadius: `0 0 ${roundedBorderRadius} ${roundedBorderRadius}`
  },
  roundedLeft: {
    borderRadius: `${roundedBorderRadius} 0 0 ${roundedBorderRadius}`
  }
};
const sizes = {
  xxl: {
    fontSize: '3rem'
  },
  xl: {
    fontSize: '2.25rem'
  },
  lg: {
    fontSize: '1.5rem'
  },
  md: {
    fontSize: '1.25rem'
  },
  sm: {
    fontSize: '1rem'
  },
  xs: {
    fontSize: '0.875rem'
  },
  xxs: {
    fontSize: '0.75rem'
  }
};
const CustomCSSProps = {
  top: value => ({ top: value === true ? 0 : value }),
  right: value => ({ right: value === true ? 0 : value }),
  bottom: value => ({ bottom: value === true ? 0 : value }),
  left: value => ({ left: value === true ? 0 : value }),
  // margin
  marginX: value => ({
    marginLeft: value,
    marginRight: value
  }),
  marginY: value => ({
    marginTop: value,
    marginBottom: value
  }),
  // padding
  paddingX: value => ({
    paddingLeft: value,
    paddingRight: value
  }),
  paddingY: value => ({
    paddingTop: value,
    paddingBottom: value
  }),
  widthRatio: value => ({
    width: `${Math.round(value * 1e6) / 1e4}%`
  }),
  heightRatio: value => ({
    width: `${Math.round(value * 1e6) / 1e4}%`
  }),
  aspectRatio: value => ({
    paddingBottom: `${(1 / value) * 100}%`,
    height: 0
  }),
  shape: value => shapes[value],
  size: value => sizes[value]
};
export default CustomCSSProps;

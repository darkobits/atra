import {darkRed} from 'etc/colors';
import ThemeBuilder from './atra';


export default ThemeBuilder({
  accentColor: darkRed,
  useItalic: true,
  modifyForeground: color => color.lighten(-0.02).saturate(0.08),
  modifyBackground: color => color.lighten(0.16)
});

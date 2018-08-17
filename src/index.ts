import {darkRed} from 'etc/colors';
import ThemeBuilder from './astra';


export default ThemeBuilder({
  accentColor: darkRed,
  useItalic: true,
  modifyForeground: color => color.lighten(-0.06),
  modifyBackground: color => color.lighten(0.28)
});

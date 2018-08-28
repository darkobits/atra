import {darkRed} from 'etc/colors';
import ThemeBuilder from './astra';


export default ThemeBuilder({
  accentColor: darkRed,
  useItalic: true,
  modifyForeground: color => color.saturate(0.12),
  modifyBackground: color => color.lighten(0.42)
});

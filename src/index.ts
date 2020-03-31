import {darkRed} from 'etc/colors';
import Astra from './astra';


export default Astra({
  accentColor: darkRed,
  useItalic: true,
  modifyForeground: color => color.saturate(0.24),
  modifyBackground: color => color.lighten(0.12)
});

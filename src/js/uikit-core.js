import { animationstart, css, doc, fastdom, on, toMs, win } from 'uikit/src/js/util/index';

// import Accordion from 'uikit/src/js/core/accordion';
// import Alert from 'uikit/src/js/core/alert';
// import Cover from 'uikit/src/js/core/cover';
// import Drop from 'uikit/src/js/core/drop';
// import Dropdown from 'uikit/src/js/core/dropdown';
// import FormCustom from 'uikit/src/js/core/form-custom';
// import Gif from 'uikit/src/js/core/gif';
import Grid from 'uikit/src/js/core/grid';
import HeightMatch from 'uikit/src/js/core/height-match';
// import HeightViewport from 'uikit/src/js/core/height-viewport';
// import Hover from 'uikit/src/js/core/hover';
// import Icon from 'uikit/src/js/core/icon';
// import Leader from 'uikit/src/js/core/leader';
import Margin from 'uikit/src/js/core/margin';
import Modal from 'uikit/src/js/core/modal';
// import Nav from 'uikit/src/js/core/nav';
// import Navbar from 'uikit/src/js/core/navbar';
// import Offcanvas from 'uikit/src/js/core/offcanvas';
// import Responsive from 'uikit/src/js/core/responsive';
// import Scroll from 'uikit/src/js/core/scroll';
// import Scrollspy from 'uikit/src/js/core/scrollspy';
// import ScrollspyNav from 'uikit/src/js/core/scrollspy-nav';
// import Sticky from 'uikit/src/js/core/sticky';
// import Svg from 'uikit/src/js/core/svg';
// import Switcher from 'uikit/src/js/core/switcher';
// import Tab from 'uikit/src/js/core/tab';
import Toggle from 'uikit/src/js/core/toggle';
// import Video from 'uikit/src/js/core/video';


export default function (UIkit) {

    var scroll = 0, started = 0;

    on(win, 'load resize', UIkit.update);
    on(win, 'scroll', e => {
        e.dir = scroll < win.pageYOffset ? 'down' : 'up';
        scroll = win.pageYOffset;
        UIkit.update(e);
        fastdom.flush();
    });

    animationstart && on(doc, animationstart, ({ target }) => {
        if ((css(target, 'animationName') || '').match(/^uk-.*(left|right)/)) {
            started++;
            doc.body.style.overflowX = 'hidden';
            setTimeout(() => {
                if (!--started) {
                    doc.body.style.overflowX = '';
                }
            }, toMs(css(target, 'animationDuration')) + 100);
        }
    }, true);

    // core components
    // UIkit.use(Toggle);
    // UIkit.use(Accordion);
    // UIkit.use(Alert);
    // UIkit.use(Video);
    // UIkit.use(Cover);
    // UIkit.use(Drop);
    // UIkit.use(Dropdown);
    // UIkit.use(FormCustom);
    UIkit.use(HeightMatch);
    // UIkit.use(HeightViewport);
    // UIkit.use(Hover);
    UIkit.use(Margin);
    // UIkit.use(Gif);
    UIkit.use(Grid);
    // UIkit.use(Leader);
    UIkit.use(Modal);
    // UIkit.use(Nav);
    // UIkit.use(Navbar);
    // UIkit.use(Offcanvas);
    // UIkit.use(Responsive);
    // UIkit.use(Scroll);
    // UIkit.use(Scrollspy);
    // UIkit.use(ScrollspyNav);
    // UIkit.use(Sticky);
    // UIkit.use(Svg);
    // UIkit.use(Icon);
    // UIkit.use(Switcher);
    // UIkit.use(Tab);
  
}
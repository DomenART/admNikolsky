import boot from 'uikit/src/js/api/boot';
import mixin from 'uikit/src/js/mixin/index';
import UIkit from 'uikit/src/js/api/index';
import core from './uikit-core';
import components from './uikit-components';
import Icons from 'uikit/dist/js/uikit-icons'

mixin(UIkit);
core(UIkit);
components(UIkit);
boot(UIkit);
UIkit.use(Icons)
import ObserveVisibility from './directives/observe-visibility'

import type {App} from "vue";

export default {
    install: (app: App) => {
        app.directive("observe-visibility", ObserveVisibility);
    },
};

export {ObserveVisibility};

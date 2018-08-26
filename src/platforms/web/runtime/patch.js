/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

// 这里的modules是 src/platforms/web/runtime/modules,是一些和web有关的东西
// 而nodeOps是dom操作的一些方法，这里这样做就保证了很好的跨平台解耦。
export const patch: Function = createPatchFunction({ nodeOps, modules })

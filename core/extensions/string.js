import {i18n} from '../../i18n'

String.prototype.translate = function (query) {

  return i18n.t(this, {query})

}

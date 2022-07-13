import pluginConfig from './config';
import Service from "./service";
const {base, inherit} = g3wsdk.core.utils;
const {Plugin} = g3wsdk.core.plugin;
const {addI18nPlugin} = g3wsdk.core.i18n;

const _Plugin = function() {
  base(this);
  const {name, i18n} = pluginConfig;
  this.name = name;
  this.init = function() {
    // add i18n of the plugin
    addI18nPlugin({
      name,
      config: i18n
    });
    this.setService(Service);
    //get config plugin from server
    this.config = this.getConfig();
    // check if has some condition default true
    if (this.service.loadPlugin()) {
      //plugin registry
      if (this.registerPlugin(this.config.gid)) this.service.init(this.config);
    }
    // need to be call to hide loading icon on map
    this.setReady(true);
  };
};

inherit(_Plugin, Plugin);

(function(plugin){
  plugin.init();
})(new _Plugin);


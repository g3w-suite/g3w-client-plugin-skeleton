import pluginConfig from './config';
import Service from "./service";
const {base, inherit} = g3wsdk.core.utils;
const {Plugin:BasePlugin} = g3wsdk.core.plugin;

const Plugin = function() {
  const {name, i18n} = pluginConfig;
  base(this, {
    name,
    service: Service,
    i18n
  });
  // backward compatibility (< v3.5)
  if (!g3wsdk.version) {
    this.name = name;
    g3wsdk.core.i18n.addI18nPlugin({name, config: i18n});
    this.setService(Service);
    this.config = this.getConfig();
  }
  //check if plugin is related to current project by gid
  if (this.registerPlugin(this.config.gid)) this.service.init(this.config);
  // need to be call to hide loading icon on map
  this.setReady(true);
};

inherit(Plugin, BasePlugin);

new Plugin();


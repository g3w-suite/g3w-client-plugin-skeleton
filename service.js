const {base, inherit} = g3wsdk.core.utils;
const {PluginService} = g3wsdk.core.plugin;

function Service(){
  base();
  /**
   * get plugin config object
   * @param config
   */
  this.init = function(config={}){
    /**
     *  PLUGIN SERVICE INIT FUNCTION
     */
  };
  /**
   * Method eventualy set if plugin can load or not
   */
  this.loadPlugin = function(){
    /**
     * Overwrite condition
     */
    return true
  }
}

inherit(Service, PluginService);

export default new Service()
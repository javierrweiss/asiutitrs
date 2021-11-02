/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"01D6F057-F7ED-495D-9D4B-0E59685B5DE8"}
 * @AllowToRunInFind
 */
function onShow_frm_scr_hist_cab_2560(firstShow, event) {
	foundset.find()
	foundset.histcabobra='1128||1210||1256||1662||1683||1696||1839||1907'
	foundset.histcabsexo=1
	foundset.search()
}

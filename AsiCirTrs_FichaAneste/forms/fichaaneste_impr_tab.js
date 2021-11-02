/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D809D043-A464-437B-B19D-46FE731B9B27",variableType:4}
 */
var f_anest = 6;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"41A8A62F-0469-4EB6-A403-478A21E0ABAF",variableType:4}
 */
var f_pulso = 3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"630C0673-FC0C-4EDA-B2B7-C2C95F82B750",variableType:4}
 */
var f_tmin = 2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"35665AFA-51FD-4C8F-BBDE-315ADC4DF131",variableType:4}
 */
var f_tmax = 1;

/**
 * @properties={typeid:35,uuid:"72DDECA0-102A-437A-8BBA-B13503A36CFC",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2AEA344D-AB57-41B9-87F4-D2EEBF9F1B8C",variableType:4}
 */
var f_edad = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"D011A629-C36B-4F02-AD0F-93D47D5AE804",variableType:93}
 */
var f_fecha_dia = null;

/**
 * @properties={typeid:24,uuid:"58464BD8-8259-4B7B-B592-19411C0933D1"}
 */
function cerrar_window() {
	var $win = application.getWindow(application.getActiveWindow().getName());
	if($win != null){
		$win.hide()
		$win.destroy()
		}
}

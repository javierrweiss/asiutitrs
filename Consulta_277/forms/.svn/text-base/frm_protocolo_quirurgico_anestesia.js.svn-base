/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A7E41CB3-019B-4572-8BF5-C11A1279FBDF"}
 */
var f_respControlada = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BD2C121F-3C2E-42D8-AA6D-A2EDE86A094F"}
 */
var f_respiracion = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"112E4C9F-64CC-4623-9EEA-A8A83B5E5450",variableType:4}
 */
var f_manguito = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4AF52626-DF73-45FA-80B0-A6F2BB9940E4",variableType:4}
 */
var f_intubacionTraquel = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CC292080-8A59-41A4-B63D-9B5697A90ED5"}
 */
var f_anestesia = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9BCF1F51-EB3A-4B98-9457-6DAFCFA0C414",variableType:4}
 */
var f_cateter = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F20FA89A-0ADD-4C51-850D-86536D642C07"}
 */
var f_tipoBloqueo = '';

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D40668AD-6D4D-46DC-89EC-6A8A8074F0BF"}
 */
function onShow_inicializarForm(firstShow, event) {
	limpiarAnestesiaForm();
	var data = forms.lst_protocolos_quirurgicos.foundset.getSelectedRecord();
	
	if(data.cirianestesia == 1){
		f_anestesia = application.getValueListDisplayValue('vl_anestesia',data.anes_inhend);
		f_cateter = data.anes_cateter;
		f_intubacionTraquel = data.anes_intub;
		f_manguito = data.anes_manguito;
		f_respControlada = application.getValueListDisplayValue('vl_respControlada',data.anes_mecman);
		f_respiracion = application.getValueListDisplayValue('vl_respiracion',data.anes_espasi);
		f_tipoBloqueo = application.getValueListDisplayValue('vl_tipoBloqueo',data.anes_tipoblo);
	}
	
	
}

/**
 * @properties={typeid:24,uuid:"3188F05D-BAE0-4179-8AF7-1CFE653B4508"}
 */
function limpiarAnestesiaForm(){
	f_anestesia = "";
	f_cateter = 0;
	f_intubacionTraquel = 0;
	f_manguito = 0;
	f_respControlada = "";
	f_respiracion = "";
	f_tipoBloqueo = "";
}

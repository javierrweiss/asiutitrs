/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"95C7E6D8-C49F-4BD3-B002-D3B02F2BB79D"}
 */
var f_medicoNombre = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"875D56FC-2F4F-4D1D-95E6-74D7F9B35E6C"}
 */
var f_matricula = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8F234385-BEE6-4763-8E3D-C39DFF195C48"}
 */
var f_histClinIngreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AB881B04-0390-4443-857E-041E35CD2526"}
 */
var f_egreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4D4C636E-BB16-4250-B86F-0AD9AEF04EC8"}
 */
var f_ingreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E96B5419-CE23-4CFE-B6D7-0CA407A64C6B"}
 */
var f_cobertura = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F573949F-14D8-4B9B-94BB-7445F3C16BDF"}
 */
var f_sexo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1DCD7E13-AC34-4A9C-9386-742D6314CAD9"}
 */
var f_hora = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9BD38DBB-2DFD-47BB-855D-95803B7611D0"}
 */
var f_medico = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8458B321-888D-4746-AA57-CF499FB11CAC"}
 */
var f_edad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2989F4B2-C1A9-4C90-B6F2-45124C7FDBE1"}
 */
var f_cama = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F495357C-0981-485F-8604-540E313B1D51",variableType:4}
 */
var f_habitacion = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"7BFCF7AD-4D21-4CE5-9483-94F1B3FC9B1E",variableType:93}
 */
var f_fechaImpresion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C9CA8530-14FE-44FD-A58F-4750108D388A"}
 */
var f_histclinunica = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"444F5C0C-D643-423D-951F-E3A5C69D7821"}
 */
var f_apelnom = null;

/**
 * @properties={typeid:24,uuid:"4EB17B06-1CC1-4735-A848-1E3CBE7B1EB7"}
 */
function limpiarForm (){
	
	f_apelnom = null;
	f_cama = null;
	f_medico = null;
	f_fechaImpresion = null;
	f_habitacion = null;
	f_histclinunica = null;
	f_hora = null;
	f_cobertura = null;
	f_sexo = null;
	f_edad = null;
	f_egreso = null;
	f_histClinIngreso = null;
	f_ingreso = null;
	f_matricula = null;
	f_medicoNombre = null;
	
	//if(forms.Hcipiso_print.foundset.getSize() > 0)
		//forms.Hcipiso_print.foundset.clear();
	
	controller.setPageFormat(210,297,10,10,10,10,1,0);
}

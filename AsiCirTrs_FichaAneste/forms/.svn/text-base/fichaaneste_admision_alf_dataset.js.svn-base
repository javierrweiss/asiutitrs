/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"32AEB9EE-4C1E-4830-8D27-A7A0951F10C3",variableType:4}
 */
var fhoring = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DC30392A-3571-4BFC-B67B-D24ED44B27A2",variableType:4}
 */
var fsexo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0D466A0D-E628-40AE-8F6F-1C92A13307EC",variableType:4}
 */
var fobrsoc = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8AB7988C-ED3B-4FE9-AC07-CEB5AFAB4BF3",variableType:4}
 */
var ffecnac = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"29CD6AC8-02EB-4CEF-98CD-B4A365F50D5C",variableType:4}
 */
var fhiscli = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"41E9C73C-64B4-4D85-8F50-74FE97806E81",variableType:4}
 */
var fhiscliuni = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AFC7160A-A0E8-48F1-B130-46B8498A2C25"}
 */
var fegreso = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F1137F70-9048-4E5A-B82C-692F3E1F4E51"}
 */
var fingreso = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8FFCB572-CF08-4043-B0EB-22A4573ED513"}
 */
var fcama = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6F2DFF78-F465-4C64-8966-33577E584928",variableType:4}
 */
var fhabi = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"54B17964-694A-4E9B-87CF-2163EF9B63D4"}
 */
var fapeynom = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"681C2957-E08E-4D10-83F0-9DA351CB8D06"}
 */
var fhiscli_edit = '';

/**
 * @properties={typeid:24,uuid:"475191F7-5B56-4108-9BEF-CB20CA19E721"}
 */
function creoDatasetInternadosAlfabetico() {

	// se arma data set en el form anterior fichaaneste_paciente_en_espera
	// TODO sin l afecha para ver si trae algo
	var $SQL="select adm_histclin, adm_apelnom, adm_habita, adm_cama, adm_fecing, adm_fecaltaefec, adm_histclinuni, adm_sexo, adm_obrsoc, adm_fecnac from tbc_admision_scroll where Adm_ApelNom >='"+globals.vAlfa+" ' and Adm_ApelNom <='"+globals.vAlfa+"Z'  and adm_fecaltaefec = 0 order by Adm_ApelNom asc"
	var frm_ds = databaseManager.getDataSetByQuery("admisionscroll", $SQL, null, 500);
    
   	var $ds = databaseManager.createEmptyDataSet()
	$ds.addColumn('fhiscli_edit',1,JSColumn.TEXT)   
	$ds.addColumn('fapeynom',2,JSColumn.TEXT)
	$ds.addColumn('fhabi',3,JSColumn.NUMBER)
	$ds.addColumn('fcama',4,JSColumn.TEXT)
	$ds.addColumn('fingreso',5,JSColumn.TEXT)
	$ds.addColumn('fegreso',6,JSColumn.TEXT)
	$ds.addColumn('fhiscli',7,JSColumn.NUMBER)
	$ds.addColumn('fhiscliuni',8,JSColumn.NUMBER)
	$ds.addColumn('fsexo',9,JSColumn.NUMBER)
	$ds.addColumn('fobrsoc',10,JSColumn.NUMBER)
	$ds.addColumn('ffecnac',11,JSColumn.NUMBER)
			
	var $max         = frm_ds.getMaxRowIndex()
	var $hiscli_edit = ' ';
   	var $largo_edit  = 0;
   	var $fingreso    = ' ';
   	var $fegreso     = ' ';
	if ($max > 0){
		for(var i=1; i<=$max; i++){
			$hiscli_edit = frm_ds.getValue(i,1)
			
			if($hiscli_edit!=null&&$hiscli_edit!=''){
				$largo_edit=$hiscli_edit.toString().length
				$hiscli_edit=$hiscli_edit.toString().substr(0,$largo_edit-1)+"/"+$hiscli_edit.toString().substr($largo_edit-1,1)
			}
			$fingreso = frm_ds.getValue(i,5)
			$fegreso  = frm_ds.getValue(i,6)
			if(frm_ds.getValue(i,6) == 0){
				$fegreso = ' '
			}else{
				$fegreso = $fegreso.toString().substr(6,2)+"/"+$fegreso.toString().substr(4,2)+"/"+$fegreso.toString().substr(0,4)
			}
			$ds.addRow([$hiscli_edit,frm_ds.getValue(i,2),frm_ds.getValue(i,3),frm_ds.getValue(i,4),$fingreso,$fegreso,frm_ds.getValue(i,1),frm_ds.getValue(i,8),frm_ds.getValue(i,9),frm_ds.getValue(i,10),frm_ds.getValue(i,11)])
		}
    }

	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER]


	var $frm = solutionModel.getForm('fichaaneste_admision_alf_dataset')
	$frm.dataSource = $ds.createDataSource('Ds_Admision', $tipos)   // persist alredy a clone  ????
	forms.fichaaneste_admision_alf_dataset.controller.recreateUI()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B095C435-A1D6-498D-967A-6FB6A08034BF"}
 */
function onAction_campos(event) {
	var $reg = foundset.getRecord(foundset.getSelectedIndex())
	scopes.globals.fichaaneste_histcli    = $reg.fhiscli
	scopes.globals.fichaaneste_histcliuni = $reg.fhiscliuni
	scopes.globals.fichaaneste_vpaciente  = $reg.fapeynom
	if (vs_ficha_to_tbc_anestesia.getSize() == 0)   // TODO ver clave para acceder
	{
		globals.DIALOGS.showQuestionDialog('¡Atención!','Debe cargar Evaluación Preoperatoria', 'Ok' )
		// TODO  solo para probar  se anula el return
		return
	}

	scopes.globals.vSexo  = $reg.fsexo         // 2 = masculino
	//globals.vFechaIngreso = scopes.globals.IntegerToDate($reg.fingreso) 
	globals.vFechaIngreso  = null  // = no se usa
	// clave de tbc_anestesia = no se usan estos campos -  se accede c histcli + estado < 2
	globals.vHoraIngreso   = null // adm_horing  // no es la misma - no usar 
	scopes.globals.vFecing = null // $reg.fingreso	 // no es la misma - no usar
	
	scopes.globals.fichaaneste_vfecnac    = $reg.ffecnac
	scopes.globals.fichaaneste_vcama      = $reg.fcama
	scopes.globals.fichaaneste_vhabita    = $reg.fhabi
	scopes.globals.fichaaneste_obrasocial = $reg.fobrsoc 
	scopes.globals.fichaaneste_anestesiologo_nombre  = scopes.globals.vOperador 

	scopes.globals.fichaaneste_vpresion_max   = vs_ficha_to_tbc_anestesia.anes_presionmax
	scopes.globals.fichaaneste_vpresion_min   = vs_ficha_to_tbc_anestesia.anes_presionmin
	scopes.globals.fichaaneste_vpulso         = vs_ficha_to_tbc_anestesia.anes_pulsofrec
	scopes.globals.fichaaneste_vop_propuesta  = vs_ficha_to_tbc_anestesia.anes_interven
	scopes.globals.fichaaneste_vriesgo        = vs_ficha_to_tbc_anestesia.anes_asa
	scopes.globals.fichaaneste_vurgencia      = vs_ficha_to_tbc_anestesia.anes_tipoint  // 1 = urgencia
	//scopes.globals.fichaaneste_vanes_hora_ini = vs_ficha_to_tbc_anestesia.anes_horini // 6/6/2019 NO es la hora inicial de anestesia
	
	// TODO no lo tiene hasta el cierre del protocolo idem numero de la anestesia
	scopes.globals.fichaaneste_protocolo      = vs_ficha_to_tbc_anestesia.anes_protocolo
	scopes.globals.fichaaneste_nro_anestesia  = vs_ficha_to_tbc_anestesia.anes_numero
	
	scopes.globals.fichaaneste_anes_carga_fecha = vs_ficha_to_tbc_anestesia.anes_feccarga
	scopes.globals.fichaaneste_anes_carga_hora  = vs_ficha_to_tbc_anestesia.anes_horcarga  // 4 dig
	if (vs_ficha_to_fichaaneste_cab_fechcarga.getSize() != 0)   // TODO ver clave para acceder  16-08-2019
		{if (vs_ficha_to_fichaaneste_cab_fechcarga.estado == 1)
			{globals.DIALOGS.showQuestionDialog('¡Atención!','Ficha Anestésica Cerrada', 'Ok' )
				return}
		}
	scopes.globals.fichaaneste_modificacion = 0

	var name = application.getActiveWindow()
	name.getName()
	var $win = application.getWindow(name.getName())
	if($win != null){
		$win.hide()
		$win.destroy()
	}
	var $win1 = application.createWindow("carga",JSWindow.MODAL_DIALOG)
    $win1.title = " Carga Ficha Anestesica "
	$win1.setSize(1220,700) 
	$win1.setLocation(50,1)
    $win1.show(forms.fichaaneste_tab)
	$win1.destroy() 
	

	globals.vClave  = 0
	globals.vPassOperador = '' 
	globals.vTipoMedico = null
	//**//**//**//  RESTAURAR estas tres variables porque al volver no dibuja el menu del usuario con
	//  el que se ingreso al menu
	globals.vLegajo   = scopes.globals.fichaaneste_vLegajo  
	globals.vLega     = scopes.globals.fichaaneste_vLega        
	globals.vOperador = scopes.globals.fichaaneste_vOperador
	//**//**//**//
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"45FE997D-1856-4653-9C09-C80AD6E035D2"}
 */
function onShow(firstShow, event) {
	  // creoDatasetInternadosAlfabetico()  //  TODO  02-05-19 
	  //va en el form que lo llama fichaaneste_tab_pacientes
}

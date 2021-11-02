
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9F36C557-E8C5-41B7-AAC8-72FDF8271FEC"}
 */
function onAction_campos(event) {
	scopes.globals.fichaaneste_histcli    = adm_histclin
	scopes.globals.fichaaneste_histcliuni = adm_histclinuni
	scopes.globals.fichaaneste_vpaciente  = adm_apelnom
	if (vs_ficha_to_tbc_anestesia.getSize() == 0)   // TODO busca x nro inter. y estado < 2
		{
		globals.DIALOGS.showQuestionDialog('¡Atención!','Debe cargar Evaluación Preoperatoria', 'Ok' )
		return
		}
//  tomar los campos ya cargados que se necesiten de tbc_admision_scroll para la ficha 
	scopes.globals.vSexo   = adm_sexo     // 2 = masculino
	globals.vFechaIngreso  = globals.IntegerToDate(adm_fecing)
	// clave de tbc_anestesia
	globals.vHoraIngreso   = adm_horing  // no es la misma - no usar 
	scopes.globals.vFecing = adm_fecing	 // no es la misma - no usar
		
	scopes.globals.fichaaneste_vfecnac    = adm_fecnac
	scopes.globals.fichaaneste_vcama      = adm_cama
	scopes.globals.fichaaneste_vhabita    = adm_habita
	scopes.globals.fichaaneste_obrasocial = adm_obrsoc 
	scopes.globals.fichaaneste_anestesiologo_nombre  = scopes.globals.vOperador 
//  tomar los campos ya cargados que se necesiten de tbc_anestesia para la ficha 
	scopes.globals.fichaaneste_vpresion_max   = vs_ficha_to_tbc_anestesia.anes_presionmax
	scopes.globals.fichaaneste_vpresion_min   = vs_ficha_to_tbc_anestesia.anes_presionmin
	scopes.globals.fichaaneste_vpulso         = vs_ficha_to_tbc_anestesia.anes_pulsofrec
	scopes.globals.fichaaneste_vop_propuesta  = vs_ficha_to_tbc_anestesia.anes_interven
	scopes.globals.fichaaneste_vriesgo        = vs_ficha_to_tbc_anestesia.anes_asa
	scopes.globals.fichaaneste_vurgencia      = vs_ficha_to_tbc_anestesia.anes_tipoint  // 1 = urgencia
	//scopes.globals.fichaaneste_vanes_hora_ini = vs_ficha_to_tbc_anestesia.anes_horini  // no usar
	
	// TODO no lo tiene hasta el cierre del protocol,o idem numero de la anestesia
	scopes.globals.fichaaneste_protocolo      = vs_ficha_to_tbc_anestesia.anes_protocolo 
	scopes.globals.fichaaneste_nro_anestesia  = vs_ficha_to_tbc_anestesia.anes_numero
	
	scopes.globals.fichaaneste_anes_carga_fecha = vs_ficha_to_tbc_anestesia.anes_feccarga
	scopes.globals.fichaaneste_anes_carga_hora  = vs_ficha_to_tbc_anestesia.anes_horcarga  // 4 dig
	if (vs_ficha_to_fichaaneste_cab_fechcarga.getSize() != 0)   // TODO ver clave para acceder  16-08-2016
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
		//$win.destroy()
	}
	var $win1 = application.createWindow("carga",JSWindow.MODAL_DIALOG)
    $win1.title = " Carga Ficha Anestesica "
	$win1.setSize(1210,685) 
    $win1.show(forms.fichaaneste_tab)
	//$win1.destroy() 
	
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

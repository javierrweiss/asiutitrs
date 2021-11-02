/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0502F509-88A9-4F36-9853-412DD399BD02",variableType:4}
 */
var fguar_horaingreso = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"34D98DE1-6089-4F32-A7B5-3F52C6790804",variableType:4}
 */
var fguar_fechaingreso = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CCC647CD-D19E-4C0A-933B-25C3EBD45FA8",variableType:4}
 */
var fguar_histclinica = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C4A61F41-0BC7-450D-9874-1B14CAF70381"}
 */
var fguar_estado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7483BDB5-413A-4A08-A7BB-A5C02D2B1D2E"}
 */
var fitv_descripcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5C38117E-3ED9-4700-8420-0BE3C2489C01"}
 */
var fguar_apenom = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DADC2EC9-0F21-4F04-BB40-AD0D8936C134",variableType:4}
 */
var fguar_diagnostico = 0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B5DAC2F1-6A64-43C2-9D5D-C524F3FE60E8"}
 * @AllowToRunInFind
 */
function onAction(event) {

	globals.vFechaIngreso = forms.fichaaneste_pacientes_en_espera.foundset['fguar_fecha_guardia']
	scopes.globals.vFecing = forms.fichaaneste_pacientes_en_espera.foundset['fguar_fecha_guardia']
	globals.vHoraIngreso  = forms.fichaaneste_pacientes_en_espera.foundset['fguar_hora_guardia']
	globals.vHiscli = forms.fichaaneste_pacientes_en_espera.foundset['fguar_histclinica']
	
	var fs = databaseManager.getFoundSet("asistencial","tbc_guardia")
	fs.find()
	fs['guar_histclinica']  = globals.vHiscli 
	fs['guar_fechaingreso'] = scopes.globals.vFecing
	fs['guar_horaingreso']  = globals.vHoraIngreso
	fs.search()
	if(fs.getSize()>0){
		fs.setSelectedIndex(1)
		if(fs['guar_estado']==3){        //  VER = 3 si se toma
			plugins.dialogs.showErrorDialog("Atención","Paciente tomado en otra terminal","Ok")
			return
		}else{
			if(fs['guar_estado']==4){
				plugins.dialogs.showErrorDialog("Atención","Paciente con Alta Médica","Ok")
				return
			}else{
				if(fs['guar_estado']==5){
					plugins.dialogs.showErrorDialog("Atención","Paciente con Alta Administrativa","Ok")
					return
				}else{
					if(fs['guar_estado']==9){
						plugins.dialogs.showErrorDialog("Atención","Paciente Anulado","Ok")
						return
					}else{
						/* 
						globals.protambu1400_fechaingreso=globals.segambu_fecha_ingreso
						globals.protambu1400_hora_ingreso=globals.segambu_hora_ingreso
						globals.anesambu_fechaingreso=globals.segambu_fecha_ingreso
						globals.anesambu_horaingreso=globals.segambu_hora_ingreso
						globals.anesambu_tipac=1
						forms.protambu_frm_menu_principal.fhiscli=globals.vHiscli
						forms.protambu_frm_menu_principal.fPlan=protambu_vhiscli_to_tbc_hist_cab_new.histcabplanx
						forms.protambu_frm_menu_principal.fAfiliado=protambu_vhiscli_to_tbc_hist_cab_new.histcabnrobenef	
						forms.protambu_frm_menu_principal.fCobertura=protambu_vhiscli_to_tbc_hist_cab_new.protambu_tbc_hist_cab_new_to_tbc_obras.obr_razonsoc
						forms.protambu_frm_menu_principal.fEdad=utils.numberFormat(scopes.globals.CalculoEdad(protambu_vhiscli_to_tbc_hist_cab_new.histcabfechanac),0)+" "+globals.vTipoEdad
						if(protambu_vhiscli_to_tbc_hist_cab_new.histcabsexo==1){
							forms.protambu_frm_menu_principal.fSexo="Femenino"
						}else{
							forms.protambu_frm_menu_principal.fSexo="Masculino"
						}
						globals.Edad=forms.protambu_frm_menu_principal.fEdad
						globals.protambu_Sexo=forms.protambu_frm_menu_principal.fSexo
						globals.protambu_ObraSocial=forms.protambu_frm_menu_principal.fCobertura
						globals.vApeyNom=protambu_vhiscli_to_tbc_hist_cab_new.histcabapellnom
						if(protambu1400_vhiscli_to_tbc_ciruguar.getSize()>0){
							if(protambu1400_vhiscli_to_tbc_ciruguar.cirgtipointerven==2){
								globals.vEstadoCirugia=3
							}else{
								globals.vEstadoCirugia=1
							}
						}
						globals.segambu_codnome=0
						globals.segambu_servicio=0
						globals.protambu1400_io_legcirujano=0
						globals.protambu1400_legcirujano=0
						globals.vInterven0=0
						globals.vPinzasInicio=0
						globals.vQuirofano=0
						globals.vNroProtocolo=0
						globals.vEsHemodinamia=''
						forms.protambu_frm_1400.fCirujano=''
						forms.protambu_frm_1400.fInterven=''
						forms.protambu_frm_1400.fCirujano_Apeynom=''
						forms.protambu_frm_1400.fdes_interven=''
						globals.protambu1400_responsableHemoterapia=''
						globals.protambu1400_responsableMonitoreo=''
						globals.segambu_muestras=''
						globals.segambu_vantinstru=''
						globals.segambu_vApeynomCirculante=''
						globals.segambu_vdesinstru=''
							*/
						
						//  ver este cambio de estado
						/*
						if(protambu1400_vhiscli_to_tbc_ciruguar.getSize() > 0 ){
							if(protambu1400_vhiscli_to_tbc_ciruguar.cirgtipointerven==2){
								globals.vEstadoCirugia=3
							}else{
								globals.vEstadoCirugia=1
							}
						}
						*/
					// para clave de tbc_anes_ambu
							scopes.globals.fichaaneste_histcliuni = fs.guar_histclinica
							globals.vHoraIngreso   = fs.guar_horaingreso   
							scopes.globals.vFecing = fs.guar_fechaingreso  						
					// pasar datos a form carga
							if (vs_ficha_to_tbc_anestesia_ambu.getSize() == 0)   
							{
								globals.DIALOGS.showQuestionDialog('¡Atención!','Debe cargar Evaluación Preoperatoria Ambulatoria', 'Ok' )     
								return
							}
						
							scopes.globals.fichaaneste_histcli    = 0 //  fs.guar_histclinica  // TODO #internacion no va ? no tiene?
							scopes.globals.fichaaneste_vpaciente  = fs.guar_apenom
							globals.vFechaIngreso = scopes.globals.IntegerToDate(fs.fechaingreso)     // globals.IntegerToDate(adm_fecing)

							scopes.globals.vSexo                = null 
							scopes.globals.fichaaneste_vfecnac  = null
							if(vs_to_tbc_hist_cab.getSize() > 0)
								{scopes.globals.vSexo                = vs_to_tbc_hist_cab.histcab_sexo 
								 scopes.globals.fichaaneste_vfecnac  = vs_to_tbc_hist_cab.histcab_fecnac
								} 
							
							scopes.globals.fichaaneste_vcama      = fs.guar_cama
							scopes.globals.fichaaneste_vhabita    = fs.guar_habita
							scopes.globals.fichaaneste_obrasocial = fs.guar_obra 
							
							scopes.globals.fichaaneste_vpresion_max   = vs_ficha_to_tbc_anestesia_ambu.anespresionmax
							scopes.globals.fichaaneste_vpresion_min   = vs_ficha_to_tbc_anestesia_ambu.anespresionmin
							scopes.globals.fichaaneste_vpulso         = null
							scopes.globals.fichaaneste_vop_propuesta  = fs.guar_diagnostico
							scopes.globals.fichaaneste_vriesgo        = null
							scopes.globals.fichaaneste_vurgencia      = null  // 1 = urgencia
							//scopes.globals.fichaaneste_vanes_hora_ini = vs_ficha_to_tbc_anestesia_ambu.aneshoraini  // no usar
							scopes.globals.fichaaneste_anestesiologo_nombre  = scopes.globals.vOperador 
							
							scopes.globals.fichaaneste_protocolo      = vs_ficha_to_tbc_anestesia_ambu.anesprotocolo  // TODO  no lo tiene hasta el cierre del protocolo idem numero de la anestesia
							scopes.globals.fichaaneste_nro_anestesia  = vs_ficha_to_tbc_anestesia_ambu.anesnumero
							
							scopes.globals.fichaaneste_anes_carga_fecha = vs_ficha_to_tbc_anestesia_ambu.anesfecingreso
							scopes.globals.fichaaneste_anes_carga_hora  = vs_ficha_to_tbc_anestesia_ambu.aneshoraingreso  // 8 digitos
							if (vs_ficha_to_fichaaneste_cab_fechcarga.getSize() != 0)   // TODO ver clave para acceder 16-08-2019
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
							$win1.setSize(1220,700) 
							$win1.setLocation(50,1)
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
				}
			}
		}
	}else{
		globals.DIALOGS.showQuestionDialog('¡Atención!','Historia Clinica: ' + globals.vHiscli + ' Fecha Ingreso: '+globals.vFechaIngreso + 'Hora Ingreso: '+globals.vHoraIngreso, 'Ok' )
	}
	
}

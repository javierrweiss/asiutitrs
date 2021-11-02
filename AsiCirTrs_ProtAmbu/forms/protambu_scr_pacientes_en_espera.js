/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F57BDBBF-D403-4F09-8357-ACE2E1C6DDC1",variableType:4}
 */
var fguar_diagnostico = 0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D83A9F91-1471-4E3F-BF59-618A3D61EFE2"}
 * @AllowToRunInFind
 */
function onAction(event) {
	globals.vHiscli=forms.protambu_scr_pacientes_en_espera.foundset['fguar_histclinica']
	globals.segambu_fecha_ingreso=forms.protambu_scr_pacientes_en_espera.foundset['fguar_fecha_guardia']
	globals.segambu_hora_ingreso=forms.protambu_scr_pacientes_en_espera.foundset['fguar_hora_guardia']
	var fs = databaseManager.getFoundSet("asistencial","tbc_guardia")
	fs.find()
	fs['guar_histclinica']=globals.vHiscli
	fs['guar_fechaingreso']=globals.segambu_fecha_ingreso
	fs['guar_horaingreso']=globals.segambu_hora_ingreso
	fs.search()
	if(fs.getSize()>0){
		fs.setSelectedIndex(1)
		if(fs['guar_estado']==3){
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
						application.showForm(forms.protambu_frm_menu_principal)						
					}
				}
			}
		}
	}	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"416062AB-DFCD-44EC-9855-8DBCA217B7BB"}
 */
function onHide_tab_pacientes_en_espera(event) {
	plugins.scheduler.removeJob('30segs');
	return true
}

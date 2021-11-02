/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A04490AA-4CBC-481E-A565-AB19EB0CE279"}
 */
var col1 = ' ';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CFDCD071-152A-474A-BA46-32E88B03DDC8"}
 */
var col2 = ' ';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"24BB29AC-96EB-4911-8786-EF78C5008841"}
 */
var col3 = ' ';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"58614344-22C1-4889-A77B-C73EE554B046"}
 */
var col4 = ' ';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4A2CACC6-31BE-43B9-BD10-F0D9A8DB45BA"}
 */
var col5 = ' ';


/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CDE18940-3054-4B6D-8CAE-E53742E0AE9D"}
 */
function onRecordSelection_scroll_pacientes(event) {
	try{
		forms.bandejaciru_frm_IngresoMedicamentos_tab_generico.fPacienteApeynom=foundset['col2']
		forms.bandejaciru_frm_IngresoMedicamentos_tab_generico.fObraSocial=foundset['col4']
		globals.bandejaciru_hiscli=foundset['whiscli']
		globals.vHiscli=foundset['whiscli']
		globals.Hiscli_edit=foundset['whiscli']
		var $tipopac =0
		var $protocolo=" "
		$protocolo=foundset['col1']
		$tipopac=foundset['wtiphcl']
		if($protocolo==null&&$tipopac==0){
			return
		}
		if($protocolo==""&&$tipopac==0){
			return
		}
		if($protocolo!=null && $protocolo!=""){
			if($protocolo.charAt(0)=="*"&&$tipopac==0){
				return
			}
		}
		if(foundset['col1']!=null&&foundset['col1']!=""){
			if(foundset['col1'].charAt(0)=="*"){
				globals.vNroProtocolo=0
				globals.bandejaciru_protocolo=0
			}else{
				globals.vNroProtocolo=foundset['col1']
				globals.bandejaciru_protocolo=foundset['col1']
			}
		}else{
			globals.vNroProtocolo=0
			globals.bandejaciru_protocolo=0
		}
		
		forms.bandejaciru_frm_IngresoMedicamentos_tab_generico.fTipoPaciente=foundset['wtiphcl']
		globals.bandejaciru_TipHisclin=foundset['wtiphcl']
		if (foundset['wlegamed']!=null){
			globals.bandejaciru_medico=foundset['wlegamed']
			globals.bandejaciru_Cirujano=foundset['wlegamed']
			globals.bandejaciru_TipoCirujano=foundset['wtipomed']
		}else{
			globals.bandejaciru_medico=0
			globals.bandejaciru_Cirujano=0
			globals.bandejaciru_TipoCirujano=0
		}
		globals.bandejaciru_fechaingreso=foundset['wfecing']
		globals.bandejaciru_wkeycir=foundset['wkeycir']
		globals.bandejaciru_horaingreso=utils.stringToNumber(foundset['whoring'].toString().substr(0,4))
		if(globals.bandejaciru_TipHisclin==0){
			globals.bandejaciru_cama=bandejaciru_vhiscli2259_unico_to_tbc_admision_scroll.adm_cama
			globals.bandejaciru_habita=bandejaciru_vhiscli2259_unico_to_tbc_admision_scroll.adm_habita
			forms.bandejaciru_frm_IngresoMedicamentos_tab_generico.fNroInternacion=globals.vHiscli.toString().substr(0,globals.vHiscli.toString().length-1)+"/"+globals.vHiscli.toString().substr(globals.vHiscli.toString().length-1,1)
			forms.bandejaciru_frm_IngresoMedicamentos_tab_generico.fEdad=globals.CalculoEdad(bandejaciru_hiscli_to_tbc_admision_scroll.adm_fecnac)+" "+globals.vTipoEdad
			forms.bandejaciru_frm_IngresoMedicamentos_tab_generico.fSexo=bandejaciru_hiscli_to_tbc_admision_scroll.adm_sexo
			globals.Hiscli_edit=bandejaciru_hiscli_to_tbc_admision_scroll.adm_histclinuni
			forms.bandejaciru_frm_IngresoMedicamentos_tab_generico.elements.lbl_nrointer.visible=true
			forms.bandejaciru_frm_IngresoMedicamentos_tab_generico.elements.fld_nrointer.visible=true
		}else{
			globals.bandejaciru_cama=" "
			globals.bandejaciru_habita=0
			forms.bandejaciru_frm_IngresoMedicamentos_tab_generico.fNroInternacion=" "
			forms.bandejaciru_frm_IngresoMedicamentos_tab_generico.fEdad=globals.CalculoEdad(bandejaciru_hiscli_to_tbc_hist_cab_new.histcabfechanac)+" "+globals.vTipoEdad
			forms.bandejaciru_frm_IngresoMedicamentos_tab_generico.fSexo=bandejaciru_hiscli_to_tbc_hist_cab_new.histcabsexo
			forms.bandejaciru_frm_IngresoMedicamentos_tab_generico.elements.lbl_nrointer.visible=false
			forms.bandejaciru_frm_IngresoMedicamentos_tab_generico.elements.fld_nrointer.visible=false
		}
		var ip_sector=application.getIPAddress()
		if(ip_sector=="12.100.10.67"||ip_sector=="12.100.10.68"){
			if($tipopac==0){
				if(bandejaciru_vs3_to_tbc_cirugint.getSize()>0){
					if(bandejaciru_vs3_to_tbc_cirugint.ciritipointerven==2){
						globals.bandejaciru_estado=3
						globals.bandejaciru_vEstado=3
						globals.bandejaciru_vSector=34
						//globals.bandejaciru_estado=1
						//globals.bandejaciru_vEstado=1
						//globals.bandejaciru_vSector=66
					}else{
						globals.bandejaciru_estado=1
						globals.bandejaciru_vEstado=1
						globals.bandejaciru_vSector=66
					}
				}else{
					if(bandejaciru_vs4_to_tbc_cirugint.getSize()>0){
						if(bandejaciru_vs4_to_tbc_cirugint.ciritipointerven==2){
							globals.bandejaciru_estado=3
							globals.bandejaciru_vEstado=3
							globals.bandejaciru_vSector=34
							//globals.bandejaciru_estado=1
							//globals.bandejaciru_vEstado=1
							//globals.bandejaciru_vSector=66
						}else{
							globals.bandejaciru_estado=1
							globals.bandejaciru_vEstado=1
							globals.bandejaciru_vSector=66
						}
					}else{
						globals.bandejaciru_estado=1
						globals.bandejaciru_vEstado=1
						globals.bandejaciru_vSector=66
					}
				}
			}else{
				globals.bandejaciru_estado=3
				globals.bandejaciru_vEstado=3
				globals.bandejaciru_vSector=34
				//globals.bandejaciru_estado=1
				//globals.bandejaciru_vEstado=1
				//globals.bandejaciru_vSector=66
			}
		}else{
			globals.bandejaciru_estado=1
			globals.bandejaciru_vEstado=1
			globals.bandejaciru_vSector=66
		}
		if(application.isInDeveloper()){
			if(ip_sector=="10.8.0.146"){
				globals.bandejaciru_estado=1
				globals.bandejaciru_vEstado=1
				globals.bandejaciru_vSector=66
			}else{
				globals.bandejaciru_estado=3
				globals.bandejaciru_vEstado=3
				globals.bandejaciru_vSector=34
			}
		}else{
			if(ip_sector=="10.8.0.146"){
				//globals.bandejaciru_estado=3
				//globals.bandejaciru_vEstado=3
				//globals.bandejaciru_vSector=34
				globals.bandejaciru_estado=1
				globals.bandejaciru_vEstado=1
				globals.bandejaciru_vSector=66
			}
		}
		globals.Ver_Bandeja_Ciru()
		if (globals.vBandejaCiru){
			return
		}
		var win = application.createWindow("Bandeja1",JSWindow.MODAL_DIALOG)	
		win.title= "Bandeja de Cirugía"
		win.resizable = false	
		win.show(forms.bandejaciru_frm_IngresoMedicamentos_tab_generico)
		forms.bandejaciru_tab_pacientes.creoDatasetCargoCirugint()
	}catch (msg){
		plugins.dialogs.showErrorDialog("Error seleccion Paciente",msg.message)
	}
}

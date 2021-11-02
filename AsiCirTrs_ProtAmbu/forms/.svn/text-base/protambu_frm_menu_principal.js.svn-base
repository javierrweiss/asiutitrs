/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FB4DE9E3-E9FE-4596-925B-6037D848D8BF"}
 */
var fSexo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0CA45D7E-FF3D-429C-8D85-F27CF14D6415"}
 */
var fEdad = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"88B63F2C-8101-413B-BD93-43ABDCC6FFFC",variableType:8}
 */
var fhiscli = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"24FAD25E-48F0-4B46-98B8-16DEC7A94E95"}
 */
var fAfiliado = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DA221A43-882E-4FB8-B079-2AD0F810C109"}
 */
var fPlan = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"07F53E8D-F1C8-4979-B40B-29F23F1A48C9"}
 */
var fCobertura = '';

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"3C26D60B-F0EE-4D05-9CBC-52E1E7DD8C09"}
 */
function onAction_volver(event) {
	//history.back()
	//forms.tab_scr_tbc_admision.controller.show()
	globals.vLegajo=0
	globals.vClave=0
	globals.vOperador=''
	globals.vPassOperador=''
	globals.vHiscli1=0
	globals.vhclin9=0
	
	globals.vHiscli=0
	
	globals.vHisclin=0
	/*
	globals.vClose=true
	var args = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+"true";
	application.closeSolution('Menu','retorno_MenuCirugia',args)
	*/
	globals.vClose=true
	forms.protambu_tab_pacientes_en_espera.controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"9E15DBD4-4AFE-4382-A476-AE6DD1E02C6F"}
 */
function onShow(firstShow, event) {
	globals.vClose=false
	globals.Hiscli_edit = globals.vHiscli.toString();
	switch (globals.Hiscli_edit.length){
		case 2:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,1)+'/'+globals.Hiscli_edit.substr(1,1);break;
		case 3:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,2)+'/'+globals.Hiscli_edit.substr(2,1);break;
		case 4:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,3)+'/'+globals.Hiscli_edit.substr(3,1);break;
		case 5:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,4)+'/'+globals.Hiscli_edit.substr(4,1);break;
		case 6:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,5)+'/'+globals.Hiscli_edit.substr(5,1);break;
		case 7:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,6)+'/'+globals.Hiscli_edit.substr(6,1);break;
		case 8:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,7)+'/'+globals.Hiscli_edit.substr(7,1);break;
	}	
	elements.btn_seguqui.requestFocus()

}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"96A5CEF3-69E0-4757-A536-4FAAF6BE5282"}
 */
function onAction_elige_seguridadQuirurgica(event) {
	try{
	globals.vClose=true
	globals.segambu_protocolo=0
	
	globals.segambu_tipohist = 1
	globals.segambu_tiponome=1
	
	globals.ControlAlerta(1, globals.vHiscli, 1, 1)	
	forms.seguquiambu_frm_menu_0.elements.lookup_nomenclador.visible=false
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.visible=false
	forms.seguquiambu_frm_menu_0.controller.show()
	}catch (msg){
		plugins.dialogs.showErrorDialog("Error en Seguridad Quirúrgica",msg.message)
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"FF886C4A-5116-493A-8715-5975D6702DE2"}
 * @AllowToRunInFind
 */
function onAction_elige_evaluacionAnestesica(event) {
	try{
	globals.vClose=true
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Ingrese Legajo del Anestesiólogo";
	win.setSize(570,260)
	win.resizable=false
	var $Lega=0
	$Lega=globals.vLega
	var $Operador=''
	$Operador=globals.vOperador
	var $TipoOperador=0
	$TipoOperador=globals.vTipoOperador
	globals.vSolomedicos=true
	globals.protambu_EsAnestesista=false
	globals.vLegajo=0
	globals.vLega=0
	globals.vOperador=''
	globals.vClave=0
	win.show(forms.protambu_PideLegajoMedico)
	if(!globals.protambu_EsAnestesista){
		win.hide()
		win.destroy()
		globals.DIALOGS.showWarningDialog("Error en Anestesiólogo","Debe ingresar legajo de Anestesiólogo","Ok")
		globals.vClose=false
		return
	}
	globals.vLegajoAnestesista=globals.vLega
	globals.vLegajoAnestesistaIE=globals.vTipoOperador
	globals.vNombreAnestesista=globals.vOperador
	globals.vLega=$Lega
	globals.vOperador=$Operador
	globals.vTipoOperador=$TipoOperador
	globals.ControlAlerta(1, globals.vHiscli, 1, 1)	
	if (globals.vLegajoAnestesista!=0&&globals.vSolomedicos&&globals.protambu_EsAnestesista){
		var fecha_actual = application.getServerTimeStamp()
		var anio=fecha_actual.getFullYear()
		var mes=fecha_actual.getMonth()+1
		var mes_ed
		if((fecha_actual.getMonth()+1)> 9){
			mes_ed=mes
		}else{
			mes_ed="0"+mes
		}
		var dia=fecha_actual.getDate()
		var dia_ed
		if(fecha_actual.getDate()>9){
			dia_ed=dia
		}else{
			dia_ed="0"+dia
		}
		var fecha_hoy=anio.toString()+mes_ed.toString()+dia_ed.toString()
		
		globals.vFechaActual=fecha_hoy
		globals.vSeleccionoRegistro=true
		
		
		globals.vHoraInicio=''
		globals.vInterven=0
		globals.vTipoInterv=''
		globals.vEdad=''
		globals.txt_4=''
		if(anesambu_vhiscli_to_tbc_anes_ambu.getSize()>0){
			 cargaCuadrosAnestesia()
			globals.anesambu_horainicio=anesambu_vhiscli_to_tbc_anes_ambu.aneshoraini.toString().substr(0,2)+":"+anesambu_vhiscli_to_tbc_anes_ambu.aneshoraini.toString().substr(2,2)
			forms.anesambu_frm_anestesia_preoperatoria_tab.fpresionmax=anesambu_vhiscli_to_tbc_anes_ambu.anespresionmax
			forms.anesambu_frm_anestesia_preoperatoria_tab.fpresionmin=anesambu_vhiscli_to_tbc_anes_ambu.anespresionmin
		}else{
			anesambu_vhiscli_to_tbc_anes_ambu.newRecord()
			globals.InicializarDatosDeRelacion(anesambu_vhiscli_to_tbc_anes_ambu,"asistencial","tbc_anes_ambu")
			inicializaCuadrosAnestesia()
		}
		forms.anesambu_frm_anestesia_preoperatoria_tab.fObrasocial=globals.protambu_ObraSocial
		forms.anesambu_frm_anestesia_preoperatoria_tab.fEdad=globals.Edad
		forms.anesambu_frm_anestesia_preoperatoria_tab.fSexo=protambu_vhiscli_to_tbc_hist_cab_new.histcabsexo
		var $fecnacim = ' ';
		$fecnacim=protambu_vhiscli_to_tbc_hist_cab_new.histcabfechanac
		if(protambu_vhiscli_to_tbc_hist_cab_new.histcabfechanac>10000000){
			forms.anesambu_frm_anestesia_preoperatoria_tab.fFechaNacim=$fecnacim.toString().substr(6,2)+'/'+$fecnacim.toString().substr(4,2)+'/'+$fecnacim.toString().substr(0,4)
		}else{
			forms.anesambu_frm_anestesia_preoperatoria_tab.fFechaNacim=' ';
		}
		var $fecvisita = ' ';
		$fecvisita=globals.anesambu_fechaingreso
		forms.anesambu_frm_anestesia_preoperatoria_tab.fFechaVisita=$fecvisita.toString().substr(6,2)+'/'+$fecvisita.toString().substr(4,2)+'/'+$fecvisita.toString().substr(0,4)
		var $tipodoc = ' ';
		switch (protambu_vhiscli_to_tbc_hist_cab_new.histcabtipodoc){
			case 1:$tipodoc="C.I. ";break;
			case 2:$tipodoc="L.E. ";break;
			case 3:$tipodoc="L.C. ";break;
			case 4:$tipodoc="D.N.I. ";break;
			case 5:$tipodoc="PAS. ";break;
			default:$tipodoc="Otro ";break;
		}
		forms.anesambu_frm_anestesia_preoperatoria_tab.fDocumento=$tipodoc+protambu_vhiscli_to_tbc_hist_cab_new.histcabnrodoc
		forms.anesambu_frm_anestesia_preoperatoria_tab.controller.show()
		forms.anesambu_frm_anestesia_preoperatoria_tab.controller.focusFirstField()
	}else{
		globals.vClose=false
		return
	}
	} catch (msg){
		plugins.dialogs.showErrorDialog("Error en Evaluación Anestésica",msg.message)
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"7C0BE0C9-C12C-49AF-A417-2F898F6D9D4C"}
 * @AllowToRunInFind
 */
function onAction_elige_ProtocoloQuirurgico(event) {
	try{
	globals.vClose=true
	if(protambul1400_vhiscli_to_tbc_guardia.getSize()>0){
		if(protambul1400_vhiscli_to_tbc_guardia.guar_estado==3){
			globals.DIALOGS.showWarningDialog("Historia Tomada","Historia tomada en otra Terminal","Ok")
			globals.vClose=false
			return
		}else{
			if(protambul1400_vhiscli_to_tbc_guardia.guar_estado>3){
				globals.DIALOGS.showWarningDialog("Historia con Alta","Historia con Protocolo con Alta","Ok")
				globals.vClose=false
				return
			}
		}
		
	}else{
		globals.DIALOGS.showWarningDialog("Error en Guardia","No existe registro de Guardia","Ok")
		globals.vClose=false
		return
	}
	//globals.Ver_hcir_ocu()
	
	//if (globals.vHcirOcu){
		//plugins.dialogs.showInfoDialog("Historia Clinica Tomada","Historia Clinica tomada por otro Usuario y/o Sesión")
	//}else{
		globals.ControlAlerta(1, globals.vHiscli, 1, 1)
			
		globals.proto1=''
		globals.proto2=''
		globals.proto3=''
		globals.proto4=''
		globals.proto5=''
		globals.proto6=''
		globals.proto7=''
		globals.proto8=''
		globals.proto9=''
		globals.hcicirtxt1=''
		globals.hcicirtxt2=''
		globals.hcicirtxt3=''
		globals.hcicirtxt4=''
		globals.hcicirtxt5=''
		globals.hcicirtxt6=''
		globals.hcicirtxt7=''
		globals.hcicirtxt8=''
		
		var fecha_actual = application.getServerTimeStamp()
		var anio=fecha_actual.getFullYear()
		var mes=fecha_actual.getMonth()+1
		var mes_ed
		if((fecha_actual.getMonth()+1) < 10){
			mes_ed="0"+mes
		}else{
			mes_ed=mes
		}
		var dia=fecha_actual.getDate()
		var dia_ed
		if(fecha_actual.getDate()<10){
			dia_ed="0"+dia
		}else{
			dia_ed=dia
		}
		var fecha_hoy=anio.toString()+mes_ed.toString()+dia_ed.toString()
		
		
		globals.vFechaActual=fecha_hoy
		
		var fs2 = databaseManager.getFoundSet("asistencial","tbc_seguqui_new")
		var fs3 = databaseManager.getFoundSet("asistencial","tbc_ciruguar")
		fs2.clear()
		fs3.clear()
		
		fs2.find()
		fs2['segtipohc']=1
		fs2['seghistclinica']=globals.vHiscli
		fs2['segfechacarga']=globals.segambu_fecha_ingreso
		fs2['seghoracarga']=globals.segambu_hora_ingreso
		fs2.search(true)
		var $existe_seguqui=protambu_vhiscli_to_tbc_seguqui_new.getSize()
		if($existe_seguqui>0){
			if(!buscarSeguridadQuirurgica()){
				plugins.dialogs.showInfoDialog("Seguridad Quirurgica","FALTA COMPLETAR LA SEGURIDAD QUIRURGICA")
				plugins.dialogs.showInfoDialog("Datos Faltantes de Seguridad Quirurgica",globals.vBuscarSeguriProcesos)
				globals.DeslocHcir()
				globals.vClose=false
				return
			}else{
				forms.protambu_frm_1400.fEdad=fEdad
				forms.protambu_frm_1400.fcobertura=fCobertura
				forms.protambu_frm_1400.fAfiliado=fAfiliado
				forms.protambu_frm_1400.fPlan=fPlan
				forms.protambu_frm_1400.fSexo=fSexo
				if(protambu1400_vhiscli_to_tbc_ciruguar.getSize()>0){
					globals.protambu1400_protocoloNuevo=false
				}else{
					globals.protambu1400_protocoloNuevo=true
				}
				globals.protambu1400_SolucionQueLlama=utils.stringTrim(application.getSolutionName())
				forms.protambu_frm_1400.controller.show()
			}
		}
	} catch (msg){
		plugins.dialogs.showErrorDialog("Error en Protocolo",msg.message)
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"A0452F07-0C8B-4501-B5B9-11D59D7B1A7C"}
 */
function onAction_elige_ImprimeProtocolo(event) {
	//forms.frm_consulta_protocolo_dtl.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"87545579-7BD2-4778-A858-0F4EF4164127"}
 * @AllowToRunInFind
 */
function onAction_elige_TratamientoObstetricia(event) {
	globals.Ver_Bandeja_Ciru()
	/*
	if (globals.vBandejaCiru){
		plugins.dialogs.showInfoDialog("Historia Clinica Tomada","Historia Clinica tomada por otro Usuario y/o Sesión")
	}else{
		globals.vHiscli2259=globals.vHiscli
		var fs = databaseManager.getFoundSet("asistencial","tbc_cirugint")
		fs.find()
		fs['cirihistcl']=globals.vHiscli
		fs['ciriestado']=0
		fs['ciritiponome']=0
		fs['ciricodnome']=0
		fs.search(true)
		if(fs.getSize()>0){
			fs.setSelectedIndex(1)
			globals.vNroProtocolo=fs['ciriprotocolo']
		}
		globals.vNroProtocolo2259=globals.vNroProtocolo
		globals.vTipoHC=0
		globals.vTipoLegajo=globals.vTipoOperador
		globals.vNroLegajo=globals.vLega
		application.showForm("frm_IngresoMedicamentos_tab")
	}
	*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"03D028C0-9EEC-4868-93EB-86CDA06A5D90"}
 */
function onAction_Elige_ImpresionProtocoloQuirurgico(event) {
	try{
	globals.vClose=true
	globals.vHisclin=globals.vHiscli
	globals.reimpresor_fecha_ingreso=globals.segambu_fecha_ingreso
	globals.reimpresor_hora_ingreso=globals.segambu_hora_ingreso
	globals.vFormulario="protambu_frm_menu_principal"
	forms.reimpresor_frm_consulta_protocolo.controller.show()
	} catch(msg){
		plugins.dialogs.showErrorDialog("Error en Reimpresion",msg.message)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"968D9AB4-47BE-420B-8C79-B21CE0905651"}
 */
function onAction_elige_ImpresionConsentimientos(event) {
	try{
	globals.vClose=true
	var args = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+globals.vHiscli+';'+globals.vApeyNom+';'+globals.vSexo+';'+globals.vFechaIngreso+';'+globals.vHoraIngreso;
	application.closeSolution('Consentimientos','llamada_desde_Menu_Cirugia',args)
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error en consentimientos",msg.message)
	}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F741B56A-D416-4FB2-BF2E-3F70681C2647"}
 */
function onAction_ayuda_menu_principal(event) {
	//globals.textoAyuda='AYUDA-3'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Menú Principal";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.protambu_frm_ayuda_1)
}

/**
 * @properties={typeid:24,uuid:"1C90EBBB-5491-4272-BD17-AA666A89DB99"}
 * @AllowToRunInFind
 */
function buscarSeguridadQuirurgica() {
	var query = "select * from tbc_seguqui_new where SegTipoHc = 1 and SegHistClinica = ? and SegFechaCarga = ? and segHoraCarga = ? ";
    var args = new Array();
    args[0]=globals.vHiscli;
    args[1]=globals.segambu_fecha_ingreso;
    args[2]=globals.segambu_hora_ingreso;
    var dataset = new Array();
    dataset = databaseManager.getDataSetByQuery("asistencial", query, args, 1);
    //var filas = dataset.getMaxRowIndex()
    /*
	var fs2 = databaseManager.getFoundSet("asistencial","tbc_seguqui_new")
	fs2.find()
	fs2['segtipohc']=0
	fs2['seghistclinica']=globals.vHiscli
	fs2['segprotocolo']=0
	fs2.search(true)
	*/
	var retorno = true
	//if(fs2['segciruiden']==0||fs2['segcirculbanio']==0||fs2['segcirculmate']==0||fs2['segcirculhiscli']==0||fs2['segcirculestu']==0||fs2['segcirculprote']==0||fs2['segcirculconsen']==0||fs2['segadmindiag']==0||fs2['seglegacirculini']==0){
	if(dataset.getMaxRowIndex()>0){
		if(dataset.getValue(1,14)==0||dataset.getValue(1,15)==0||dataset.getValue(1,16)==0||dataset.getValue(1,17)==0||dataset.getValue(1,18)==0||dataset.getValue(1,19)==0||dataset.getValue(1,20)==0||dataset.getValue(1,10)==0||dataset.getValue(1,21)==0){
			globals.vBuscarSeguriProcesos+="Falta segcirculident -> "+dataset.getValue(1,14)+"- segcirculbanio ->"+dataset.getValue(1,15)+"- segcirculmate-> "+dataset.getValue(1,16)+" - segcirculhiscli ->"+dataset.getValue(1,17)+" - segcirculestu->"+dataset.getValue(1,18)+ " - segcirculprote->"+dataset.getValue(1,19)+" - segcirculconsen-> "+dataset.getValue(1,20)+" - segadmindiag-> "+dataset.getValue(1,10)+" - seglegacirculini-> "+dataset.getValue(1,21)+'\n'
			retorno=false
		}
		if(dataset.getValue(1,23)==0||dataset.getValue(1,24)==0||dataset.getValue(1,25)==0||dataset.getValue(1,26)==0||dataset.getValue(1,28)==0||dataset.getValue(1,29)==0||dataset.getValue(1,30)==0||dataset.getValue(1,31)==0||dataset.getValue(1,62)==0||dataset.getValue(1,63)==0||dataset.getValue(1,64)==0){
			globals.vBuscarSeguriProcesos+="Falta seganestident -> "+dataset.getValue(1,23)+" -seganestpulso-> "+dataset.getValue(1,24)+" -seganestseguri->"+dataset.getValue(1,25)+" -seganestviaaerea-> "+dataset.getValue(1,28)+" -seganestacceso-> "+dataset.getValue(1,29)+" -seganestsangre-> "+dataset.getValue(1,30)+" -seganestocular-> "+dataset.getValue(1,62)+" -seganestdecubi-> "+dataset.getValue(1,63)+" -seglegaanestini-> "+dataset.getValue(1,31)+" -seganestcomorb-> "+dataset.getValue(1,64)+'\n'
			retorno=false
		}
		if(dataset.getValue(1,33)==0||dataset.getValue(1,34)==0||dataset.getValue(1,35)==0||dataset.getValue(1,36)==0||dataset.getValue(1,37)==0){
			globals.vBuscarSeguriProcesos+="Falta segciruident -> "+dataset.getValue(1,33)+" -segciruantibiot-> "+dataset.getValue(1,34)+" segcirubisturi->"+dataset.getValue(1,35)+" -segciruincidentes-> "+dataset.getValue(1,36)+" -seglegaciruini-> "+dataset.getValue(1,37)+'\n'
			retorno=false
		}
		if(dataset.getValue(1,39)==0||dataset.getValue(1,42)==0||dataset.getValue(1,43)==0||dataset.getValue(1,44)==0||dataset.getValue(1,40)==0||dataset.getValue(1,45)==0){
			globals.vBuscarSeguriProcesos+="Falta seganestrepasaini -> "+dataset.getValue(1,39)+" -seginstrurepasaini-> "+dataset.getValue(1,42)+" -seginstrugasasini-> "+dataset.getValue(1,43)+" -seginstrupinzasini-> "+dataset.getValue(1,44)+" -seglegaanestrepi-> "+dataset.getValue(1,40)+" -seglegainstruini-> "+dataset.getValue(1,45)+'\n'
			retorno=false
		}
		if(dataset.getValue(1,69)==0||dataset.getValue(1,70)==0||dataset.getValue(1,71)==0||dataset.getValue(1,72)==0||dataset.getValue(1,73)==0||dataset.getValue(1,74)==0||dataset.getValue(1,75)==0){
			globals.vBuscarSeguriProcesos+="Falta segcirculequipres-> "+dataset.getValue(1,69)+" -segcirculequifunc-> "+dataset.getValue(1,70)+" -segcirculidsipr-> "+dataset.getValue(1,71)+" -segcirculdecubi-> "+dataset.getValue(1,72)+" -segcirculimprev->"+dataset.getValue(1,73)+" -segcirculanesproblema-> "+dataset.getValue(1,74)+" -seglegacirculcut-> "+dataset.getValue(1,75)+'\n'
			retorno=false
		}
	}else{
		globals.vBuscarSeguriProcesos+="No hay registro de Seguridad Quirúrgica cargado."
		retorno=false
	}
	return retorno
}


/**
 * @properties={typeid:24,uuid:"17FB1D31-77A0-4901-A60E-45A9C89CBF2D"}
 */
function cargaCuadrosAnestesia() {
	
	var i=0
	for(i=1;i<=17;i++){
		forms.anesambu_frm_grupo1_chk['fcardio_'+i]=utils.stringToNumber(anesambu_vhiscli_to_tbc_anes_ambu.ele1_1.toString().substr(i-1,1))
	}
	for(i=1;i<=5;i++){
		forms.anesambu_frm_grupo2_chk['fgastro_'+i]=utils.stringToNumber(anesambu_vhiscli_to_tbc_anes_ambu.ele1_2.toString().substr(i-1,1))
	}
	for(i=1;i<=4;i++){
		forms.anesambu_frm_grupo2_chk['fdifane_'+i]=utils.stringToNumber(anesambu_vhiscli_to_tbc_anes_ambu.ele1_3.toString().substr(i-1,1))
	}
	for(i=1;i<=3;i++){
		forms.anesambu_frm_grupo2_chk['fhepa_'+i]=utils.stringToNumber(anesambu_vhiscli_to_tbc_anes_ambu.ele1_4.toString().substr(i-1,1))
	}
	for(i=1;i<=6;i++){
		forms.anesambu_frm_grupo2_chk['fpulmon_'+i]=utils.stringToNumber(anesambu_vhiscli_to_tbc_anes_ambu.ele1_5.toString().substr(i-1,1))
	}
	for(i=1;i<=9;i++){
		forms.anesambu_frm_grupo3_chk['fneuro_'+i]=utils.stringToNumber(anesambu_vhiscli_to_tbc_anes_ambu.ele1_6.toString().substr(i-1,1))
	}
	for(i=1;i<=5;i++){
		forms.anesambu_frm_grupo3_chk['fendo_'+i]=utils.stringToNumber(anesambu_vhiscli_to_tbc_anes_ambu.ele1_7.toString().substr(i-1,1))
	}
	for(i=1;i<=6;i++){
		forms.anesambu_frm_grupo4_chk['factidia_'+i]=utils.stringToNumber(anesambu_vhiscli_to_tbc_anes_ambu.ele1_8.toString().substr(i-1,1))
	}
	for(i=1;i<=3;i++){
		forms.anesambu_frm_grupo4_chk['fusodroga_'+i]=utils.stringToNumber(anesambu_vhiscli_to_tbc_anes_ambu.ele1_9.toString().substr(i-1,1))
	}
	forms.anesambu_frm_grupo4_chk['fasa_1']=utils.stringToNumber(anesambu_vhiscli_to_tbc_anes_ambu.ele1_10.toString().substr(0,1))
	for(i=1;i<=3;i++){
		forms.anesambu_frm_grupo4_chk['fpedia_'+i]=utils.stringToNumber(anesambu_vhiscli_to_tbc_anes_ambu.ele1_11.toString().substr(i-1,1))
	}
	for(i=1;i<=3;i++){
		forms.anesambu_frm_grupo4_chk['fobste_'+i]=utils.stringToNumber(anesambu_vhiscli_to_tbc_anes_ambu.ele1_12.toString().substr(i-1,1))
	}
	for(i=1;i<=4;i++){
		forms.anesambu_frm_grupo5_chk['frenal_'+i]=utils.stringToNumber(anesambu_vhiscli_to_tbc_anes_ambu.ele1_13.toString().substr(i-1,1))
	}
	for(i=1;i<=5;i++){
		forms.anesambu_frm_grupo5_chk['finfec_'+i]=utils.stringToNumber(anesambu_vhiscli_to_tbc_anes_ambu.ele1_14.toString().substr(i-1,1))
	}
	for(i=1;i<=6;i++){
		forms.anesambu_frm_grupo5_chk['fhemat_'+i]=utils.stringToNumber(anesambu_vhiscli_to_tbc_anes_ambu.ele1_15.toString().substr(i-1,1))
	}
	for(i=1;i<=6;i++){
		forms.anesambu_frm_grupo6_chk['fotros_'+i]=utils.stringToNumber(anesambu_vhiscli_to_tbc_anes_ambu.ele1_16.toString().substr(i-1,1))
	}
	for(i=1;i<=4;i++){
		forms.anesambu_frm_grupo6_chk['freghab_'+i]=utils.stringToNumber(anesambu_vhiscli_to_tbc_anes_ambu.ele1_17.toString().substr(i-1,1))
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B94F9E0D-100E-48A0-9E7F-AB120BBC3F91"}
 */
function onAction_ingreso_medicamentos(event) {
	globals.vClose=true
	globals.Ver_Bandeja_Ciru()
	
	if (globals.vBandejaCiru){
		globals.vClose=false
		plugins.dialogs.showInfoDialog("Historia Clinica Tomada","Historia Clinica tomada por otro Usuario y/o Sesión")
	}else{
		if(protambu1400_vhiscli_to_tbc_ciruguar.getSize()>0){
			if(protambu1400_vhiscli_to_tbc_ciruguar.cirgtipointerven==2){
				globals.bandejaciru_vEstado=3
				globals.bandejaciru_vSector=34
				//globals.bandejaciru_vEstado=1
				//globals.bandejaciru_vSector=66
			}else{
				globals.bandejaciru_vEstado=1
				globals.bandejaciru_vSector=66
			}
			globals.bandejaciru_vImed=0
			globals.bandejaciru_fechaingreso=globals.anesambu_fechaingreso
			globals.bandejaciru_horaingreso=globals.anesambu_horaingreso
			globals.bandejaciru_protocolo=protambu1400_vhiscli_to_tbc_ciruguar.cirgprotocolo
			globals.vNroProtocolo=globals.bandejaciru_protocolo
			globals.bandejaciru_Cirujano=globals.protambu1400_legcirujano
			globals.bandejaciru_TipoCirujano=globals.protambu1400_io_legcirujano
			globals.bandejaciru_LegOperador=globals.vLega
			globals.bandejaciru_TipOperador=globals.vTipoOperador
			globals.bandejaciru_TipHisclin=1
			globals.Hiscli_edit=globals.vHiscli
			forms.bandejaciru_frm_IngresoMedicamentos_tab.fEdad=fEdad
			forms.bandejaciru_frm_IngresoMedicamentos_tab.fObraSocial=fCobertura
			forms.bandejaciru_frm_IngresoMedicamentos_tab.fPacienteApeynom=protambu_vhiscli_to_tbc_hist_cab_new.histcabapellnom
			forms.bandejaciru_frm_IngresoMedicamentos_tab.fSexo=fSexo
			forms.bandejaciru_frm_IngresoMedicamentos_tab.controller.show()
		}else{
			globals.vClose=false
			globals.Desloc_Bandeja_Ciru()
			globals.DIALOGS.showWarningDialog("Falta Protocolo","La Historia no tiene Protocolo cargado","Ok")
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
 * @properties={typeid:24,uuid:"2373FEB7-BBC1-4418-BDB6-4ACE3201BC3A"}
 */
function onHide_protambu_frm_menu_principal(event) {
	// TODO Auto-generated method stub
	return globals.vClose
}

/**
 * @properties={typeid:24,uuid:"BD7A76F1-6F84-49F2-9ADA-C6B7C09910BE"}
 */
function inicializaCuadrosAnestesia(){
	var i=0
	var name=''
	name='anesambu_frm_grupo1_chk'
	for(i=1;i<=17;i++){
		forms[name]['fcardio_'+i]=0
	}
	for(i=1;i<=5;i++){
		forms.anesambu_frm_grupo2_chk['fgastro_'+i]=0
	}
	for(i=1;i<=4;i++){
		forms.anesambu_frm_grupo2_chk['fdifane_'+i]=0
	}
	for(i=1;i<=3;i++){
		forms.anesambu_frm_grupo2_chk['fhepa_'+i]=0
	}
	for(i=1;i<=6;i++){
		forms.anesambu_frm_grupo2_chk['fpulmon_'+i]=0
	}
	for(i=1;i<=9;i++){
		forms.anesambu_frm_grupo3_chk['fneuro_'+i]=0
	}
	for(i=1;i<=5;i++){
		forms.anesambu_frm_grupo3_chk['fendo_'+i]=0
	}
	for(i=1;i<=6;i++){
		forms.anesambu_frm_grupo4_chk['factidia_'+i]=0
	}
	for(i=1;i<=3;i++){
		forms.anesambu_frm_grupo4_chk['fusodroga_'+i]=0
	}
	forms.anesambu_frm_grupo4_chk['fasa_1']=0
	for(i=1;i<=3;i++){
		forms.anesambu_frm_grupo4_chk['fpedia_'+i]=0
	}
	for(i=1;i<=3;i++){
		forms.anesambu_frm_grupo4_chk['fobste_'+i]=0
	}
	for(i=1;i<=4;i++){
		forms.anesambu_frm_grupo5_chk['frenal_'+i]=0
	}
	for(i=1;i<=5;i++){
		forms.anesambu_frm_grupo5_chk['finfec_'+i]=0
	}
	for(i=1;i<=6;i++){
		forms.anesambu_frm_grupo5_chk['fhemat_'+i]=0
	}
	for(i=1;i<=6;i++){
		forms.anesambu_frm_grupo6_chk['fotros_'+i]=0
	}
	for(i=1;i<=4;i++){
		forms.anesambu_frm_grupo6_chk['freghab_'+i]=0
	}
}
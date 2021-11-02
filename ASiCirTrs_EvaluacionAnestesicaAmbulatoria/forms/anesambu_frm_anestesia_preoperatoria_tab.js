/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8709E4E2-AC19-4B9E-8897-8DDADA62B6F6",variableType:4}
 */
var fpresionmin = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"592CA68C-A262-4668-9448-53C1343A709A",variableType:4}
 */
var fpresionmax = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"43863684-7FCA-4021-9A33-A0B59D0EEFA4"}
 */
var fFechaVisita = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5E7C6BDF-9121-4378-A155-C38F9D613A53"}
 */
var fEdad = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FB0DCFB0-6179-422D-9383-AD1308C79128",variableType:4}
 */
var fSexo = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"43636A54-0F98-4284-802C-548F27CE5794"}
 */
var fDocumento = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2D61A655-6624-42E4-985C-EAB880889D22"}
 */
var fFechaNacim = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DFE44F05-C3F5-4DAC-B071-180B49BDEAD1"}
 */
var fObrasocial = '';

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"34360538-B62C-4098-9816-1CA01489ECB1"}
 */
function onShow_anestesia_preope(firstShow, event) {
	if(!globals.anesambu_valida_datos_cabecera("anesambu_frm_anestesia_preoperatoria_tab", 'fpresionmin')){
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.presiomin.border='LineBorder,1,#ff0000';
	}else{
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.presiomin.border='LineBorder,1,#000000';
	}
	if(!globals.anesambu_valida_datos_cabecera("anesambu_frm_anestesia_preoperatoria_tab", 'fpresionmax')){
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.presiomax.border='LineBorder,1,#ff0000';
	}else{
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.presiomax.border='LineBorder,1,#000000';
	}
	if(globals.anesambu_horainicio==''||globals.anesambu_horainicio==null){
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.horainicio.border='LineBorder,1,#ff0000';
	}else{
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.horainicio.border='LineBorder,1,#000000';
	}
	globals.vClose=false
	elements.btn_grabar.visible=false
	controller.focusFirstField()
	
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"12141581-CB6D-43DA-A670-3FE1E22A0317"}
 * @AllowToRunInFind
 */
function onAction_hiscli() {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6B59953C-6BDB-4FE7-8E25-C792F5E27AC9"}
 */
function onAction_radio(event) {
	
}

/**
 * @properties={typeid:24,uuid:"91CF47CA-22B8-4DBA-8BAE-16744D6C3F87"}
 */
function controlo_Admision() {
	globals.vProtocolo = false
	globals.vSeleccionoRegistro = true
	/**
	var win = application.createWindow("b",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Paciente Internado";
	//globals.muestroNuevoDataset("tbc_admisionN")
	win.show(forms.tbc_admision)
	if (globals.vSeleccionoRegistro){
	   if (vhisclin_to_tbc_admision.adm_fecepic>0){
		   if(vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.obr_espami!=2){
		       plugins.dialogs.showErrorDialog("Estado de Paciente","Paciente con Alta Clinica","Ok")
		       controlo_Admision()
	       }else{
		       plugins.dialogs.showErrorDialog("Estado de Paciente","Paciente con Egreso Sanatorial","Ok")
		       controlo_Admision()
	       }  
	   }
	}else{
		controlo_Admision()
	}
	*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8DC5AB0F-0C26-4EC1-A548-DF96C695F19A"}
 */
function onAction_Interven(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Intervención";
	//win.show(forms.frm_busqueda_interven)
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"98E3B5A2-0A19-40AA-857A-D9C51C233055"}
 */
function onDataChange_HoraInicio(oldValue, newValue, event) {
  var resultado=0;
  var largo =0;
  if(newValue!=null){
     largo = newValue.length;
  }
  var esnumero = true;
  for (var i= 0;i<largo && esnumero == true; i++){
		if (newValue.charCodeAt(i)< 48 || newValue.charCodeAt(i) > 57){
			esnumero = false
		}
  }
  if (esnumero){
    if(newValue>59&&newValue<100){
	  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
	  globals.anesambu_horainicio=oldValue
    }else{
	  if(newValue>2359){
		  plugins.dialogs.showInfoDialog("Error en Hora","Valor en Horas erróneo")
		  globals.anesambu_horainicio=oldValue  
	  }else{
		  resultado=Math.floor(newValue/100);
		   resultado=resultado*100;
		  resultado=newValue-resultado;
		  if(resultado>59&&resultado<100){
			  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
			  globals.anesambu_horainicio=oldValue    
		  }
	  }
    }
   globals.anesambu_horainicio = globals.anesambu_horainicio.replace(":","")
   globals.vHora = utils.stringToNumber(globals.anesambu_horainicio)
  globals.anesambu_horainicio=globals.FormatearHora()
  if(globals.anesambu_horainicio==''||globals.anesambu_horainicio==null){
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.horainicio.border='LineBorder,1,#ff0000';
	}else{
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.horainicio.border='LineBorder,1,#000000';
  }
  elements.presiomax.requestFocus()
  return true
  }else{
	  newValue=''
	  oldValue=''  
	  return false
  }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"47D539F1-243D-4989-B3E4-9B15C530D517"}
 */
function onAction_Focus(event) {
	/**
	globals.tabseq = globals.tabseq + 1
	var tabSeq=controller.getTabSequence()
	if (globals.tabseq > tabSeq.length){
		controller.focusFirstField()
	}else{
		controller.focusField(tabSeq[globals.tabseq],true)
	    				
	}
	*/
	var tabSeq=controller.getTabSequence()

}

/**
 * @properties={typeid:24,uuid:"A8BD8D61-A232-4B62-A8B4-DA03602AD9DF"}
 */
function InicializoNuevoRegistro(base, tabla, relacion) {
	var table = databaseManager.getTable(base, tabla)
    var columnNamesArray = table.getColumnNames();
	for (var i = 0; i < foundset[relacion].alldataproviders.length; i++) {
        var name = foundset[relacion].alldataproviders[i];
        
        var columnNames = table.getColumnNames()
        
        var firstColumnName = columnNamesArray[i];
        var jscolumn = table.getColumn(firstColumnName);
        var columnLength = jscolumn.getLength();
        
        foundset[relacion][firstColumnName] = 0
       var columnType = jscolumn.getType();
       if (columnType == 12){
    	   foundset[relacion][firstColumnName] = ' '
         }
       
      
    }
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F071517C-5AD1-4FC5-B598-557E20065FCD"}
 */
function onDataChangeTipoCirugia(oldValue, newValue, event) {
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D1827170-70AF-49E9-B265-99179E0DAA1B"}
 */
function onDataChangeMallampati(oldValue, newValue, event) {
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5D60BBF3-69D7-40F2-B39F-44BB684762A8"}
 */
function onDataChange_Generico(oldValue, newValue, event) {
	
   return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6230B9CA-9236-4577-9680-E83CFBCE4D21"}
 */
function onShow_aneste_Focus(firstShow, event) {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"80B19B54-5D29-481B-9007-C9EDB87F9EDE"}
 */
function onAction_HoraInicio(event) {
	if (elements.horainicio == '' || elements.horainicio == ' ' || elements.horainicio ==null){
		elements.horainicio.requestFocus()
	}else{	
    	elements.presiomax.requestFocus()
	}
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5F1F2C80-A732-446A-AEF4-695B61836CF2"}
 */
function onFocusGained(event) {
	var tabSeq=controller.getTabSequence()
}

/**
 * @properties={typeid:24,uuid:"35217B51-0747-4289-9B48-D1FECA928642"}
 */
function MuestroEstadoBotonesChek() {
	
}

/**
 * @param {string} form
 * 
 * @properties={typeid:24,uuid:"1BA85BD4-B7F4-43D7-9462-295A4437A799"}
 */
function validoIngresoCheks(form) {
	
}

/**
 * @param {string} form
 * @param {number} maximo
 * 
 * @properties={typeid:24,uuid:"F6EDEA45-E4D3-4690-8C7A-E8A58A841CAA"}
 */
function validoIngresoCheksNew(form, maximo) {
	
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D9518B3C-C0D6-4B98-8D4A-535AA08AB321"}
 */
function onDataChange_interven(oldValue, newValue, event) {
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"7FC5AC30-F300-4B3B-A2CC-7E8472B00E2E"}
 */
function onDataChange_tipointerven(oldValue, newValue, event) {
	
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"381BE123-50F7-490A-9FCA-077A9132E73D"}
 */
function onDataChange_evaluacion(oldValue, newValue, event) {
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5472C5B3-28B7-4039-B079-FEED3FB336B4"}
 */
function onDataChange_frecuencia(oldValue, newValue, event) {
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5C223ACE-88D1-4E7C-AD50-81F5C45F756E"}
 */
function onDataChange_pulsocarac(oldValue, newValue, event) {
	
			return true
		
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A1CC894D-9565-426F-A43B-863975082168"}
 */
function onDataChange_presiomax(oldValue, newValue, event) {
	if(!globals.anesambu_valida_datos_cabecera("anesambu_frm_anestesia_preoperatoria_tab", 'fpresionmax')){
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.presiomax.border='LineBorder,1,#ff0000';
	}else{
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.presiomax.border='LineBorder,1,#000000';
	}
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"4ADB7A96-A945-4257-8CE8-44EF59D17D5D"}
 */
function onDataChange_presiomin(oldValue, newValue, event) {
	if(!globals.anesambu_valida_datos_cabecera("anesambu_frm_anestesia_preoperatoria_tab", 'fpresionmin')){
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.presiomin.border='LineBorder,1,#ff0000';
	}else{
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.presiomin.border='LineBorder,1,#000000';
	}
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"BF86D274-19A0-484E-9B9C-3820D5FB63FE"}
 */
function onDataChange_asa(oldValue, newValue, event) {
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"08887E9A-8F9E-4B47-9A35-33703A8D6FE6"}
 */
function onAction_VolveraMenu(event) {
	globals.vClose=true
	databaseManager.revertEditedRecords()
	var respuesta='Si';
	if(anesambu_vhiscli_to_tbc_anes_ambu.getSize()<1){
		respuesta=globals.DIALOGS.showInfoDialog("¡Atención!","Al salir perderá los cambios. ¿Desea salir sin grabar los cambios?","Si","No")
	}

	if(respuesta=="Si"){
		application.showForm("protambu_frm_menu_principal")
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"61DA0DD7-CB44-453F-B446-AC16207DFA73"}
 */
function onAction_pulsocarac(event) {
	elements.presiomax.requestFocus()	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"905ECB3B-685F-4680-853D-A5842BF80C70"}
 */
function onAction_ayuda_evaluacion_anestesica_preoperatoria(event) {
	//globals.textoAyuda='AYUDA-4'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Evaluación Anestésica Pre-Operatoria";
	win.setLocation(810,300)
	win.setSize(500,350)
	//win.show(forms.frm_ayuda_2)
}

/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0CC964F4-0718-4520-93EC-D5D82C8F6CA7"}
 */
function onDoubleClick_Interven(event) {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3B4F5F80-0613-4C07-8FCE-1F351D97542C"}
 */
function onAction_tipointerven(event) {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"949437B9-6AD3-474C-B8D2-E46BB9FFE2D9"}
 */
function onAction_evaluacion(event) {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"BF0C59C6-FC96-49F9-98F3-19B0377E6553"}
 */
function onAction_btn_graba(event) {
	var ele_1=''
	var i=0
	if(anesambu_vhiscli_to_tbc_anes_ambu.getSize()<1){
		anesambu_vhiscli_to_tbc_anes_ambu.newRecord()
		globals.InicializarDatosDeRelacion(anesambu_vhiscli_to_tbc_anes_ambu,"asistencial","tbc_anes_ambu")
	}
	for(i=1;i<=17;i++){
		ele_1+=forms.anesambu_frm_grupo1_chk['fcardio_'+i]
	}
	for(i=1;i<=3;i++){
		ele_1+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_1=ele_1
	var ele_2=''
	for(i=1;i<=5;i++){
		ele_2+=forms.anesambu_frm_grupo2_chk['fgastro_'+i]
	}
	for(i=1;i<=15;i++){
		ele_2+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_2=ele_2
	var ele_3=''
	for(i=1;i<=4;i++){
		ele_3+=forms.anesambu_frm_grupo2_chk['fdifane_'+i]
	}
	for(i=1;i<=16;i++){
		ele_3+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_3=ele_3
	var ele_4=''
	for(i=1;i<=3;i++){
		ele_4+=forms.anesambu_frm_grupo2_chk['fhepa_'+i]
	}
	for(i=1;i<=17;i++){
		ele_4+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_4=ele_4
	var ele_5=''
	for(i=1;i<=6;i++){
		ele_5+=forms.anesambu_frm_grupo2_chk['fpulmon_'+i]
	}
	for(i=1;i<=14;i++){
		ele_5+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_5=ele_5
	var ele_6=''
	for(i=1;i<=9;i++){
		ele_6+=forms.anesambu_frm_grupo3_chk['fneuro_'+i]
	}
	for(i=1;i<=11;i++){
		ele_6+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_6=ele_6
	var ele_7=''
	for(i=1;i<=5;i++){
		ele_7+=forms.anesambu_frm_grupo3_chk['fendo_'+i]
	}
	for(i=1;i<=15;i++){
		ele_7+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_7=ele_7
	var ele_8=''
	for(i=1;i<=6;i++){
		ele_8+=forms.anesambu_frm_grupo4_chk['factidia_'+i]
	}
	for(i=1;i<=14;i++){
		ele_8+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_8=ele_8
	var ele_9=''
	for(i=1;i<=3;i++){
		ele_9+=forms.anesambu_frm_grupo4_chk['fusodroga_'+i]
	}
	for(i=1;i<=17;i++){
		ele_9+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_9=ele_9
	var ele_10=''
	ele_10+=forms.anesambu_frm_grupo4_chk['fasa_1']
	for(i=1;i<=19;i++){
		ele_10+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_10=ele_10
	var ele_11=''
	for(i=1;i<=3;i++){
		ele_11+=forms.anesambu_frm_grupo4_chk['fpedia_'+i]
	}
	for(i=1;i<=17;i++){
		ele_11+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_11=ele_11
	var ele_12=''
	for(i=1;i<=3;i++){
		ele_12+=forms.anesambu_frm_grupo4_chk['fobste_'+i]
	}
	for(i=1;i<=17;i++){
		ele_12+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_12=ele_12
	var ele_13=''
	for(i=1;i<=4;i++){
		ele_13+=forms.anesambu_frm_grupo5_chk['frenal_'+i]
	}
	for(i=1;i<=16;i++){
		ele_13+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_13=ele_13
	var ele_14=''
	for(i=1;i<=5;i++){
		ele_14+=forms.anesambu_frm_grupo5_chk['finfec_'+i]
	}
	for(i=1;i<=15;i++){
		ele_14+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_14=ele_14
	var ele_15=''
	for(i=1;i<=6;i++){
		ele_15+=forms.anesambu_frm_grupo5_chk['fhemat_'+i]
	}
	for(i=1;i<=14;i++){
		ele_15+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_15=ele_15
	var ele_16=''
	for(i=1;i<=6;i++){
		ele_16+=forms.anesambu_frm_grupo6_chk['fotros_'+i]
	}
	for(i=1;i<=14;i++){
		ele_16+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_16=ele_16
	var ele_17=''
	for(i=1;i<=4;i++){
		ele_17+=forms.anesambu_frm_grupo6_chk['freghab_'+i]
	}
	for(i=1;i<=16;i++){
		ele_17+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_17=ele_17
	var ele_18=''
	for(i=1;i<=20;i++){
		ele_18+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_18=ele_18
	var ele_19=''
	for(i=1;i<=20;i++){
		ele_19+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_19=ele_19
	var ele_20=''
	for(i=1;i<=20;i++){
		ele_20+='0'
	}
	anesambu_vhiscli_to_tbc_anes_ambu.ele1_20=ele_20
	if(anesambu_vhiscli_to_tbc_anes_ambu.anesgrupo==null||anesambu_vhiscli_to_tbc_anes_ambu.anesgrupo==""){
		anesambu_vhiscli_to_tbc_anes_ambu.anesgrupo=" "
	}
	if(anesambu_vhiscli_to_tbc_anes_ambu.anesfactrh==null||anesambu_vhiscli_to_tbc_anes_ambu.anesfactrh==""){
		anesambu_vhiscli_to_tbc_anes_ambu.anesfactrh=" "
	}
	if(anesambu_vhiscli_to_tbc_anes_ambu.anescondicion==null||anesambu_vhiscli_to_tbc_anes_ambu.anescondicion==""){
		anesambu_vhiscli_to_tbc_anes_ambu.anescondicion=" "
	}
	var hora_aux = globals.anesambu_horainicio
	globals.anesambu_horainicio = globals.anesambu_horainicio.replace(":","")
	anesambu_vhiscli_to_tbc_anes_ambu.aneshoraini = globals.anesambu_horainicio
	globals.anesambu_horainicio=hora_aux
	anesambu_vhiscli_to_tbc_anes_ambu.aneshc=globals.vHiscli
	anesambu_vhiscli_to_tbc_anes_ambu.anestippac=globals.anesambu_tipac
	anesambu_vhiscli_to_tbc_anes_ambu.anesfecingreso=globals.anesambu_fechaingreso
	anesambu_vhiscli_to_tbc_anes_ambu.aneshoraingreso=globals.anesambu_horaingreso
	anesambu_vhiscli_to_tbc_anes_ambu.aneslegajomed=globals.vLegajoAnestesista
	anesambu_vhiscli_to_tbc_anes_ambu.anestipomed=globals.vLegajoAnestesistaIE
	anesambu_vhiscli_to_tbc_anes_ambu.anespresionmax=fpresionmax
	anesambu_vhiscli_to_tbc_anes_ambu.anespresionmin=fpresionmin
	try{
		databaseManager.saveData(anesambu_vhiscli_to_tbc_anes_ambu)
	}catch(msg){
		application.output(msg.message)
	}
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(anesambu_vhiscli_to_tbc_anes_ambu)
	for ( i = 0; i < array.length; i++) {
			var record = array[i];
			var jstable = databaseManager.getTable(record);
			var tableSQLName = jstable.getSQLName();
			error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
			error2='Error en grabación '+record.exception;
			if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
				var thrown = record.exception.getValue()
				//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
	}
		
	if(error1!=''){
			plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			plugins.dialogs.showErrorDialog("Error en grabacion de Evaluación Anestésica",error1,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de Evaluación Anestésica",error2,"Ok")
	}else{
			elements.btn_grabar.visible=false
	}
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A632CE40-E6FE-4DD9-A24E-F4CA9F57D7B2"}
 */
function onAction_horainicio(event) {
	elements.presiomax.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"10ABC42D-2305-4A96-AF25-E0C06FB8973B"}
 */
function onAction_presiomax(event) {
	elements.presiomin.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B61AC6F-16C4-4BE2-8206-B079DA263316"}
 */
function onAction_presiomin(event) {
	elements.tabs.tabIndex=1
	forms.anesambu_frm_grupo1_chk.elements.cardio_1.requestFocus()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"BAFE6775-8FBC-4029-85D0-FDCE7771826D"}
 */
function onHide_frm_anestesia_preoperatoria(event) {
	return globals.vClose
}

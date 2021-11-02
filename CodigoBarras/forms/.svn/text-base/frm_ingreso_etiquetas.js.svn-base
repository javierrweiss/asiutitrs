/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"94FE4EF3-F905-42D9-8A7A-5EAF74CEB2EF"}
 */
function onAction(event) {
	forms.barras1.sub_buildreport()
	forms.barras1.controller.setPageFormat(210,315,10,10,7,0,1,0)
	//forms.barras1.controller.showPrintPreview()
	forms.barras1.controller.print(false, true)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E3F62DE2-CD86-4CF8-8183-DCE217409C71"}
 */
function onAction_limpia(event) {
	for (var i=1;i<=16;i++){
		
		globals['gbl_etiqueta'+i]=''
		globals['gbl_lbl'+i]=''
	}
	
	application.updateUI()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EA087B68-932C-4F7F-B156-1AAAE49BFCF7"}
 * @AllowToRunInFind
 */
function onAction1_etiqueta1(event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta1
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta1=''
		globals.gbl_lbl1=''
		elements.gbl_etiqueta1.requestFocus()
	}else{
		globals.gbl_etiqueta1=globals.vCodigoMed
		globals.gbl_lbl1=globals.vDescriArticulo
		elements.gbl_etiqueta2.requestFocus()
	}
}

/**
 * @properties={typeid:24,uuid:"5C64511B-39C2-41B5-B61A-2991187467F7"}
 * @AllowToRunInFind
 */
function BuscoMedicamentos() {
	var largo = globals.vArticuloAlfa.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero; i++){
		if (globals.vArticuloAlfa.charCodeAt(i)< 48 || globals.vArticuloAlfa.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	var fs = databaseManager.getFoundSet('maestros','tbc_articulos')
		if(fs.find()){
			fs['art_codigo']=utils.stringToNumber(globals.vArticuloAlfa.substr(0,largo))
			fs.search()
			if(fs.getSize()>0){
				fs.setSelectedIndex(1)
				globals.vCodigoMed=fs['art_codigo']
				globals.vDescriArticulo='<html><body>'+fs['art_descrip']+'<br>'+fs['art_presenta']+'</body></html>'
				globals.vExisteCodigo=true
			}else{
				globals.vDescriArticulo='Código de Medicamento/Descartable Inexistente'
				globals.vArticuloAlfa=''
				globals.vCodigoMed=0
				globals.vExisteCodigo=false
			}
		}
    }else{
    	globals.vArticuloAlfa = globals.vArticuloAlfa.toLocaleUpperCase()
		globals.vCodigoMed=0
 	    var win = application.createWindow("f",JSWindow.MODAL_DIALOG)
 	    win.title = "Búsqueda de Código de Medicamentos/Descartables";
 	    win.setSize(600,500)
 	    win.show(forms.frm_busqueda_tbc_articulos)
		if(globals.vCodigoMed>0){
			globals.vExisteCodigo=true
		}else{
			globals.vCodigoMed=0
			globals.vDescriArticulo='Código de Medicamento/Descartable Inexistente'
			globals.vExisteCodigo=false
		}
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"015D0278-48D8-4353-971E-185EB6259A25"}
 */
function onAction1_etiqueta2(event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta2
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta2=''
		globals.gbl_lbl2=''
		elements.gbl_etiqueta2.requestFocus()
	}else{
		globals.gbl_etiqueta2=globals.vCodigoMed
		globals.gbl_lbl2=globals.vDescriArticulo
		elements.gbl_etiqueta3.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7148469E-1B49-434F-AC0B-DBED7663882C"}
 */
function onAction1_etiqueta3(event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta3
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta3=''
		globals.gbl_lbl3=''
		elements.gbl_etiqueta3.requestFocus()
	}else{
		globals.gbl_etiqueta3=globals.vCodigoMed
		globals.gbl_lbl3=globals.vDescriArticulo
		elements.gbl_etiqueta4.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D1737F01-0771-47AA-BC53-60848BC73297"}
 */
function onAction1_etiqueta4(event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta4
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta4=''
		globals.gbl_lbl4=''
		elements.gbl_etiqueta4.requestFocus()
	}else{
		globals.gbl_etiqueta4=globals.vCodigoMed
		globals.gbl_lbl4=globals.vDescriArticulo
		elements.gbl_etiqueta5.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1776750C-727B-473C-A911-207A048DA1B1"}
 */
function onAction1_etiqueta5(event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta5
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta5=''
		globals.gbl_lbl5=''
		elements.gbl_etiqueta5.requestFocus()
	}else{
		globals.gbl_etiqueta5=globals.vCodigoMed
		globals.gbl_lbl5=globals.vDescriArticulo
		elements.gbl_etiqueta6.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3AED5598-DFE9-4FB6-997B-529FE3DEEC77"}
 */
function onAction1_etiqueta6(event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta6
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta6=''
		globals.gbl_lbl6=''
		elements.gbl_etiqueta6.requestFocus()
	}else{
		globals.gbl_etiqueta6=globals.vCodigoMed
		globals.gbl_lbl6=globals.vDescriArticulo
		elements.gbl_etiqueta7.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AAFABAB0-C986-429D-A7B8-9DC659521E67"}
 */
function onAction1_etiqueta7(event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta7
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta7=''
		globals.gbl_lbl7=''
		elements.gbl_etiqueta7.requestFocus()
	}else{
		globals.gbl_etiqueta7=globals.vCodigoMed
		globals.gbl_lbl7=globals.vDescriArticulo
		elements.gbl_etiqueta8.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0F4BD703-F87F-41D7-A232-E00E5B2E312E"}
 */
function onAction1_etiqueta8(event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta8
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta8=''
		globals.gbl_lbl8=''
		elements.gbl_etiqueta8.requestFocus()
	}else{
		globals.gbl_etiqueta8=globals.vCodigoMed
		globals.gbl_lbl8=globals.vDescriArticulo
		elements.gbl_etiqueta9.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F12DB512-99A9-4DDE-97B6-4A0A0D254F4F"}
 */
function onAction1_etiqueta9(event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta9
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta9=''
		globals.gbl_lbl9=''
		elements.gbl_etiqueta9.requestFocus()
	}else{
		globals.gbl_etiqueta9=globals.vCodigoMed
		globals.gbl_lbl9=globals.vDescriArticulo
		elements.gbl_etiqueta10.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"60DBA79A-1614-439F-9CA5-EC43795C9534"}
 */
function onAction1_etiqueta10(event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta10
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta10=''
		globals.gbl_lbl10=''
		elements.gbl_etiqueta10.requestFocus()
	}else{
		globals.gbl_etiqueta10=globals.vCodigoMed
		globals.gbl_lbl10=globals.vDescriArticulo
		elements.gbl_etiqueta11.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F78CD5AA-69B9-4E3F-B27C-A7F086E4817D"}
 */
function onAction1_etiqueta11(event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta11
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta11=''
		globals.gbl_lbl11=''
		elements.gbl_etiqueta11.requestFocus()
	}else{
		globals.gbl_etiqueta11=globals.vCodigoMed
		globals.gbl_lbl11=globals.vDescriArticulo
		elements.gbl_etiqueta12.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7D811839-D2C8-4FB3-80BC-14813443AA4D"}
 */
function onAction1_etiqueta12(event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta12
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta12=''
		globals.gbl_lbl12=''
		elements.gbl_etiqueta12.requestFocus()
	}else{
		globals.gbl_etiqueta12=globals.vCodigoMed
		globals.gbl_lbl12=globals.vDescriArticulo
		elements.gbl_etiqueta13.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EB914C9F-6018-4618-A56B-CDB91FBD9B56"}
 */
function onAction1_etiqueta13(event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta13
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta13=''
		globals.gbl_lbl13=''
		elements.gbl_etiqueta13.requestFocus()
	}else{
		globals.gbl_etiqueta13=globals.vCodigoMed
		globals.gbl_lbl13=globals.vDescriArticulo
		elements.gbl_etiqueta14.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"682240E0-4990-4DA3-8988-727967469017"}
 */
function onAction1_etiqueta14(event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta14
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta14=''
		globals.gbl_lbl14=''
		elements.gbl_etiqueta14.requestFocus()
	}else{
		globals.gbl_etiqueta14=globals.vCodigoMed
		globals.gbl_lbl14=globals.vDescriArticulo
		elements.gbl_etiqueta15.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BC8CE824-DB33-4DDF-BCB3-4909FC589768"}
 */
function onAction1_etiqueta15(event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta15
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta15=''
		globals.gbl_lbl15=''
		elements.gbl_etiqueta15.requestFocus()
	}else{
		globals.gbl_etiqueta15=globals.vCodigoMed
		globals.gbl_lbl15=globals.vDescriArticulo
		elements.gbl_etiqueta16.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"319A5EF4-B970-4346-BB9A-10F4A36A9FB6"}
 */
function onAction1_etiqueta16(event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta16
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta16=''
		globals.gbl_lbl16=''
		elements.gbl_etiqueta16.requestFocus()
	}else{
		globals.gbl_etiqueta16=globals.vCodigoMed
		globals.gbl_lbl16=globals.vDescriArticulo
		elements.btn_imprimir.requestFocus()
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F6329D5-98EB-4A73-9BD9-46F27911D1EB"}
 */
function onShow_frm_ingreso_etiquetas(firstShow, event) {
	elements.gbl_etiqueta1.requestFocus()	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"56E2BC2E-501E-4663-8C74-36007C8AEDC6"}
 */
function onAction1_salir(event) {
	globals.vClose=true
	application.exit()
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F86F8CEB-597A-4C6D-8D79-380E59F02B02"}
 */
function onDataChange_etiqueta1(oldValue, newValue, event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta1
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta1=''
		globals.gbl_lbl1=''
		elements.gbl_etiqueta1.requestFocus()
		return false
	}else{
		globals.gbl_etiqueta1=globals.vCodigoMed
		globals.gbl_lbl1=globals.vDescriArticulo
		elements.gbl_etiqueta2.requestFocus()
		return true
	}
	
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"ACF9FBD7-B2F5-41BE-A506-8257691A08B9"}
 */
function onDataChange_etiqueta2(oldValue, newValue, event) {
	globals.vArticuloAlfa=newValue
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta2=''
		globals.gbl_lbl2=''
		elements.gbl_etiqueta2.requestFocus()
		return false
	}else{
		globals.gbl_etiqueta2=globals.vCodigoMed
		globals.gbl_lbl2=globals.vDescriArticulo
		elements.gbl_etiqueta3.requestFocus()
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E3F6B105-0392-4136-BD58-5E9B25871522"}
 */
function onDataChange_etiqueta_generico(oldValue, newValue, event) {
	globals.vArticuloAlfa=newValue
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		return false
	}else{
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"06DF8C85-FB36-42D3-BE88-D5B527FE0F0B"}
 */
function onDataChange_etiqueta3(oldValue, newValue, event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta3
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta3=''
		globals.gbl_lbl3=''
		elements.gbl_etiqueta3.requestFocus()
		return false
	}else{
		globals.gbl_etiqueta3=globals.vCodigoMed
		globals.gbl_lbl3=globals.vDescriArticulo
		elements.gbl_etiqueta4.requestFocus()
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5EA82A60-753F-4DF8-94A9-128E790A9BCC"}
 */
function onDataChange_etiqueta4(oldValue, newValue, event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta4
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta4=''
		globals.gbl_lbl4=''
		elements.gbl_etiqueta4.requestFocus()
		return false
	}else{
		globals.gbl_etiqueta4=globals.vCodigoMed
		globals.gbl_lbl4=globals.vDescriArticulo
		elements.gbl_etiqueta5.requestFocus()
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"CF18E1F2-CE25-4158-80E8-4901C2565FC5"}
 */
function onDataChange_etiqueta5(oldValue, newValue, event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta5
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta5=''
		globals.gbl_lbl5=''
		elements.gbl_etiqueta5.requestFocus()
		return false
	}else{
		globals.gbl_etiqueta5=globals.vCodigoMed
		globals.gbl_lbl5=globals.vDescriArticulo
		elements.gbl_etiqueta6.requestFocus()
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"BCE3E846-F157-4909-991B-C63A5D755DB4"}
 */
function onDataChange_etiqueta6(oldValue, newValue, event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta6
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta6=''
		globals.gbl_lbl6=''
		elements.gbl_etiqueta6.requestFocus()
		return false
	}else{
		globals.gbl_etiqueta6=globals.vCodigoMed
		globals.gbl_lbl6=globals.vDescriArticulo
		elements.gbl_etiqueta7.requestFocus()
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"B35D3E67-96D8-43A0-A8D5-6EBE9AFE927F"}
 */
function onDataChange_etiqueta7(oldValue, newValue, event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta7
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta7=''
		globals.gbl_lbl7=''
		elements.gbl_etiqueta7.requestFocus()
		return false
	}else{
		globals.gbl_etiqueta7=globals.vCodigoMed
		globals.gbl_lbl7=globals.vDescriArticulo
		elements.gbl_etiqueta8.requestFocus()
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"89B66D82-F230-4481-A353-E2085CC411FE"}
 */
function onDataChange_etiqueta8(oldValue, newValue, event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta8
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta8=''
		globals.gbl_lbl8=''
		elements.gbl_etiqueta8.requestFocus()
		return false
	}else{
		globals.gbl_etiqueta8=globals.vCodigoMed
		globals.gbl_lbl8=globals.vDescriArticulo
		elements.gbl_etiqueta9.requestFocus()
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D960EDB9-FE96-407E-A057-B74E7B817587"}
 */
function onDataChange_etiqueta9(oldValue, newValue, event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta9
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta9=''
		globals.gbl_lbl9=''
		elements.gbl_etiqueta9.requestFocus()
		return false
	}else{
		globals.gbl_etiqueta9=globals.vCodigoMed
		globals.gbl_lbl9=globals.vDescriArticulo
		elements.gbl_etiqueta10.requestFocus()
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"2DAB4C8C-B23E-4983-8BFE-73ECD7C45615"}
 */
function onDataChange_etiqueta10(oldValue, newValue, event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta10
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta10=''
		globals.gbl_lbl10=''
		elements.gbl_etiqueta10.requestFocus()
		return false
	}else{
		globals.gbl_etiqueta10=globals.vCodigoMed
		globals.gbl_lbl10=globals.vDescriArticulo
		elements.gbl_etiqueta11.requestFocus()
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"BA9C935C-87A3-4FD5-92CD-155F8D9215F3"}
 */
function onDataChange_etiqueta11(oldValue, newValue, event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta11
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta11=''
		globals.gbl_lbl11=''
		elements.gbl_etiqueta11.requestFocus()
		return false
	}else{
		globals.gbl_etiqueta11=globals.vCodigoMed
		globals.gbl_lbl11=globals.vDescriArticulo
		elements.gbl_etiqueta12.requestFocus()
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"4220389E-0830-4019-B1AD-F856809ED420"}
 */
function onDataChange_etiqueta12(oldValue, newValue, event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta12
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta12=''
		globals.gbl_lbl12=''
		elements.gbl_etiqueta12.requestFocus()
		return false
	}else{
		globals.gbl_etiqueta12=globals.vCodigoMed
		globals.gbl_lbl12=globals.vDescriArticulo
		elements.gbl_etiqueta13.requestFocus()
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"61226CA8-DD6C-4046-B969-2480C1103AFA"}
 */
function onDataChange_etiqueta13(oldValue, newValue, event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta13
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta13=''
		globals.gbl_lbl13=''
		elements.gbl_etiqueta13.requestFocus()
		return false
	}else{
		globals.gbl_etiqueta13=globals.vCodigoMed
		globals.gbl_lbl13=globals.vDescriArticulo
		elements.gbl_etiqueta14.requestFocus()
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"57F6B22B-2147-47BE-8655-4ED32559157C"}
 */
function onDataChange_etiqueta14(oldValue, newValue, event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta14
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta14=''
		globals.gbl_lbl14=''
		elements.gbl_etiqueta14.requestFocus()
		return false
	}else{
		globals.gbl_etiqueta14=globals.vCodigoMed
		globals.gbl_lbl14=globals.vDescriArticulo
		elements.gbl_etiqueta15.requestFocus()
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5DDC69C3-9746-4878-9748-4CBFB127DE2A"}
 */
function onDataChange_etiqueta15(oldValue, newValue, event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta15
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta15=''
		globals.gbl_lbl15=''
		elements.gbl_etiqueta15.requestFocus()
		return false
	}else{
		globals.gbl_etiqueta15=globals.vCodigoMed
		globals.gbl_lbl15=globals.vDescriArticulo
		elements.gbl_etiqueta16.requestFocus()
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E5131868-2C48-4C5D-B951-C09D51494838"}
 */
function onDataChange_etiqueta16(oldValue, newValue, event) {
	globals.vArticuloAlfa=globals.gbl_etiqueta16
	globals.vExisteCodigo=false
	BuscoMedicamentos()
	if(!globals.vExisteCodigo){
		globals.gbl_etiqueta16=''
		globals.gbl_lbl16=''
		elements.gbl_etiqueta16.requestFocus()
		return false
	}else{
		globals.gbl_etiqueta16=globals.vCodigoMed
		globals.gbl_lbl16=globals.vDescriArticulo
		elements.btn_imprimir.requestFocus()
		return true
	}
}

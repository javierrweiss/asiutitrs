/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9A65E486-73E2-45B1-9B5A-97AAC374FE71"}
 * @AllowToRunInFind
 */
function onShow_frm_muestro_protesis_dtl(firstShow, event) {
	var marca = 'MarcaProt_'
	var serie = 'SerieProt_'
	var check = 'CheckProt_'
	var codigo = 'prote_codiprotesis_'
	var descri = 'DescriProt_'
	var observ = 'prote_observ_'
	var fs1 = databaseManager.getFoundSet("maestros", "tbc_mae_prot")
	var fs = databaseManager.getFoundSet("asistencial", "tbc_marca_prot")
	for(var i=1;i<=20;i++){
		elements[marca + i].visible = false
		elements[serie + i].visible = false
		if(foundset[codigo+i]!=0){
			fs1.find()
			fs1['mpcodprotesis']=foundset[codigo+i]
			fs1.search()
			globals['v'+descri+i]=fs1['mpdescripcion']
			elements[codigo+i].visible=true
			elements[descri+i].visible=true
			elements[observ+i].visible=true
			elements[check+i].visible=true
			fs.find()		
			fs['mar_pedido'] = foundset.prote_nroprote
			fs['mar_cod_protesis']=foundset[codigo+i]
			fs['mar_item']=i
			fs.search()
			if (fs.getSize() > 0){
				fs.setSelectedIndex(1)
				if(foundset[codigo+i]!=0){
					globals['v'+ check + i]=1
					globals['v'+ marca + i]=fs['mar_marca']
					globals['v'+ serie + i]=fs['mar_serie']
					elements[marca + i].visible = true
					elements[serie + i].visible = true
				}
			}
		}else{
			elements[codigo+i].visible=false
			elements[descri+i].visible=false
			elements[observ+i].visible=false
			elements[check+i].visible=false
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
 * @properties={typeid:24,uuid:"09798CF5-1525-4936-B658-FF271025F035"}
 */
function onDataChange_generico_checks(oldValue, newValue, event) {
	var marca = 'MarcaProt_'
	var serie = 'SerieProt_'
	var codigo = 'prote_codiprotesis_'
	var item = event.getElementName()
	var largo = item.length
	var indice = item.substr(largo-1,1)
	if(newValue==1){
		if(foundset[codigo+indice]!=0){
			elements[marca + indice].visible = true
			elements[serie + indice].visible = true
			return true
		}else{
			elements[marca + indice].visible = false
			elements[serie + indice].visible = false
			globals['v'+marca+indice]=''
			globals['v'+serie+indice]=''
			newValue=0
			return false
		}
	}else{
		elements[marca + indice].visible = false
		elements[serie + indice].visible = false
		globals['v'+marca+indice]=''
		globals['v'+serie+indice]=''
		return true
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A251D24B-DE75-4AAA-86BA-F0DF3FC5BBF9"}
 */
function onAction_btn_cancela(event) {
	//application.closeAllWindows()
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9281CEF0-51A7-4147-9705-DF4EFC207F33"}
 * @AllowToRunInFind
 */
function onAction_btn_confirma(event) {
	var marca = 'MarcaProt_'
	var serie = 'SerieProt_'
	var check = 'vCheckProt_'
	var codigo = 'prote_codiprotesis_'
	var estado = 'prote_estado_'
	var fecestado = 'prote_fecestado_'
	var descri = 'DescriProt_'
	var datosCompletos=true
	for(var i=1;i<=20;i++){
		if(foundset[codigo+i]!=0&&globals[check+i]==1&&(globals['v'+marca+i]==''||globals['v'+serie+i]=='')){
			if(globals['v'+marca+i]==''){
				plugins.dialogs.showInfoDialog("Datos Incompletos","Falta ingresar Marca en línea: "+i)
			}
			if(globals['v'+serie+i]==''){
				plugins.dialogs.showInfoDialog("Datos Incompletos","Falta ingresar Serie en línea: "+i)
			}
			datosCompletos=false
		}
	}
	//var fs = databaseManager.getFoundSet("asistencial", "tbc_marca_prot")
	if(datosCompletos){
		for(var j=1;j<=20&&foundset[codigo+j]!=0;j++){
			if(foundset[codigo+j]!=0){
				globals.vCodProt=foundset[codigo+j]
				globals.vItemProt=j
				if(vs_to_tbc_marca_prot.getSize()>0){
					if(globals['v'+marca+j]!=''&&globals['v'+serie+j]!=''){
						vs_to_tbc_marca_prot.mar_marca=globals['v'+marca+j]
						vs_to_tbc_marca_prot.mar_serie=globals['v'+serie+j]
					}else{
						vs_to_tbc_marca_prot.deleteRecord()
					}
				}else{
					vs_to_tbc_marca_prot.newRecord()
					globals.InicializarDatosDeRelacion(vs_to_tbc_marca_prot,'asistencial','tbc_marca_prot')
					vs_to_tbc_marca_prot.mar_pedido=globals.vNroPedidoProtesis
					vs_to_tbc_marca_prot.mar_codiprotesis=foundset[codigo+j]
					vs_to_tbc_marca_prot.mar_item=j
					vs_to_tbc_marca_prot.mar_histclin=globals.vHiscli
					vs_to_tbc_marca_prot.mar_histclin_1=globals.vHiscli
					vs_to_tbc_marca_prot.mar_protocolo=globals.vNroProtocolo
					vs_to_tbc_marca_prot.mar_marca=globals['v'+marca+j]
					vs_to_tbc_marca_prot.mar_serie=globals['v'+serie+j]
					vs_to_tbc_marca_prot.mar_tiphistclin=0
					vs_to_tbc_marca_prot.mar_tiphistclin_1=0
					vs_to_tbc_marca_prot.mar_servicio=0
					vs_to_tbc_marca_prot.mar_fecingreso=vhiscli_to_tbc_cirugint.cirifechainicio
					vs_to_tbc_marca_prot.mar_horaingreso=vhiscli_to_tbc_cirugint.cirihorainicio
					vs_to_tbc_marca_prot.mar_descripprotesis=globals['v'+descri+j]
				}
				databaseManager.saveData(vs_to_tbc_marca_prot.getRecord(1))
				
			}
			
		}
		if(vnropedidoprotesis_to_tbc_protesis.getSize()>0){
			vnropedidoprotesis_to_tbc_protesis.prote_fecimplante=vhiscli_to_tbc_cirugint.cirifechainicio
			vnropedidoprotesis_to_tbc_protesis.prote_horaimplante=vhiscli_to_tbc_cirugint.cirihorainicio
			vnropedidoprotesis_to_tbc_protesis.prote_estprote=4
			vnropedidoprotesis_to_tbc_protesis.prote_protocolo=globals.vNroProtocolo
			vnropedidoprotesis_to_tbc_protesis.prote_fecmodiest=globals.vFechaActual
			vnropedidoprotesis_to_tbc_protesis.prote_legmod=globals.vLega
			vnropedidoprotesis_to_tbc_protesis.prote_tiplegmod=globals.vTipoOperador
			for(var x=1;x<=20&&foundset[codigo+x]!=0;x++){
				if(globals[check+x]==1){
					vnropedidoprotesis_to_tbc_protesis[estado+x]=4
					vnropedidoprotesis_to_tbc_protesis[fecestado+x]=globals.vFechaActual
				}else{
					vnropedidoprotesis_to_tbc_protesis[estado+x]=0
					vnropedidoprotesis_to_tbc_protesis[fecestado+x]=0
				}
			}
			databaseManager.saveData(vnropedidoprotesis_to_tbc_protesis.getRecord(1))
		}
		//application.closeAllWindows()
		var name=application.getActiveWindow()
		name.getName()
		var $win=application.getWindow(name.getName())
		if($win!=null){
			$win.hide()
			$win.destroy()
		}
	}else{
		//application.closeAllWindows()
		var name1=application.getActiveWindow()
		name1.getName()
		var $win1=application.getWindow(name1.getName())
		if($win1!=null){
			$win1.hide()
			$win1.destroy()
		}
	}
}

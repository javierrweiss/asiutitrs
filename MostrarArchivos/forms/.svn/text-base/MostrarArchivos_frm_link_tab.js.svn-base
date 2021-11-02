/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9C5AE81A-9DBD-417A-9936-668D8534A702"}
 */
var fcarpeta = '';


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2238F7C9-7CC4-4D11-9687-E6E19D0FF2BE"}
 */
function onShow_frm_link_tab(firstShow, event) {
	
	var cant = vlega_to_permi_legajo_carpetas.getSize()
	var $ds2 = databaseManager.createEmptyDataSet()
	$ds2.addColumn('flink',1,JSColumn.TEXT)
	$ds2.addColumn('flink2',2,JSColumn.TEXT)
	$ds2.addColumn('find_carpeta',3,JSColumn.TEXT)
	var files_pdf = null
	var files_txt = null
	var files_doc = null
	var files_xls = null
	var files_xlsx = null
	var files_docx = null
	var files_jpg = null
	var files_gif = null
	var files_png = null
	var files = null
	var icono =''
	var url=''
	var largo_url=application.getServerURL().length
	if (largo_url<24){
		url=application.getServerURL()
	}else{
		url=application.getServerURL().substr(0,23)
	}
	
	if(cant > 0){
		for(var i = 1;i<=cant;i++){
			vlega_to_permi_legajo_carpetas.setSelectedIndex(i)
			files = plugins.file.getRemoteFolderContents(vlega_to_permi_legajo_carpetas.carpeta);
			if (files.length>0){
				icono=" "
				for(var j=0;j<files.length;j++){
					$ds2.addRow(['<html><body><A HREF="'+url+'/uploads'+utils.stringTrim(vlega_to_permi_legajo_carpetas.carpeta)+'/'+utils.stringTrim(files[j].getName())+'" target="_blank">'+ files[j].getName()+' </A></body></html>', url+'/uploads'+vlega_to_permi_legajo_carpetas.carpeta+'/'+files[j].getName(),vlega_to_permi_legajo_carpetas.carpeta])
				}
			}
			/*
			files_pdf = plugins.file.getRemoteFolderContents(foundset.carpeta, '.PDF');
			if (files_pdf.length>0){
				icono="pdf"
				for(var j=0;j<files_pdf.length;j++){
					
					$ds2.addRow(['<html><body><A HREF="http://10.200.0.48:9080/files/librocirugia/LB-CIRUINTER-20160601-20160602.pdf" target="_blank">'+ files_pdf[j].getName()+' </A></body></html>', 'http://localhost:8080'+vlega_to_permi_legajo_carpetas.carpeta+'/'+files_pdf[j].getName(),icono])
					
				}
			}
			
			files_txt = plugins.file.getRemoteFolderContents(foundset.carpeta, '.TXT');
			if (files_txt.length>0){
				icono="txt"
				for(j=0;j<files_txt.length;j++){
					$ds2.addRow(['<html><body><A HREF="http://10.200.0.48:9080/files/librocirugia/LB-CIRUINTER-20160601-20160602.pdf" target="_blank">'+ files_txt[j].getName()+' </A></body></html>', 'http://localhost:8080'+vlega_to_permi_legajo_carpetas.carpeta+'/'+files_txt[j].getName(),icono])
					
				}
			}
			files_doc = plugins.file.getRemoteFolderContents(foundset.carpeta, '.DOC');
			if (files_doc.length>0){
				icono="doc"
				for(j=0;j<files_doc.length;j++){
					$ds2.addRow(['<html><body><A HREF="http://10.200.0.48:9080/files/librocirugia/LB-CIRUINTER-20160601-20160602.pdf" target="_blank">'+ files_doc[j].getName()+' </A></body></html>', 'http://localhost:8080'+vlega_to_permi_legajo_carpetas.carpeta+'/'+files_doc[j].getName(),icono])
					
				}
			}
			files_xls = plugins.file.getRemoteFolderContents(foundset.carpeta, '.XLS');
			if (files_xls.length>0){
				icono="xls"
				for(j=0;j<files_xls.length;j++){
					$ds2.addRow(['<html><body><A HREF="http://10.200.0.48:9080/files/librocirugia/LB-CIRUINTER-20160601-20160602.pdf" target="_blank">'+ files_xls[j].getName()+' </A></body></html>', 'http://localhost:8080'+vlega_to_permi_legajo_carpetas.carpeta+'/'+files_xls[j].getName(),icono])
					
				}
			}
			files_xlsx = plugins.file.getRemoteFolderContents(foundset.carpeta, '.XLSX');
			if (files_xlsx.length>0){
				icono="xls"
				for(j=0;j<files_xlsx.length;j++){
					$ds2.addRow(['<html><body><A HREF="http://10.200.0.48:9080/files/librocirugia/LB-CIRUINTER-20160601-20160602.pdf" target="_blank">'+ files_xlsx[j].getName()+' </A></body></html>', 'http://localhost:8080'+vlega_to_permi_legajo_carpetas.carpeta+'/'+files_xlsx[j].getName(),icono])
					
				}
			}
			files_docx = plugins.file.getRemoteFolderContents(foundset.carpeta, '.DOCX');
			if (files_docx.length>0){
				icono="doc"
				for(j=0;j<files_docx.length;j++){
					$ds2.addRow(['<html><body><A HREF="http://10.200.0.48:9080/files/librocirugia/LB-CIRUINTER-20160601-20160602.pdf" target="_blank">'+ files_docx[j].getName()+' </A></body></html>', 'http://localhost:8080'+vlega_to_permi_legajo_carpetas.carpeta+'/'+files_docx[j].getName(),icono])
					
				}
			}
			files_jpg = plugins.file.getRemoteFolderContents(foundset.carpeta, '.JPG');
			if (files_jpg.length>0){
				icono="jpg"
				for(j=0;j<files_jpg.length;j++){
					$ds2.addRow(['<html><body><A HREF="http://10.200.0.48:9080/files/librocirugia/LB-CIRUINTER-20160601-20160602.pdf" target="_blank">'+ files_jpg[j].getName()+' </A></body></html>', 'http://localhost:8080'+vlega_to_permi_legajo_carpetas.carpeta+'/'+files_jpg[j].getName(),icono])
					
				}
			}
			files_gif = plugins.file.getRemoteFolderContents(foundset.carpeta, '.GIF');
			if (files_gif.length>0){
				icono="gif"
				for(j=0;j<files_gif.length;j++){
					$ds2.addRow(['<html><body><A HREF="http://10.200.0.48:9080/files/librocirugia/LB-CIRUINTER-20160601-20160602.pdf" target="_blank">'+ files_gif[j].getName()+' </A></body></html>', 'http://localhost:8080'+vlega_to_permi_legajo_carpetas.carpeta+'/'+files_gif[j].getName(),icono])
					
				}
			}
			files_png = plugins.file.getRemoteFolderContents(foundset.carpeta, '.PNG');
			if (files_png.length>0){
				icono="png"
				for(j=0;j<files_png.length;j++){
					$ds2.addRow(['<html><body><A HREF="http://10.200.0.48:9080/files/librocirugia/LB-CIRUINTER-20160601-20160602.pdf" target="_blank">'+ files_png[j].getName()+' </A></body></html>', 'http://localhost:8080'+vlega_to_permi_legajo_carpetas.carpeta+'/'+files_png[j].getName(),icono])
					
				}
			}
			*/
		}
		var $tipos = [JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT]

		var $frm = solutionModel.getForm('MostrarArchivos_frm_link_archivos_tbl')
		$frm.dataSource = $ds2.createDataSource('Ds_Link', $tipos)
		forms.MostrarArchivos_frm_link_archivos_tbl.controller.recreateUI()
		fcarpeta=''
	}else{
		globals.DIALOGS.showWarningDialog("¡Atención!","NO tiene carpetas asignadas para acceder","Ok")
		var name=application.getActiveWindow()
		var $win=application.getWindow(name.getName())
		if($win!=null){
		    $win.hide()
		    $win.destroy()
		} 
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E44B6CC6-D831-4B6E-BBAD-8953D958B2FB"}
 * @AllowToRunInFind
 */
function onAction_buscar_archivos(event) {
	if (forms.MostrarArchivos_frm_link_archivos_tbl.controller.find() == false)
	{
		globals.DIALOGS.showWarningDialog('Aviso','No es posible buscar registros','OK')
		return 0
	}
	
	if(globals.MostrarArchivos_busca_archivos != null)
	{
		/** @ */
		forms.MostrarArchivos_frm_link_archivos_tbl.flink = "#%" + globals.MostrarArchivos_busca_archivos + "%"
		forms.MostrarArchivos_frm_link_archivos_tbl.find_carpeta = forms.MostrarArchivos_frm_link_carpetas_tbl.foundset.carpeta
	}
	

	
	if (forms.MostrarArchivos_frm_link_archivos_tbl.controller.search() > 0 )
	{
		forms.MostrarArchivos_frm_link_archivos_tbl.controller.sort('flink asc')
	}
	else
		globals.DIALOGS.showWarningDialog('Aviso','No se encontraron registros','OK')
		
	return 1

}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1FA1C712-5CE3-4F95-87D5-3C1C7EF6A82A"}
 */
function onAction(event) {
	var $ds2 = databaseManager.createEmptyDataSet()
	$ds2.addColumn('flink',1,JSColumn.TEXT)
	$ds2.addColumn('flink2',2,JSColumn.TEXT)
	$ds2.addColumn('icono',3,JSColumn.TEXT)
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
	
	var cant = vlega_to_permi_legajo_carpetas.getSize()
	if(cant > 0){
		//for(var i = 1;i<=cant;i++){
			//lega_to_permi_legajo_carpetas.setSelectedIndex(i)
			files = plugins.file.getRemoteFolderContents(foundset.carpeta);
			if (files.length>0){
				icono=" "
				for(var j=0;j<files.length;j++){
					$ds2.addRow(['<html><body><A HREF="'+url+utils.stringTrim(foundset.carpeta)+'/'+utils.stringTrim(files[j].getName())+'" target="_blank">'+ files[j].getName()+' </A></body></html>', url+foundset.carpeta+'/'+files[j].getName(),icono])
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
		//}
	}
	
	
	
	
	var $tipos = [JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT]

	var $frm = solutionModel.getForm('MostrarArchivos_frm_link_archivos_tbl')
	$frm.dataSource = $ds2.createDataSource('Ds_Link', $tipos)
	forms.MostrarArchivos_frm_link_archivos_tbl.controller.recreateUI()
	//forms.frm_link_tbl.fTitulo=foundset.carpeta
	//forms.frm_link_tbl.fTexto=''
	forms.MostrarArchivos_frm_link_tab.elements.tabless_1.tabIndex=2

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"307F185F-522B-4D4E-A818-873AFA69883F"}
 * @AllowToRunInFind
 */
function onAction1(event) {
	forms.MostrarArchivos_frm_link_tab.elements.tabless_1.tabIndex=1
	forms.MostrarArchivos_frm_link_archivos_tbl.foundset.find()
	forms.MostrarArchivos_frm_link_archivos_tbl.foundset['find_carpeta']=foundset.carpeta
	forms.MostrarArchivos_frm_link_archivos_tbl.foundset.search()
	forms.MostrarArchivos_frm_link_tab.fcarpeta=foundset.carpeta
	forms.MostrarArchivos_frm_link_tab.elements.tabless_1.tabIndex=2
}

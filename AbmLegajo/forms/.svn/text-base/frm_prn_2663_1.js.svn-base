/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"75C775A3-5ED3-444B-A935-2444AE2CF931"}
 */
var fFechaPie = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1C9723E9-8D75-497D-B5A6-97E60AF0C4E8"}
 */
var fDocumento = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4E5DA0FD-3CB1-4C61-8DBD-E5F102F91208"}
 */
var fApeynom = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AF36DDE1-DB26-4ECE-8BF6-E800798706F3"}
 */
var fApeynomLegajo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D2A3C990-8120-4404-A792-3054EB99112D"}
 */
var fLugarFecha = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ACEF14A8-C8CC-4BF6-902E-D829C6B43D5E"}
 */
var fEmpresa = '';


/**
 * @properties={typeid:24,uuid:"04BDA7F7-1F99-4F66-B3B4-F7B161B69480"}
 */
function sub_buildReport() {
	var mes=new Array()
	mes=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre']
	var hoy=application.getServerTimeStamp()
	var atencion=''
	if (globals.per_6=='F'){
		atencion='Sra. '
	}else{
		atencion='Sr. '
	}
	fEmpresa=per_19_to_tbc_empresas.emp1
	fLugarFecha="C.A.B.A, "+hoy.getDate()+" de "+mes[hoy.getMonth()]+" de "+hoy.getFullYear()
	fApeynomLegajo=atencion+globals.per_2_2+' '+globals.per_1_str
	fApeynom=globals.per_2_2
	fDocumento=application.getValueListDisplayValue('vl_tipo_documento',globals.per_7)+' '+globals.per_8
	fFechaPie=hoy.getDate()+'/'+(hoy.getMonth()+1)+'/'+hoy.getFullYear()
	globals.vCampoRTF = textonorma_to_consentimientos.rtf_html
}

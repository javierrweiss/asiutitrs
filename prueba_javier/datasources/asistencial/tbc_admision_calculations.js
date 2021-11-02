/**
 * @properties={type:12,typeid:36,uuid:"BAC099AA-EBAF-4E75-809D-80837B089D28"}
 */
function fecha_alta()
{
	var $fechaToStr = adm_fecaltaefec.toString();
	var ano = $fechaToStr.substring(0,4);
    var mes = $fechaToStr.substring(4,6);
    var dia = $fechaToStr.substring(6,8);
	return dia+'/'+mes+'/'+ano;
	
}

/**
 * @properties={type:12,typeid:36,uuid:"2A229495-3EBA-4E29-9EE6-EA708E559C70"}
 */
function parsear_histclin()
{
	 var $intToStr = adm_histclin.toString().split('');
	 $intToStr.splice(-1,0,'/');
	 var $newStr = $intToStr.join().replace(/,/g, '');
	 return $newStr;	

}

/**
 * @properties={type:12,typeid:36,uuid:"9CD12AFA-959D-490A-8A55-FACD53CC3ED7"}
 */
function fecha_ingreso()
{
	var $fecha = adm_fecing.toString();
	
	return $fecha.substr(6,2)+'/'+$fecha.substr(4,2)+'/'+$fecha.substr(0,4);
}

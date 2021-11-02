/**
 * @properties={type:12,typeid:36,uuid:"EA70A44B-CAA7-4539-9637-61803030B62A"}
 */
function fecha_edit()
{
	var fecha_ed = fecha.getDate()+'/'+(fecha.getMonth()+1)+'/'+fecha.getFullYear()
	return fecha_ed;
}

/**
 * @properties={type:12,typeid:36,uuid:"7A83D826-0568-4FD5-9092-358E2F36F638"}
 */
function tipo1()
{
	var tipo_ed = tipo.toString();
	switch (tipo){
		case '01viacen  ':tipo_ed='Vía Central';break;
		case '02viaper  ':tipo_ed='Vía Periférica';break;
		case '03sonves  ':tipo_ed='Sonda Vesical';break;
		case '04pic     ':tipo_ed='PIC';break;
		case '05tam     ':tipo_ed='TAM';break;
		case '06k108    ':tipo_ed='K-108';break;
		case '07sng     ':tipo_ed='SNG';break;
		case '08traqueo ':tipo_ed='Traquoestomía';break;
		case '1drenajep ':tipo_ed='Drenaje Pleural';break;
		case '2balon    ':tipo_ed='Balón de Contrapulsación';break;
		case '3swan     ':tipo_ed='SWAN GANZ';break;
		default:tipo_ed='';break;
	}
	return tipo_ed;
}

/**
 * @properties={type:12,typeid:36,uuid:"92A1B6B0-9F37-40DD-90D6-53B2EB6D363F"}
 */
function hora_edit()
{
	var hora_ed = hora.toString();
	if(hora<1000){
		hora_ed = hora_ed.substr(0,1)+':'+hora_ed.substr(1,2)
	}else{
		hora_ed = hora_ed.substr(0,2)+':'+hora_ed.substr(2,2)	
	}
	return hora_ed;
}

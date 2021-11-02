/**
 * @properties={type:12,typeid:36,uuid:"E5F4F0D8-C1D6-4D0C-AA49-9E6C9D6ADA88"}
 */
function tipo_docu_protesis(){
  	var tip_d = ''
    switch (adm_tipdocu){
		case 1:	tip_d = 'C.I.';break;
		case 2:	tip_d = 'L.E.';break;
		case 3:	tip_d = 'L.C.';break;
		case 4:	tip_d = 'D.N.I.';break;
		case 5:	tip_d = 'PAS.';break;
    }
	return tip_d;
}

/**
 * @properties={type:12,typeid:36,uuid:"C4784A6C-F2E5-42D6-91A3-10E1FFF0FF00"}
 */
function fechaepic2_protesis()
{
	var fechaepic_ed = adm_fecepic.toString();
	if (fechaepic_ed=='0'){
		fechaepic_ed=''
	}else{
	fechaepic_ed = fechaepic_ed.substr(6,2)+'/'+fechaepic_ed.substr(4,2)+'/'+fechaepic_ed.substr(0,4);
	}
	return fechaepic_ed;
}

/**
 * @properties={type:12,typeid:36,uuid:"737CBD81-FEF2-4648-87B5-F5763B0B3F5A"}
 */
function hiscli2_protesis()
{
	var hiscli1 = adm_histclin.toString();
	switch (hiscli1.length){
		case 2:	hiscli1 = hiscli1.substr(0,1)+'/'+hiscli1.substr(1,1);break;
		case 3:	hiscli1 = hiscli1.substr(0,2)+'/'+hiscli1.substr(2,1);break;
		case 4:	hiscli1 = hiscli1.substr(0,3)+'/'+hiscli1.substr(3,1);break;
		case 5:	hiscli1 = hiscli1.substr(0,4)+'/'+hiscli1.substr(4,1);break;
		case 6:	hiscli1 = hiscli1.substr(0,5)+'/'+hiscli1.substr(5,1);break;
		case 7:	hiscli1 = hiscli1.substr(0,6)+'/'+hiscli1.substr(6,1);break;
		case 8:	hiscli1 = hiscli1.substr(0,7)+'/'+hiscli1.substr(7,1);break;
	}	
	return hiscli1;
}

/**
 * @properties={type:12,typeid:36,uuid:"CA7FA437-70D4-4285-AB37-7C24D58344D6"}
 */
function fechaing2_protesis()
{
	var fecing = adm_fecing.toString();
	fecing = fecing.substr(6,2)+'/'+fecing.substr(4,2)+'/'+fecing.substr(0,4);
	return fecing;
}

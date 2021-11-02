/**
 * @properties={type:12,typeid:36,uuid:"7D05D45C-94D2-41D4-8BB8-4D4BEB20913A"}
 */
function fechaepac_reimpresor()
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
 * @properties={type:12,typeid:36,uuid:"93C4FDB1-F551-494E-B9A9-6D11B0304270"}
 */
function fecing_reimpresor()
{
	var fecing = adm_fecing.toString();
	fecing = fecing.substr(6,2)+'/'+fecing.substr(4,2)+'/'+fecing.substr(0,4);
	return fecing;
}

/**
 * @properties={type:12,typeid:36,uuid:"FFD93FEF-FDA8-41FA-84CF-337F9B6677BE"}
 */
function hiscli_reimpresor()
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

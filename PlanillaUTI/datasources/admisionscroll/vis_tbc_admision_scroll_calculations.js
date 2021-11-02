/**
 * @properties={type:12,typeid:36,uuid:"95F82586-A7F4-41CA-96BE-3D44FD5871BB"}
 */
function fechaepic()
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
 * @properties={type:12,typeid:36,uuid:"C201120B-5544-40BB-905E-E496BB152FBC"}
 */
function fechaing()
{
	var fecing = adm_fecing.toString();
	fecing = fecing.substr(6,2)+'/'+fecing.substr(4,2)+'/'+fecing.substr(0,4);
	return fecing;
}

/**
 * @properties={type:12,typeid:36,uuid:"D2919BF8-FB10-42D2-999C-30282595BF96"}
 */
function hiscli()
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

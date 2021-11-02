/**
 * @properties={type:12,typeid:36,uuid:"50C65561-B3E1-412A-98A2-D2EF332763E8"}
 */
function docum()
{
	var documento=''
	switch (adm_tipdocu){
		case 1:documento='C.I. '+adm_nrodocu;break;
		case 2:documento='L.E. '+adm_nrodocu;break;
		case 3:documento='L.C. '+adm_nrodocu;break;
		case 4:documento='D.N.I. '+adm_nrodocu;break;
		case 5:documento='PASAP. '+adm_nrodocu;break;
		default:documento=' '+adm_nrodocu;break;
	}
	return documento;
}

/**
 * @properties={type:12,typeid:36,uuid:"BFCDE9FB-410F-4B51-863C-19435E60CEF1"}
 */
function hiscli6()
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

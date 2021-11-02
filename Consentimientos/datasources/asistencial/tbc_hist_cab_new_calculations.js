/**
 * @properties={type:12,typeid:36,uuid:"02251601-E462-4530-B098-98D1D262588E"}
 */
function tipo_documento()
{
	var tip_d = ''
    switch (histcabtipodoc){
		case 1:	tip_d = 'C.I.';break;
		case 2:	tip_d = 'L.E.';break;
		case 3:	tip_d = 'L.C.';break;
		case 4:	tip_d = 'D.N.I.';break;
		case 5:	tip_d = 'PAS.';break;
    }
	return tip_d;
}

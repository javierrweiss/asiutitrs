dataSource:"db:/admisionscroll/tbc_admision_scroll",
extendsID:"-1",
initialSort:"adm_histclin asc",
items:[
{
background:"#c0c0c0",
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"adm_apelnom",
location:"116,6",
size:"298,20",
text:"Apellido y Nombre del Paciente",
typeid:7,
uuid:"2BE77D0A-C878-42CC-BC29-D233427D8D62"
},
{
height:52,
partType:5,
typeid:19,
uuid:"4041C02D-53E6-4F89-8140-49F466AC2AA5"
},
{
background:"#c0c0c0",
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"adm_histclin",
location:"0,5",
size:"116,20",
text:"Nro.Internacion",
typeid:7,
uuid:"541B7B36-3AE9-4545-BBDE-50FF20307A0B"
},
{
dataProviderID:"adm_apelnom",
editable:false,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
location:"116,25",
margin:"0,5,0,0",
name:"adm_apelnom",
onActionMethodID:"4C62CFD7-47F3-4869-BE3E-52C130629B30",
onFocusGainedMethodID:"EBC688E4-0BC6-4490-A3D8-C6FBBCDD830B",
selectOnEnter:true,
size:"298,20",
typeid:4,
uuid:"CCA49D77-759C-4F20-A17E-4D7BF908456F"
},
{
dataProviderID:"hiscli",
editable:false,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:4,
location:"0,25",
margin:"0,0,0,20",
name:"adm_histclin",
onActionMethodID:"4C62CFD7-47F3-4869-BE3E-52C130629B30",
onFocusGainedMethodID:"EBC688E4-0BC6-4490-A3D8-C6FBBCDD830B",
selectOnEnter:true,
size:"116,20",
typeid:4,
uuid:"DB414FB8-021B-41D5-AA83-0AE9A629CB50"
}
],
name:"smsciru_frm_scr_tbc_admision_N",
onHideMethodID:"CCC64623-091A-44B7-9383-EF48B33BBC3B",
onLoadMethodID:"-1",
onRecordSelectionMethodID:"-1",
onShowMethodID:"-1",
scrollbars:32,
showInMenu:false,
size:"419,52",
typeid:3,
uuid:"F4E6C0DB-778E-444E-ADD7-F96D3137D764",
view:3
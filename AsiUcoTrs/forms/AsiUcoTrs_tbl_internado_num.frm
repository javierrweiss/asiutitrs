dataSource:"db:/admisionscroll/tbc_admision_scroll",
extendsID:"-1",
initialSort:"adm_histclin asc",
items:[
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
uuid:"0A51F0FE-5242-47BB-B047-5F78D8FB069B"
},
{
height:52,
partType:5,
typeid:19,
uuid:"1629B3AB-5E9C-46F6-B61E-38D200DF67D8"
},
{
borderType:"LineBorder,1,#c0c0c0",
dataProviderID:"hiscli2_asiucotrs",
fontType:"Microsoft Sans Serif,0,12",
horizontalAlignment:0,
location:"0,25",
name:"adm_histclin",
onActionMethodID:"76AD44EC-5958-4D87-9C47-7DFB835C155D",
onDoubleClickMethodID:"33E7E0F2-F809-4239-9BC1-F2895685EC6F",
onRenderMethodID:"-1",
showClick:false,
showFocus:false,
size:"116,20",
typeid:7,
uuid:"22BF8C8F-4C5E-4E9F-BB94-BABF9AE2B225"
},
{
borderType:"LineBorder,1,#c0c0c0",
dataProviderID:"adm_apelnom",
fontType:"Microsoft Sans Serif,0,12",
horizontalAlignment:2,
location:"116,25",
margin:"0,5,0,0",
name:"adm_apelnom",
onActionMethodID:"76AD44EC-5958-4D87-9C47-7DFB835C155D",
onDoubleClickMethodID:"33E7E0F2-F809-4239-9BC1-F2895685EC6F",
onRenderMethodID:"-1",
showClick:false,
showFocus:false,
size:"300,20",
typeid:7,
uuid:"2708A300-A400-4D4B-AF13-0C8DCE3B77A6"
},
{
background:"#c0c0c0",
labelFor:"btn_seleccionar",
location:"416,7",
size:"22,20",
typeid:7,
uuid:"30BF3D29-76E2-480B-9D36-0DC045FBA482"
},
{
background:"#c0c0c0",
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"adm_apelnom",
location:"116,6",
size:"300,20",
text:"Apellido y Nombre del Paciente",
typeid:7,
uuid:"64ED3427-4143-499D-9B26-5A569DA19877"
},
{
horizontalAlignment:0,
imageMediaID:"9F8CE6FE-D887-49F2-932E-C2C49EC742A2",
location:"416,27",
name:"btn_seleccionar",
onActionMethodID:"33E7E0F2-F809-4239-9BC1-F2895685EC6F",
size:"22,20",
tabSeq:1,
text:"",
typeid:7,
uuid:"DF8072CA-8F70-427B-88D1-03F788606857"
}
],
name:"AsiUcoTrs_tbl_internado_num",
onLoadMethodID:"-1",
onRecordSelectionMethodID:"-1",
onShowMethodID:"-1",
scrollbars:32,
showInMenu:false,
size:"438,52",
typeid:3,
uuid:"7B334E89-DC56-4596-B896-C92E8FEBD715",
view:3
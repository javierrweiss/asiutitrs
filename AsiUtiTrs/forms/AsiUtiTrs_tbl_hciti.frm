dataSource:"db:/asistencial/tbc_hciti",
extendsID:"-1",
items:[
{
background:"#c0c0c0",
labelFor:"btn_seleccionar",
location:"202,0",
size:"22,20",
typeid:7,
uuid:"032BF778-ABA2-44B6-A491-8EDA68873F81"
},
{
background:"#c0c0c0",
displaysTags:true,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"texto",
location:"0,0",
size:"202,20",
text:"SELECCIONE UN ITEM",
toolTipText:"Número de Internación de los internados actuales en UTI y UCO.",
typeid:7,
uuid:"0E3D12D9-0A2A-4360-B423-B1C321679B3C"
},
{
horizontalAlignment:0,
imageMediaID:"9F8CE6FE-D887-49F2-932E-C2C49EC742A2",
location:"202,21",
name:"btn_seleccionar",
onActionMethodID:"2D25CB81-8355-44AD-89B5-69229CE5DAE4",
size:"22,20",
tabSeq:1,
typeid:7,
uuid:"2E2D8E02-280A-40A6-AA1F-B155612E20C9"
},
{
borderType:"LineBorder,1,#c0c0c0",
dataProviderID:"texto",
fontType:"Microsoft Sans Serif,0,12",
horizontalAlignment:0,
location:"0,21",
name:"texto",
onActionMethodID:"1474ECB5-A440-4DF9-AC5D-43A4B2135C51",
onDoubleClickMethodID:"2D25CB81-8355-44AD-89B5-69229CE5DAE4",
onRenderMethodID:"-1",
showClick:false,
showFocus:false,
size:"202,20",
typeid:7,
uuid:"37348042-4D0A-477D-94AA-07FF7D3AC3A2"
},
{
height:42,
partType:5,
typeid:19,
uuid:"4FB2C1D4-8CCC-4AB3-9503-8DD9C9CB4ECE"
},
{
dataProviderID:"ult_clin_flag",
location:"229,22",
size:"46,20",
typeid:4,
uuid:"5EC21CBD-22E9-4BFE-A0A8-5B64A919B3F3",
visible:false
}
],
name:"AsiUtiTrs_tbl_hciti",
onHideMethodID:"EA0E4B3A-9AD6-44B8-AC5B-1E108AD45F6D",
onLoadMethodID:"-1",
onRecordSelectionMethodID:"-1",
onShowMethodID:"D520C90D-45D2-4692-B443-A82CD170226F",
scrollbars:32,
showInMenu:false,
size:"224,42",
typeid:3,
uuid:"C91691A6-FC23-4EB5-9B1E-EA6B8867D93E",
view:3
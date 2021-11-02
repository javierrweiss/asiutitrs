extendsID:"-1",
items:[
{
borderType:"LineBorder,1,#000000",
dataProviderID:"vhiscli_to_tbc_admision.hiscli",
formIndex:6,
horizontalAlignment:4,
location:"119,87",
margin:"0,0,0,5",
size:"87,20",
transparent:true,
typeid:7,
uuid:"1379BF66-EDC1-4D76-B88F-00A8C0E6C058",
verticalAlignment:0
},
{
borderType:"TitledBorder,Datos del Paciente,4,0",
formIndex:2,
lineSize:1,
location:"5,66",
size:"805,53",
transparent:true,
typeid:21,
uuid:"1ADF05A2-5297-47A6-A68C-9B81C0FEB402"
},
{
fontType:"Tahoma,1,14",
formIndex:15,
location:"866,117",
name:"btn_imprimir",
onActionMethodID:"6055C0BC-73CB-45BF-BFE8-F9DA3329A4A6",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"98,27",
text:"Imprimir",
toolTipText:"Para imprimir el resumen actual haga click sobre este botón.",
typeid:7,
uuid:"2DBAF036-F018-4626-B60C-EFE6E55CE408"
},
{
borderType:"EtchedBorder,0,null,null",
dataProviderID:"scopes.globals.tit_tabless_resumen",
fontType:"Tahoma,1,14",
foreground:"#000000",
formIndex:17,
horizontalAlignment:0,
location:"333,24",
size:"477,27",
transparent:true,
typeid:7,
uuid:"32FCB83C-9D9E-4A4F-B6E1-1A614B656751"
},
{
dataProviderID:"globals.vFecha",
displayType:2,
displaysTags:true,
formIndex:14,
format:"dd-MM-yyyy|dd-MM-yyyy",
location:"202,124",
onActionMethodID:"93F9B6A4-C65C-4A5B-869F-9DD2DE2FD4DF",
onDataChangeMethodID:"-1",
size:"109,20",
toolTipText:"<html><body><H4>Seleccione la fecha que desee visualizar.<BR>\r
Podrá visualizar los datos ingresados al paciente<BR>\r
%%globals.vApeyNom%%<\/H4>\r
<\/body><\/html>",
typeid:4,
uuid:"51ADC4BB-CB27-493D-B269-5863BB3AFFF3",
valuelistID:"0119FC36-B188-454D-BA2A-20708DA4B0F2"
},
{
imageMediaID:"97E0E77B-A2D4-4886-866B-60FA2A9917B2",
location:"5,5",
size:"323,56",
text:"",
typeid:7,
uuid:"56A53AF4-805F-47E5-ADB4-A26C36B0645B"
},
{
fontType:"Tahoma,1,12",
formIndex:13,
horizontalAlignment:4,
location:"10,124",
size:"182,20",
text:"Seleccione Hoja del día",
transparent:true,
typeid:7,
uuid:"635F19D8-36AC-4DC7-B573-F084EE03F824"
},
{
fontType:"Tahoma,1,12",
formIndex:18,
location:"998,117",
name:"btn_imprimirTodo",
onActionMethodID:"580BF76D-AAE7-4DDE-9989-0800B343B116",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"134,27",
text:"ImprimeTodo",
typeid:7,
uuid:"8E60E60B-D324-4448-BF53-A383D07D916F"
},
{
fontType:"Tahoma,1,14",
formIndex:11,
items:[
{
containsFormID:"B2340208-F61A-4ACA-BABB-E22B3C0A56DB",
location:"368,231",
relationName:"vs_to_hojauti_resumen",
text:"Valoración",
typeid:15,
uuid:"0376514D-797E-4043-B8E9-32604C7C7F32"
},
{
containsFormID:"A3AE8D65-0B4A-4F71-B3A6-C99A56505C32",
location:"511,239",
relationName:"tmp_prn_to_tmp_prn",
text:"Cultivos",
typeid:15,
uuid:"1852D46F-FF28-4EC4-B9F4-C1631C4F8883"
},
{
containsFormID:"505C7179-EE32-400B-9F11-6C734B9C2B47",
location:"231,221",
relationName:"vs_to_hojauti_resumen",
text:"Parámetros",
typeid:15,
uuid:"999C87D5-AA21-4A2D-A5AF-AB88886B1379"
},
{
containsFormID:"F2FBDA78-8B6E-4CC0-9951-7E538598640C",
location:"679,251",
relationName:"vhiscli_to_hojauti_observaciones",
text:"Observaciones",
typeid:15,
uuid:"99B2EFF9-6EEC-4C70-AF51-FF2CF4A6D64D"
},
{
containsFormID:"B9F8E077-BC6E-4AF4-A6F9-561F984ADE3F",
location:"595,245",
relationName:"vhiscli_to_hojauti_cateteres",
text:"Cateteres",
typeid:15,
uuid:"C9163480-01A5-43B3-A0D6-397D67F31AAC"
},
{
containsFormID:"C9FF77F5-6450-46B9-A66C-939FD1EA136E",
location:"94,211",
relationName:"vs_to_hojauti_resumen",
text:"Plan de Cuidados",
typeid:15,
uuid:"CB68EA56-76EA-4A5B-BD46-CC897A50390E"
},
{
containsFormID:"06DD29E6-D83D-4609-B6C7-BCE2617F8FB5",
location:"14,211",
text:"Balance",
typeid:15,
uuid:"CC1F5F14-2775-4C4B-A83F-7DFABD25F5EB"
}
],
location:"0,163",
name:"tabs_154",
printable:false,
size:"1169,529",
transparent:true,
typeid:16,
uuid:"93BA9E73-4325-453E-B66C-B5C6CE8F5E3A"
},
{
fontType:"Tahoma,1,12",
formIndex:8,
location:"15,87",
size:"100,20",
text:"Nro. Internacion",
transparent:true,
typeid:7,
uuid:"950544DA-851F-4B35-9B04-5689DA718687"
},
{
borderType:"LineBorder,1,#000000",
dataProviderID:"vhiscli_to_tbc_admision.adm_cama",
formIndex:3,
horizontalAlignment:0,
location:"647,87",
size:"18,20",
transparent:true,
typeid:7,
uuid:"9DFD1E6F-F0ED-4522-A350-CB04F931E174",
verticalAlignment:0
},
{
borderType:"LineBorder,1,#000000",
dataProviderID:"vhiscli_to_tbc_admision.adm_histclinuni",
formIndex:7,
horizontalAlignment:4,
location:"718,87",
margin:"0,0,0,5",
transparent:true,
typeid:7,
uuid:"9F7F0398-A63F-4BF5-8099-DC7098A4DC3B",
verticalAlignment:0
},
{
borderType:"LineBorder,1,#000000",
dataProviderID:"vhiscli_to_tbc_admision.adm_apelnom",
formIndex:9,
horizontalAlignment:2,
location:"211,87",
margin:"0,5,0,0",
size:"292,20",
transparent:true,
typeid:7,
uuid:"AF720E2F-49D8-4052-BDD3-9EF6E804864C",
verticalAlignment:0
},
{
height:697,
partType:5,
typeid:19,
uuid:"D6F914FE-5B7F-4720-85A5-58DE3B884240"
},
{
formIndex:1,
location:"670,87",
size:"41,20",
text:"H.C.U.",
transparent:true,
typeid:7,
uuid:"DA0A0F88-06D2-4DFF-82FC-22F7D4CF3BE8"
},
{
fontType:"Tahoma,1,12",
formIndex:10,
horizontalAlignment:0,
location:"506,87",
size:"43,20",
text:"Habit.",
transparent:true,
typeid:7,
uuid:"E7C03F26-8464-43E1-BB1D-4FCE0CB896DD"
},
{
borderType:"LineBorder,1,#000000",
dataProviderID:"vhiscli_to_tbc_admision.adm_habita",
formIndex:5,
horizontalAlignment:0,
location:"551,87",
size:"45,20",
transparent:true,
typeid:7,
uuid:"F3C7920E-5584-4135-84F4-97D551330E9A",
verticalAlignment:0
},
{
fontType:"Tahoma,1,14",
formIndex:16,
location:"866,15",
onActionMethodID:"B58DFC24-A5FA-4F96-B0C3-B10975165045",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"98,27",
text:"Volver",
toolTipText:"Haga click sobre este botón para ir a la pantalla anterior.\r
",
typeid:7,
uuid:"F81F6850-A485-4073-BDF1-E0E215ACBF6D"
},
{
fontType:"Tahoma,1,12",
formIndex:4,
horizontalAlignment:0,
location:"598,87",
size:"46,20",
text:"Cama",
transparent:true,
typeid:7,
uuid:"F9EF90FC-DDA6-4306-A67A-D82BF93DA4DF"
}
],
name:"tabless_resumen",
navigatorID:"-2",
onLoadMethodID:"-1",
onShowMethodID:"994F3DD9-B893-4157-9AE6-EE723442CDD7",
onUnLoadMethodID:"AAB3CD99-50E1-40CC-8F36-D8FA2A1DD072",
showInMenu:true,
size:"1179,697",
styleName:"planillaUti",
typeid:3,
uuid:"7488C29D-30CE-49E0-A62B-5D2B7C6AF90E",
view:0
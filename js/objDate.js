
function verData()
{
  var data2 = document.getElementById("datas").value;
  alert(data2);
  var data = new Date(data2);
  alert("Tipo: "+ typeof(data) + "\nValor: "+ data.toDateString());

}

const DIAS_SEMANAS = {0:"Domingo", 1:"Segunda", 2:"Terça", 3:"Quarta", 4:"Quinta", 5:"Sexta", 6:"Sabádo"};
var data = new Date();//Cria data e hora com relação a data do Sistema operacional
var data2 = new Date("09/09/1992 04:45:22");//Inciando a data com uma String

alert(data.toDateString());//Retorna a data em formato string, no modelo Internacional
alert(data.toLocaleDateString());//Retorna a data em formato string, no modelo Local BRASLEIRO


// -------Horas Atuais GET------------
//alert(data.getHours());--Retorna as horas com relação as horas do PC
//alert(data.getUTCHours());--Retorna as horas com relação ao horario de GMT
//alert(data.getMinutes());--Retorna os minutos
//alert(data.getSeconds());--Retorna os segundos

//alert(data.getTime());--Retorna o tempo em milisegundos de 1970 até a data de hoje

// -------DATA ATUAL SET------------
//data.setFullYear(2018);--Altera o ano atual

// ---------Data Atual GET-----------
//alert(data.getFullYear());--Retorna o ano atual
//alert(data.getMonth());--Retorna o mês atual
//alert(data.getDate());--Retorna o dia do mês

//alert(data.getDay());--Retorna o dia da semana: Domingo á Sabádo -- 0 á 6
//alert(DIAS_SEMANAS[data.getDay()]);//--Retorna o dia da semana usando dicionario

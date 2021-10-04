function Calcular(numeros) {
  let delimitador=',';
  let list=numeros.split(delimitador);
  let resp =0;
  for (let i = 0; i < list.length; i++) {
    resp=resp+Number(list[i]);
  }
  return resp;
}

export default Calcular;

function Calcular(numeros) {
  let deli='//\n'
  let delimitador=/\W|[,-]+/;
  let list=numeros.split(delimitador);
  let resp=0;
  for (let i = 0; i < list.length; i++) {
    resp=resp+Number(list[i]);
  }
  return resp;
}

export default Calcular;

function sumarCadena(cadena) {
  if (cadena === "") return 0;
  const numeros = cadena.split(/,|-/).map(Number);
  return numeros.reduce((acc, n) => acc + n, 0);
}

export default sumarCadena;
function sumarCadena(cadena) {
  if (cadena === "") return 0;

  let delimitadores = [",", "-"];
  let secuencia = cadena;

  if (cadena.startsWith("//")) {
    const partes = cadena.match(/^\/\/\[(.+?)\]\s([\s\S]*)$/);
    delimitadores = [",", "-", partes[1]];
    secuencia = partes[2];
  }

  const escapados = delimitadores.map((d) =>
    d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(escapados.join("|"));

  const numeros = secuencia.split(regex).map(Number);
  return numeros.reduce((acc, n) => acc + n, 0);
}

export default sumarCadena;
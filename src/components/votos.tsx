import React, { useState } from 'react';

export default function Votos() {
  const [numero, setNumero] = useState<string>();
  const [listaCandidato, setListaCandidato] = useState([
    { nome: 'Ciro Gomes', numero: '12', votos: 0 },
    { nome: 'Jair Bolsonaro', numero: '22', votos: 0 },
    { nome: 'Luiz Inácio Lula', numero: '13', votos: 0 },
    { nome: 'Simone Tebet', numero: '15', votos: 0 }
  ]);

  function voto() {
    const copy = [...listaCandidato];
    const novaLista = copy.map((candidato) => {
      if (candidato.numero === numero) {
        return { ...candidato, votos: candidato.votos + 1 };
      }
      return candidato;
    });
    setListaCandidato(novaLista);
  }

  function quandoInputMudar(e: any) {
    setNumero(e.target.value);
  }

  return (
    <div className="Apps">
      <table>
        <tr>
          <th>Candidato</th>
          <th>Número</th>
          <th>Resultado Parcial</th>
        </tr>
        {listaCandidato.map((candidato) => (
          <tr>
            <td>{candidato.nome}</td>
            <td>{candidato.numero}</td>
            <td>{candidato.votos}</td>
          </tr>
        ))}
      </table>
      <h4>Informe o número do Candidato de sua preferência abaixo.</h4>
      <form>
        <input
          onChange={quandoInputMudar}
          type="text"
          name="votoContabilizado"
          placeholder="Número do Candidato..."
        />
        <div className="butoes">
          <button type="button" onClick={voto}>
            Votar
          </button>
        </div>
      </form>
    </div>
  );
}

export { Votos };

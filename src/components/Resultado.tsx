import React from 'react';

const result = [
  { nome: 'Ciro Gomes', voto: 82_500_000 },
  { nome: 'Jair Bolsonaro', voto: 15_000_000 },
  { nome: 'Luiz Inácio Lula', voto: 15_000_000 },
  { nome: 'Simone Tebet', voto: 500_000 }
];

function Resultado() {
  return (
    <table>
      <tr>
        <th>Candidato</th>
        <th>Votos</th>
      </tr>
      {result.map((r) => (
        <tr>
          <td>{r.nome}</td>
          <td>{r.voto}</td>
        </tr>
      ))}
    </table>
  );
}

export { Resultado };

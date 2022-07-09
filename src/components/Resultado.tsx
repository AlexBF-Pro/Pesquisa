import React from 'react';

const result = [
  { nome: 'Fulano', voto: 10000000 },
  { nome: 'Deltrano', voto: 11000000 },
  { nome: 'Thuler', voto: 12000000 },
  { nome: 'Bolsonaro', voto: 0 }
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

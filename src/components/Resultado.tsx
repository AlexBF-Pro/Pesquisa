import React from 'react';

const result = [
  { nome: 'Ciro Gomes', numero: 12 },
  { nome: 'Jair Bolsonaro', numero: 22 },
  { nome: 'Luiz Inácio Lula', numero: 13 },
  { nome: 'Simone Tebet', numero: 15 }
];

function Resultado() {
  return (
    <table>
      <tr>
        <th>Candidato</th>
        <th>Número</th>
        <th>Resultado Parcial</th>
      </tr>
      {result.map((r) => (
        <tr>
          <td>{r.nome}</td>
          <td>{r.numero}</td>
        </tr>
      ))}
    </table>
  );
}

export { Resultado };

import React, { useState } from 'react';

export default function Votos() {
  const [votar, setVotar] = useState<number>();

  function voto() {
    const informeValor = votar;
    setVotar(informeValor);
  }

  function quandoInputMudar(e: any) {
    setVotar(e.target.value);
  }

  return (
    <div className="Apps">
      <h4>Informe o número do Candidato de sua preferência abaixo.</h4>
      <form>
        <input
          onChange={quandoInputMudar}
          type="text"
          name="votoContabilizado"
          placeholder="Número do Candidato..."
        />
        <div className="butoes">
          <button type="submit" onClick={voto}>
            Votar
          </button>
        </div>
      </form>
    </div>
  );
}

export { Votos };

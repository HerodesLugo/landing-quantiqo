
const TypographySpecComponent = () => {
  return (
    <div className="w-full h-[46.25rem] flex flex-row overflow-hidden">
      <div className="w-1/2 h-full bg-[#BBEB42] text-gray-950 font-host p-6 lg:p-10 xl:p-16 flex flex-col justify-between">
        
        {/* Parte superior del panel izquierdo */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-row justify-between items-start">
            <h1 className="text-[60px] lg:text-[90px] xl:text-[120px] font-black leading-[0.85] tracking-tighter uppercase">
              HOST<br />GROTESK
            </h1>
            <span className="text-xs font-mono uppercase tracking-[0.2em] pt-4 text-gray-800">MAIN</span>
          </div>

          <div className="w-full relative uppercase">
            <div className="flex flex-row justify-end text-sm gap-x-6 tracking-wide text-gray-700 font-mono pr-4 pb-2">
              <div className="flex flex-col text-right">0<br />6</div>
              <div className="flex flex-col text-right">1<br />7</div>
              <div className="flex flex-col text-right">2<br />8</div>
              <div className="flex flex-col text-right">3<br />9</div>
              <div className="flex flex-col text-right">4</div>
              <div className="flex flex-col text-right">5</div>
            </div>

            <div className="border-t border-gray-950/20 mb-3"></div>

            <div className="space-y-1 font-mono text-xl ">
              {[
                { weight: 'Light', label: 'font-light', letters: 'Aa Bb Cc Dd Ee Ff' },
                { weight: 'Regular', label: 'font-normal', letters: 'Gg Hh Ii Jj Kk Ll' },
                { weight: 'Medium', label: 'font-medium', letters: 'Mm Nn Oo Pp Qq Rr' },
                { weight: 'SemiBold', label: 'font-semibold', letters: 'Ss Tt Uu Vv Ww' },
                { weight: 'Bold', label: 'font-bold', letters: 'Xx Yy Zz' }
              ].map((item, index) => (
                <div key={index} className="flex flex-row items-baseline gap-2 py-2 border-b border-gray-950/20 last:border-b-0">
                  <span className={`w-full font-mono ${item.label} text-xl tracking-tight`}>{item.weight}</span>
                  <div className={`flex flex-grow justify-start gap-x-8 ${item.label} font-host`}>
                    {item.letters.split(' ').map((pair, idx) => (
                      <span key={idx}>{pair}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>

      {/* Panel derecho - Cardo (Negro) */}
      <div className="w-1/2 h-full bg-black text-white font-cardo p-6 lg:p-10 xl:p-16 flex flex-col justify-between">
        
        {/* Parte superior del panel derecho */}
        <div className="flex flex-col gap-10">
          
          {/* Bloque de pesos de fuente derecho */}
          <div className="w-full relative uppercase">
            {/* Números superiores */}
            <div className="flex flex-row justify-end text-sm gap-x-6 tracking-wide text-gray-300 font-mono pr-4 pb-2">
              <div className="flex flex-col text-right">0<br />6</div>
              <div className="flex flex-col text-right">1<br />7</div>
              <div className="flex flex-col text-right">2<br />8</div>
              <div className="flex flex-col text-right">3<br />9</div>
              <div className="flex flex-col text-right">4</div>
              <div className="flex flex-col text-right">5</div>
            </div>

            {/* Línea horizontal superior */}
            <div className="border-t border-white/20 mb-3"></div>

            {/* Filas de pesos de fuente */}
            <div className="space-y-1 text-xl">
              {[
                { weight: 'Regular', label: 'font-mono text-gray-300', fontStyle: 'font-cardo', letters: 'Aa Bb Cc Dd Ee Ff' },
                { weight: 'Bold', label: 'font-mono font-semibold text-gray-100', fontStyle: 'font-cardo font-bold', letters: 'Gg Hh Ii Jj Kk Ll' },
                { weight: 'Italic', label: 'font-mono font-medium text-gray-200 italic', fontStyle: 'font-cardo italic', letters: 'Mm Nn Oo Pp Qq Rr' },
                { weight: '', label: '', fontStyle: 'font-cardo', letters: 'Ss Tt Uu Vv Ww' },
                { weight: '', label: '', fontStyle: 'font-cardo', letters: 'Xx Yy Zz' }
              ].map((item, index) => (
                <div key={index} className={`flex flex-row items-baseline gap-2 py-2 ${index < 3 ? 'border-b border-white/20' : ''}`}>
                  <span className={`w-full ${item.label} text-xl tracking-tight`}>{item.weight}</span>
                  <div className={`flex flex-grow justify-start gap-x-8 ${item.fontStyle}`}>
                    {item.letters.split(' ').map((pair, idx) => (
                      <span key={idx}>{pair}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Parte inferior del panel derecho */}
        <div className="flex flex-row justify-between items-end">
          {/* Etiqueta "SECONDARY" */}
          <span className="text-xs font-mono uppercase tracking-[0.2em] pb-4 text-gray-400">SECONDARY</span>
          {/* Título principal serif */}
          <h1 className="text-[60px] lg:text-[90px] xl:text-[120px] font-bold font-cardo leading-[0.85] tracking-tight">
            Cardo
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TypographySpecComponent;
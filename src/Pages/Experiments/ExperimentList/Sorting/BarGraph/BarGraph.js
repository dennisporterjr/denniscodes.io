import React from 'react';

import './BarGraph.css';
import Bar from './Bar/Bar';

function BarGraph({ bars, active }) {
  return (
      <div>
          
        <div className="bars">

          {bars.map((b, i) => (
            <Bar key={b.key} order={b.order} value={b.value} active={b.value === active} />
          ))}

        </div>

      </div>
  );
}

export default BarGraph;
import React from 'react';
function LineChart({
    data,
    width = 600,
    height = 300,
    margin = 40,
    stroke = 'steelblue',
    strokeWidth = 2,
    tickCount = 6    
  }) {
    if (!data || data.length === 0) {
      return <p>No data to display.</p>;
    }

    const xs = data.map(d => new Date(d.date).getTime());
    const ys = data.map(d => d.price);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);

    const xScale = x =>
      margin + ((x - minX) / (maxX - minX)) * (width - margin * 2);
    const yScale = y =>
      height - margin - ((y - minY) / (maxY - minY)) * (height - margin * 2);

    const points = data
      .map(d => [ xScale(new Date(d.date).getTime()), yScale(d.price) ])
      .map(([x, y]) => `${x},${y}`)
      .join(' ');

    return (
      <svg width={width} height={height}>
        {}
        <line
          x1={margin} y1={height - margin}
          x2={width - margin} y2={height - margin}
          stroke="#333"
        />
        <line
          x1={margin} y1={margin}
          x2={margin} y2={height - margin}
          stroke="#333"
        />

        {}
        <polyline
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          points={points}
        />

        {}
        {(() => {
          const ticks = [];
          for (let i = 0; i <= tickCount; i++) {
            const ts = minX + (i / tickCount) * (maxX - minX);
            ticks.push(ts);
          }
          return ticks.map((ts, idx) => {
            const x = xScale(ts);
            return (
              <g key={idx}>
                {}
                <line
                  x1={x} y1={height - margin}
                  x2={x} y2={height - margin + 6}
                  stroke="#333"
                />
                {}
                <text
                  x={x}
                  y={height - margin + 20}
                  textAnchor="middle"
                  fontSize="10"
                >
                  {new Date(ts).toLocaleDateString()}
                </text>
              </g>
            );
          });
        })()}

        {}
        {[0, 0.25, 0.5, 0.75, 1].map(f => {
          const yVal = minY + f * (maxY - minY);
          const y = yScale(yVal);
          return (
            <g key={f}>
              <line
                x1={margin - 5} y1={y}
                x2={margin}      y2={y}
                stroke="#333"
              />
              <text
                x={margin - 10}
                y={y + 4}
                fontSize="10"
                textAnchor="end"
              >
                {yVal.toFixed(0)}
              </text>
            </g>
          );
        })}
      </svg>
    );
  }

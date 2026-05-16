import React from 'react';
import './style.css';
import ButtonPlayground from './button/ButtonPlayground';
import { highlight } from 'sugar-high';

export default function Wrapper({
  children,
  componentConfig,
  componentCallback,
  tag,
  imports
}) {
  const [snippet, setSnippet] = React.useState('');
  const [copied, setCopied] = React.useState(null);

  function handleCopy() {
    navigator.clipboard.writeText(snippet);
    setCopied(snippet);
    setTimeout(() => setCopied(null), 2000);
  }
  React.useEffect(() => {
    let curr = `<${tag}\n`;
    for (const ele of componentConfig) {
      if (ele.utility === 'children' || ele.type === 'children') continue;
      const formattedVal =
        ele.format === 'string' ? `"${ele.current}"` : `{${ele.current}}`;
      curr += ele.current ? `${ele.utility}=${formattedVal}\n` : '';
    }
    curr += '>';
    const children = componentConfig.find(
      (ele) => ele.utility === 'children'
    );
    curr += children.current ? `\n${children.current}\n</${tag}>` : '';
    setSnippet(curr);
  }, [componentConfig]);
  return (
    <>
      <div className="dyvix-playground-wrapper">
        <div className="dyvix-hud-overlay">
          
          {componentConfig.map((ele, i) => {
            let currentInput = null;
            if (ele.type === 'select') {
              currentInput = <select
                className="playground-select"
                id={`${ele.utility}-${i}`}
                value={ele.current}
                onChange={(e) =>
                  componentCallback((prev) =>
                    prev.map((item) =>
                      item.utility === ele.utility
                        ? { ...item, current: e.target.value }
                        : item
                    )
                  )
                }
              >
                <option value={null}>None</option>
                {Object.entries(ele.options).map(([key, value]) => (
                  <option key={key} value={value}>
                    {key}
                  </option>
                ))}
              </select>
              
            } else if ((ele.type === 'color')) {
              
              currentInput = <input
                type="color"
                className="playground-color"
                onChange={(e) =>
                  componentCallback((prev) =>
                    prev.map((item) =>
                      item.utility === ele.utility
                        ? { ...item, current: e.target.value }
                        : item
                    )
                  )
                }
                value={ele.current}
              ></input>
              
            }else if ((ele.type === 'text')) {
                currentInput = <input
                  type="text"
                  className="playground-text"
                  onChange={(e) =>
                    componentCallback((prev) =>
                      prev.map((item) =>
                        item.utility === ele.utility
                          ? { ...item, current: e.target.value }
                          : item
                      )
                    )
                  }
                  value={ele.current}
                ></input>
            }
            if(currentInput)
            {
              return (
                <div key={ele.utility} className='dyvix-hud-item'>
                  <label htmlFor={`${ele.utility}-${i}`}>{ele.utility}</label>
                  {React.cloneElement(currentInput)}
                </div>                
              )
            }

            return null;
          })}
        </div>

        <div className="dyvix-render-zone">
          <span className='dyvix-render-message'>Live Preview</span>
          {React.cloneElement(children, {
            ...componentConfig.reduce(
              (acc, curr) => ({
                ...acc,
                [curr.utility]: curr.current
              }),
              {}
            )
          })}
        </div>

        <div className="dyvix-preview-snippet">            
          <button onClick={handleCopy} className='dyvix-preview-button'>{copied ?'Copied': 'Copy'}</button>
          <pre>
            <code dangerouslySetInnerHTML={{ __html: highlight(snippet) }} />
          </pre>
        </div>
      </div>
    </>
  );
}

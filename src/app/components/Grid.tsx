'use client'
import React, { useState } from 'react';
import { CSSProperties } from 'react';
import { Switch } from '@headlessui/react';
import ColorTranslator from '../utils/ColorTranslator';


interface Item {
  value: string;
  title: string;
}

interface GridProps {
  data: {
    [key: string]: Item[];
  };
}

const Grid: React.FC<GridProps> = ({ data }) => {
  const [enabled, setEnabled] = useState(false)


  const handleColorTranslate = (rgb: string) => {
    if (enabled) {
      return ColorTranslator(rgb)
    }
    return rgb
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-4">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-blue-800' : 'bg-gray-600'
            } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span className="sr-only">Enable Color Translation</span>
          <span
            className={`${enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
        <p className="text-sm font-medium text-center mt-2">
          RGB / HEX
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 rounded-md justify-items-center w-full 
      ">
        {Object.entries(data).map(([title, items], i) => (
          <div key={title} className="flex flex-col w-full">
            <h2 className="text-lg font-bold mb-2 text-black">{title}</h2>
            <div className="grid gap-2">
              {items.map((item: Item) => (
                <div
                  key={item.value}
                  className="flex-grow bg-gray-200 p-4 border border-gray-300 rounded-md flex flex-col justify-center items-center"
                  style={
                    item.value.includes('rgb')
                      ? { backgroundColor: item.value } as CSSProperties
                      : undefined}>
                  {item.value.includes('rgb') &&  (
                    <p
                    className="text-center text-sm font-medium mb-2 text-black"
                    style={{ backgroundColor: 'white', borderRadius: '5px', padding: '5px', borderWidth: '1px', borderColor: 'grey'}}
                  >
                    {item.value.includes('rgb') && !enabled ? item.value : null}
                    {item.value.includes('rgb') && enabled
                      ? handleColorTranslate(item.value)
                      : null}
                  </p>
                  ) }
                  {!item.value.includes('rgb') && (
                    <p className="text-center text-sm font-medium mb-2 text-black"
                    
                    >
                      {item.value.includes('rgb') ? null : item.value}
                    </p>
                  )
                  }
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;

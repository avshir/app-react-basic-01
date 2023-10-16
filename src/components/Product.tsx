import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
  title?: string;
  count?: number;
}

export function Product({ product }: ProductProps) {
  console.log(product);
  const [details, setDetails] = useState(false);
  const btnBgClassList = details ? 'bg-yellow-400' : 'bg-blue-400';
  // const btnClassList = ['py-2 px-4 border', btnBgClassList];
  const btnClassList = `py-2 px-4 border ${btnBgClassList}`;


  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt="product.title" />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button
        className={btnClassList}
        onClick={() => setDetails((prev) => !prev)}
      >
        { details ? 'Hide details' : 'Show details'}
      </button>

      {details && <div>
        <p>{product.description}</p>
        <p>Rate: <span style={{ fontWeight: 'bold' }}>{product.rating?.rate}</span> </p>
      </div>
      }
    </div>
  );
}

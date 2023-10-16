import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { IProduct } from "../models";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchProducts () {
    try {
      setError(''); 
      setLoading(true);
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=7');
      // console.log(response.data);
      setProducts(response.data);
      setLoading(false);
    } catch (err: unknown) {
      setLoading(false);
      const error = err as AxiosError;
      setError(error.message); 
    }
  }

  useEffect(()=> {
    // console.log('effect');
    fetchProducts();
  }, [])

  return { products, loading, error };
}
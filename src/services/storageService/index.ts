import BN from 'bn.js';

export const tokenAccount = 'C3Y17A8tWuEWyCxHBxXkEQrfVPEMwinYbATRqXBWqkrk';
export const poolTokenAccount = 'dA4ybu5m4rCqyzC4JLAdDPgQARQ3LG4LRSqRoX4pfvj';
export const nonce = 254;
export const poolMint = 'AigcNY227nrAqP4cEb2EPogpCiT8ya9WwkAhTdMCgAzx';
export const savings = '5iNmX6SGehX4KjjoSqzxnAk3etgs6YSFFzaVZSFthSZ9';

export const addPrecision = (number) => {
  return new BN(number * Math.pow(10, 9));
};

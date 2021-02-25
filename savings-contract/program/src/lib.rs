#![deny(missing_docs)]

//! A program for demo savings service for Solana DeFi hackathon

pub mod instruction;
pub mod processor;
pub mod state;
pub mod token;

/// Current program version
pub const PROGRAM_VERSION: u8 = 1;

#[cfg(not(feature = "no-entrypoint"))]
pub mod entrypoint;

// Export current sdk types for downstream users building with a different sdk version
pub use solana_program;

solana_program::declare_id!("CR8CRris6RDN8RHw4ANgt7rPTs771kGSu4vNgk76WGJ2");

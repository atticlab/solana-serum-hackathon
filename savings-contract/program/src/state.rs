//! State transition types

use arrayref::{array_mut_ref, array_ref, array_refs, mut_array_refs};
use solana_program::{
    program_error::ProgramError,
    program_pack::{IsInitialized, Pack, Sealed},
    pubkey::Pubkey,
};

/// Uninitialized version value, all instances are at least version 1
pub const UNINITIALIZED_VERSION: u8 = 0;

/// Current program version
pub const CURRENT_VERSION: u8 = 1;

/// Program states.
#[repr(C)]
#[derive(Debug, Default, PartialEq)]
pub struct Pool {
    /// Initialized state.
    pub version: u8,

    /// Bump seed used in program address.
    pub bump_seed: u8,

    /// Program ID of the tokens
    pub token_program_id: Pubkey,

    /// Account to deposit into
    pub savings_account: Pubkey,

    /// Mint for the tokens sent to the pool
    pub savings_mint: Pubkey,

    /// Mint for the tokens received as collateral from the pool
    pub pool_mint: Pubkey,

    /// Pool owner account
    pub owner: Pubkey,
}

impl Sealed for Pool {}
impl IsInitialized for Pool {
    fn is_initialized(&self) -> bool {
        self.version != UNINITIALIZED_VERSION
    }
}

impl Pack for Pool {
    const LEN: usize = 162;

    fn pack_into_slice(&self, dst: &mut [u8]) {
        let dst = array_mut_ref![dst, 0, 162];
        let (version, bump_seed, token_program_id, savings_account, savings_mint, pool_mint, owner) =
            mut_array_refs![dst, 1, 1, 32, 32, 32, 32, 32];
        version[0] = self.version;
        bump_seed[0] = self.bump_seed;
        token_program_id.copy_from_slice(self.token_program_id.as_ref());
        savings_account.copy_from_slice(self.savings_account.as_ref());
        savings_mint.copy_from_slice(self.savings_mint.as_ref());
        pool_mint.copy_from_slice(self.pool_mint.as_ref());
        owner.copy_from_slice(self.owner.as_ref());
    }
    fn unpack_from_slice(src: &[u8]) -> Result<Self, ProgramError> {
        let src = array_ref![src, 0, 162];
        let (version, bump_seed, token_program_id, savings_account, savings_mint, pool_mint, owner) =
            array_refs![src, 1, 1, 32, 32, 32, 32, 32];
        Ok(Pool {
            version: version[0],
            bump_seed: bump_seed[0],
            token_program_id: Pubkey::new_from_array(*token_program_id),
            savings_account: Pubkey::new_from_array(*savings_account),
            savings_mint: Pubkey::new_from_array(*savings_mint),
            pool_mint: Pubkey::new_from_array(*pool_mint),
            owner: Pubkey::new_from_array(*owner),
        })
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn test_state_packing() {
        let pool = Pool {
            version: 1,
            bump_seed: 2,
            token_program_id: Pubkey::new_from_array([1; 32]),
            savings_account: Pubkey::new_from_array([2; 32]),
            savings_mint: Pubkey::new_from_array([3; 32]),
            pool_mint: Pubkey::new_from_array([4; 32]),
            owner: Pubkey::new_from_array([5; 32]),
        };

        let mut bytes: [u8; Pool::LEN] = [0; Pool::LEN];
        pool.pack_into_slice(&mut bytes);
        let pool_unpacked = Pool::unpack_from_slice(&bytes).unwrap();
        assert_eq!(pool, pool_unpacked);
    }
}

use anchor_lang::prelude::*;

declare_id!("GVVbqMSb93rYpUoCWAZajhKa5ZYYqZzNvQ3Zn2ULJP3W");

#[program]
pub mod basic_dapp_project {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, title: String, content: String) -> Result<()> {
        let post = &mut ctx.accounts.post;
        post.title = title;
        post.content = content;
        Ok(())
    }

    pub fn update(ctx: Context<Update>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer=user, space=264)]
    pub post: Account<'info, Post>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Update<'info> {
    #[account(mut)]
    pub post: Account<'info, Post>,
}

#[account]
pub struct Post {
    pub title: String,
    pub content: String,
}
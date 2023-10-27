# Install Solana Toolsuite
sh -c "$(curl -sSfL https://release.solana.com/v1.17.3/install)"

# Install Rust and Cargo
curl https://sh.rustup.rs -sSf | sh -s -- -y

echo "Solana and Rust are installed!"

# Install node dependencies
npm install
npm install -g tsx ts-node

# Run this commands after
# export PATH="/home/codespace/.local/share/solana/install/active_release/bin:$PATH"
# source "$HOME/.cargo/env"eco

# Try this command to check
# solana --version
# cargo --version
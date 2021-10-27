import{_ as o,c as e,o as r,d as t}from"./app.c9e98319.js";const b='{"title":"Solomon Decom Contracts","description":"","frontmatter":{},"headers":[{"level":3,"title":"Solomon Contract Factory","slug":"solomon-contract-factory"},{"level":3,"title":"Solomon Contract Library","slug":"solomon-contract-library"},{"level":3,"title":"Solomon Chargeback","slug":"solomon-chargeback"},{"level":3,"title":"Solomon Preorder","slug":"solomon-preorder"},{"level":3,"title":"Solomon Escrow","slug":"solomon-escrow"},{"level":2,"title":"Contribution","slug":"contribution"}],"relativePath":"contracts/index.md","lastUpdated":1635304465430}',a={},c=t(`<h1 id="solomon-decom-contracts" tabindex="-1">Solomon Decom Contracts <a class="header-anchor" href="#solomon-decom-contracts" aria-hidden="true">#</a></h1><p>All Solomon smart contracts are contained in the monorepo: <a href="https://github.com/solomondefi/solomon-monorepo" target="_blank" rel="noopener noreferrer">https://github.com/solomondefi/solomon-monorepo</a></p><h3 id="solomon-contract-factory" tabindex="-1">Solomon Contract Factory <a class="header-anchor" href="#solomon-contract-factory" aria-hidden="true">#</a></h3><p>TODO -- updated after monorepo migration</p><ul><li>Package name: <code>@solomondefi/contract-factory</code></li><li>Source: <a href="https://github.com/solomondefi/slm-contracts/blob/main/contracts/SlmFactory.sol" target="_blank" rel="noopener noreferrer">https://github.com/solomondefi/slm-contracts/blob/main/contracts/SlmFactory.sol</a></li><li>Contracts: <ul><li><code>SlmFactory.sol</code></li></ul></li></ul><p>A contract factory for producing chargeback, preorder, and escrow contracts with low gas cost. Depends on <code>SlmChargeback</code>, <code>SlmPreorder</code>, <code>SlmEscrow</code>, and <code>SlmJudgement</code>.</p><h3 id="solomon-contract-library" tabindex="-1">Solomon Contract Library <a class="header-anchor" href="#solomon-contract-library" aria-hidden="true">#</a></h3><p>Library contracts with helper methods for chargeback, preorder, and escrow related functionality.</p><ul><li>Package name: <code>@solomondefi/contract-library</code></li><li>Source: <a href="https://github.com/solomondefi/slm-contracts/tree/main/library" target="_blank" rel="noopener noreferrer">https://github.com/solomondefi/slm-contracts/tree/main/library</a></li><li>Contracts: <ul><li><code>SlmPurchaseUtil.sol</code><ul><li>Utility functions common to purchase contracts</li></ul></li><li><code>SlmJudgement.sol</code><ul><li>Mediates purchase disputes</li></ul></li><li><code>SlmStaking.sol</code><ul><li>Provides a mechanism for staking SLM, and distributes purchase fees to stakers</li></ul></li></ul></li></ul><h3 id="solomon-chargeback" tabindex="-1">Solomon Chargeback <a class="header-anchor" href="#solomon-chargeback" aria-hidden="true">#</a></h3><p>Purchase/Chargeback contract that provides buyer protection for traditional ecommerce purchases.</p><ul><li>Package name: <code>@solomondefi/contract-chargebacks</code></li><li>Source: <a href="https://github.com/solomondefi/slm-contracts/blob/main/contracts/SlmChargeback.sol" target="_blank" rel="noopener noreferrer">https://github.com/solomondefi/slm-contracts/blob/main/contracts/SlmChargeback.sol</a></li><li>Contracts: <ul><li><code>SlmChargebacks.sol</code><ul><li>Chargeback functionality for ecommerce purchases</li></ul></li></ul></li></ul><h3 id="solomon-preorder" tabindex="-1">Solomon Preorder <a class="header-anchor" href="#solomon-preorder" aria-hidden="true">#</a></h3><p>Preorder contract that can also be used for crowdfunding.</p><ul><li>Package name: <code>@solomondefi/contract-preorder</code></li><li>Source: <a href="https://github.com/solomondefi/slm-contracts/blob/main/contracts/SlmPreorder.sol" target="_blank" rel="noopener noreferrer">https://github.com/solomondefi/slm-contracts/blob/main/contracts/SlmPreorder.sol</a></li><li>Contracts: <ul><li><code>SlmPreorder.sol</code><ul><li>Preorder functionality for ecommerce, crowdfunding, etc</li></ul></li></ul></li></ul><h3 id="solomon-escrow" tabindex="-1">Solomon Escrow <a class="header-anchor" href="#solomon-escrow" aria-hidden="true">#</a></h3><p>Escrow contract for large transactions with strict requirements.</p><ul><li>Package name: <code>@solomondefi/contract-escrow</code></li><li>Source: <a href="https://github.com/solomondefi/slm-contracts/blob/main/contracts/SlmEscrow.sol" target="_blank" rel="noopener noreferrer">https://github.com/solomondefi/slm-contracts/blob/main/contracts/SlmEscrow.sol</a></li><li>Contracts: <ul><li><code>SlmEscrow.sol</code><ul><li>Escrow functionality for personal and B2B transactions</li></ul></li></ul></li></ul><h2 id="contribution" tabindex="-1">Contribution <a class="header-anchor" href="#contribution" aria-hidden="true">#</a></h2><p>SLM purchase contracts are written in Solidity. We use <a href="https://hardhat.org/" target="_blank" rel="noopener noreferrer">Hardhat</a> for development, and future packages will be pushed to NPM. For now, contracts are included by adding a git tag to dependencies, and importing directly from <code>node_modules/</code></p><p><strong>Install</strong> (we recommend <a href="https://pnpm.js.org/" target="_blank" rel="noopener noreferrer">pnpm</a> if you work with many node projects):</p><div class="language-"><pre><code>npm install
</code></pre></div><p><strong>Compile</strong></p><div class="language-"><pre><code>npx hardhat compile
</code></pre></div><p><strong>Test</strong></p><div class="language-"><pre><code>npx hardhat test
</code></pre></div><p>TODO -- Include specific contribution guidelines</p>`,27),l=[c];function n(i,s,d,m,h,u){return r(),e("div",null,l)}var g=o(a,[["render",n]]);export{b as __pageData,g as default};

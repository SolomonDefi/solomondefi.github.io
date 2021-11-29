import{_ as e,c as o,o as a,d as n}from"./app.64e9f05b.js";const f='{"title":"Evidence Upload","description":"","frontmatter":{},"headers":[{"level":3,"title":"Evidence Uploader Frontend","slug":"evidence-uploader-frontend"},{"level":3,"title":"Evidence Uploader Backend","slug":"evidence-uploader-backend"}],"relativePath":"services/evidence.md","lastUpdated":1638172332787}',t={},d=n('<h1 id="evidence-upload" tabindex="-1">Evidence Upload <a class="header-anchor" href="#evidence-upload" aria-hidden="true">#</a></h1><p>The purpose of the uploader is to provide a simple interface for uploading evidence links to the blockchain during escrow disputes. Links must exist for the duration of the dispute (generally a maximum of 2 months). There are several methods for uploading evidence, and it is straightforward to add more.</p><ol><li>User provides their own link</li><li>User provides files and the <code>backend</code> uploads to an S3-compatible data store</li><li>(TBD) Pin on an IPFS node for the duration of a dispute</li></ol><p>Currently, only Metamask is supported as a wallet provider for posting the link to the blockchain, but WalletConnect and other methods may be added in the future.</p><p>A hosted frontend and backend are provided by Solomon, a UI demo can currently be viewed at <a href="https://evidence.solomondefi.com" target="_blank" rel="noopener noreferrer">https://evidence.solomondefi.com</a></p><h3 id="evidence-uploader-frontend" tabindex="-1">Evidence Uploader Frontend <a class="header-anchor" href="#evidence-uploader-frontend" aria-hidden="true">#</a></h3><p>See the <code>web-evidence</code> monorepo app for more technical details including setup and deploy procedures: <a href="https://github.com/SolomonDefi/solomon-monorepo/tree/main/apps/web-evidence" target="_blank" rel="noopener noreferrer">https://github.com/SolomonDefi/solomon-monorepo/tree/main/apps/web-evidence</a></p><p>A Vue3 app for uploading dispute evidence links to the blockchain. Files may be provided via external link, or uploaded directly to the hosted <code>backend</code>. Metamask is used for executing the transaction.</p><h3 id="evidence-uploader-backend" tabindex="-1">Evidence Uploader Backend <a class="header-anchor" href="#evidence-uploader-backend" aria-hidden="true">#</a></h3><p>See the <code>api-evidence</code> monorepo app for more technical details including setup and deploy procedures: <a href="https://github.com/SolomonDefi/solomon-monorepo/tree/main/apps/api-evidence" target="_blank" rel="noopener noreferrer">https://github.com/SolomonDefi/solomon-monorepo/tree/main/apps/api-evidence</a></p><p>A FastAPI (Python) app for uploading dispute evidence links to the blockchain. DigitalOcean&#39;s spaces service is used for storing data, but it can be substituted with any S3 compatible service.</p><p>The <a href="/services/shortener.html">URL Shortener</a> is used to shorten links to reduce blockchain gas fees.</p>',12),i=[d];function r(s,c,p,l,h,u){return a(),o("div",null,i)}var v=e(t,[["render",r]]);export{f as __pageData,v as default};

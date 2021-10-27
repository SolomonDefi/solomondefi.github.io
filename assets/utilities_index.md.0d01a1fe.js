import{_ as e,c as o,o as t,d}from"./app.c9e98319.js";const m='{"title":"Evidence Upload","description":"","frontmatter":{},"headers":[{"level":2,"title":"Evidence Uploader Frontend","slug":"evidence-uploader-frontend"},{"level":2,"title":"Evidence Uploader Backend","slug":"evidence-uploader-backend"}],"relativePath":"utilities/index.md","lastUpdated":1635304465430}',a={},n=d('<h1 id="evidence-upload" tabindex="-1">Evidence Upload <a class="header-anchor" href="#evidence-upload" aria-hidden="true">#</a></h1><p>Repository: <a href="https://github.com/solomondefi/evidence-uploader" target="_blank" rel="noopener noreferrer">https://github.com/solomondefi/evidence-uploader</a></p><p>The purpose of the uploader is to provide a simple interface for uploading evidence links to the blockchain during escrow disputes. Links must exist for the duration of the dispute (generally a maximum of 2 months). There are several methods for uploading evidence, and it is straightforward to add more.</p><ol><li>User provides their own link</li><li>User provides files and the <code>backend</code> uploads to an S3-compatible data store</li><li>(TBD) Pin on an IPFS node for the duration of a dispute</li></ol><p>Currently, only Metamask is supported as a wallet provider for posting the link to the blockchain, but WalletConnect and other methods may be added in the future.</p><p>A hosted frontend and backend are provided by Solomon, a UI demo can currently be viewed at <a href="https://evidence.solomondefi.com" target="_blank" rel="noopener noreferrer">https://evidence.solomondefi.com</a></p><h2 id="evidence-uploader-frontend" tabindex="-1">Evidence Uploader Frontend <a class="header-anchor" href="#evidence-uploader-frontend" aria-hidden="true">#</a></h2><p>See the <code>frontend</code> folder of the evidence uploader Github repository for more technical details including setup and deploy procedures: <a href="https://github.com/solomondefi/evidence-uploader/tree/main/frontend" target="_blank" rel="noopener noreferrer">https://github.com/solomondefi/evidence-uploader/tree/main/frontend</a></p><p>A Vue3 app for uploading dispute evidence links to the blockchain. Files may be provided via external link, or uploaded directly to the hosted <code>backend</code>. Metamask is used for executing the transaction.</p><h2 id="evidence-uploader-backend" tabindex="-1">Evidence Uploader Backend <a class="header-anchor" href="#evidence-uploader-backend" aria-hidden="true">#</a></h2><p>See the <code>backend</code> folder of the evidence uploader Github repository for more technical details including setup and deploy procedures: <a href="https://github.com/solomondefi/evidence-uploader/tree/main/backend" target="_blank" rel="noopener noreferrer">https://github.com/solomondefi/evidence-uploader/tree/main/backend</a></p><p>A Flask (Python) app for uploading dispute evidence links to the blockchain. DigitalOcean&#39;s spaces service is used for storing data, but it can be substituted with any S3 compatible service.</p><p>The <a href="/utilities/shortener.html">URL Shortener</a> is used to shorten links to reduce blockchain gas fees.</p>',13),r=[n];function i(l,s,c,p,h,u){return t(),o("div",null,r)}var v=e(a,[["render",i]]);export{m as __pageData,v as default};

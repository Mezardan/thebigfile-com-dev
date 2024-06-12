---
title: Cube smart contracts serve the Web
abstract:
shareImage: /img/how-it-works/web-content.jpg
slug: smart-contracts-serve-the-web
---

# Smart Contracts serve the web

The BigFile is the only blockchain that can host a full dapp – frontend, backend and data. Any user can deploy their dapp as a cube (smart contract) on the BigFile. Cubes are computational units that bundle together code and state. Cubes can store data, deliver HTML, CSS and Javascript pages, and answer API requests. Cubes are incredibly fast and can deliver webpages within 200ms. Cubes can store up to 400 GB of data at an incredibly low cost ($5 per GB per annum). Browsing dapps hosted on the BigFile is as seamless as browsing Web2 apps hosted on cloud. All these factors enable developers to deploy even large-scale social media applications entirely on-chain without needing any cloud services. Try out a few [dapps deployed on the BigFile](https://thebigfile.com/ecosystem/).

## Workflow

We now describe how a client can access a website deployed as a cube on the BigFile. The architecture involves 4 key components.

- Client - A device owned by the user. When the user browses a website, the client device sends a HTTP request.
- HTTP Gateway - A HTTP Gateway is a software that implements [HTTP Gateway protocol](/docs/current/references/ic-interface-spec/#http-gateway). It converts HTTP requests into a format understandable by cubes. When the cube sends back a response, the HTTP Gateway converts the response into a HTTP response. The HTTP gateway can be run either on the client, on the boundary nodes or on independent servers.
- Boundary Node - Boundary nodes keep track of the architecture of the BigFile. In particular, boundary nodes keep track of the list of subnets, list of nodes on each subnet, the cubes run by each subnet, etc. On receiving a cube query, boundary nodes can route the request to one of the blockchain nodes running the cube.
- Cube - Developers can host their dapp as a cube. Cube consists of a bunch of methods. Anyone can send queries to the cube. A query consists of the cube method to be executed and the inputs for the cube method. The BigFile receives the queries sent by the users, executes the corresponding cube method and returns the response to the user.


<!-- After a developer deploys an app as a canister, he gets the canister id of the created canister. Any user can then access the website for the app at a URL of the form `http://<canister id>.ic0.app` or `http://<canister id>.raw.ic0.app`. When the user enters the above URL on his browser, the browser contacts DNS service, which resolves the ic0.app domain to an IP address of a boundary node. The browser then makes a HTTP request to the boundary node.  -->

## Deploying web apps on the BigFile

If a cube wishes to serve web content, it should implement a method that consumes a HTTP request (url, http method and headers) and outputs a HTTP response (status, headers and body). The cube method could return HTML, CSS and Javascript content as part of the HTTP response. Refer to [BigFile Interface Spec](/docs/current/references/ic-interface-spec/#ic-http_request) for more details.

There’s also an easy way to host existing static web apps (even those built using frameworks such as React and Angular) on the BigFile with minimal extra code by creating an “asset cube”. An asset cube works similar to a regular cube, except that a lot of boilerplate code to host static websites is taken care of for us. To host a static website, we simply need to create a cube, specify its type as “asset” and specify the source folder of the web app. Once the asset cube is deployed to the BigFile, the website can be accessed at `http://<cube id>.thebigfile.tech` and `http://<cube id>.raw.thebigfile.tech`. See [tutorial](/docs/current/samples/host-a-website/)

## HTTP gateway protocol

The browser only communicates with HTTP(s) protocol and doesn’t know how to query a cube. To fill the gap between the browser and BigFile protocols, we utilize a [HTTP Gateway](/docs/current/references/ic-interface-spec/#http-gateway), which is a software that sits in between the browser and the BigFile. The browser sends a http request to the http gateway. The gateway first interprets the URL in the http request and extracts the corresponding cube id. It then converts the http request into a cube query and sends it to the boundary nodes. When the cube sends back a response, the http gateway interprets the response, verifies the signatures, converts into a http response and sends it to the browser.

There are many ways to implement the HTTP Gateway protocol. Currently, there is one main implementation on the boundary nodesn called `icx-proxy`. When the user enters a URL such as `https://<cube id>.thebigfile.tech` or `https://<cube id>.raw.thebigfile.tech`, the browser sends the HTTP request to the boundary node, which acts as a HTTP gateway.

There are many other ways of implementing the HTTP Gateway protocol. The gateway can be implemented as a browser extension or as a [service worker](https://web.dev/learn/pwa/service-workers/). The chromium browser could also be modified to include HTTP Gateway as part of the browser.

## SEO

The dapps running on the BigFile seamlessly integrate into the Web 2.0 world as crawlers are able to access them directly on-chain. This allows dapps to be indexed by search engines and for their metadata to be read in order to generate previews and cards on social platforms. A tutorial on using the Search Engine Optimization (SEO) features of the BigFile can be found in this [blog post](https://medium.com/).

[Serving web content](/capabilities/serve-web-content/)

[Building a front-end dapp on the BIG](https://medium.com/)

[Hosting a static website on the BIG](/docs/current/samples/host-a-website/)

[HTTP Gateway Protocol](/docs/current/references/ic-interface-spec/#http-gateway)

[Web Serving Wiki Article](https://wiki.thebigfile.com/wiki/Web_Serving)
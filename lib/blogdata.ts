export const blogs = [
    {
      id: 1,
      title: "How WebSockets Work?",
      description: "An in-depth exploration of WebSocket technology, real-time communication, and how it differs from traditional HTTP requests.",
      publishedAt: new Date('2024-12-15'),
      readTime: 8,
      tags: ['WebSockets', 'JavaScript', 'Backend'],
      content: `
  ## Introduction to WebSockets
  
  WebSockets provide a persistent connection between a client and server that both parties can use to start sending data at any time. Unlike HTTP, which is unidirectional where the client requests and the server responds, WebSockets allow for bidirectional communication.
  
  ### The Problem WebSockets Solve
  
  Traditional web applications used polling techniques to receive updates from servers:
  
  \`\`\`javascript
  // Polling example
  setInterval(() => {
    fetch('/api/updates')
      .then(response => response.json())
      .then(data => {
        // Handle updates
      });
  }, 3000);
  \`\`\`
  
  This approach has several drawbacks:
  - Unnecessary requests when no new data exists
  - Latency between updates
  - Server overhead from managing many requests
  
  ### WebSocket Protocol
  
  WebSockets use the WebSocket protocol which facilitates a persistent, low-latency connection. A WebSocket connection starts as an HTTP request that includes an Upgrade header to switch to the WebSocket protocol.
  
  \`\`\`
  GET /chat HTTP/1.1
  Host: server.example.com
  Upgrade: websocket
  Connection: Upgrade
  Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
  Sec-WebSocket-Version: 13
  \`\`\`
  
  Once established, data can flow between client and server with minimal overhead.
  
  ## Implementing WebSockets
  
  Here's a simple implementation using the WebSocket API in browsers:
  
  \`\`\`javascript
  // Client-side
  const socket = new WebSocket('ws://example.com/socket');
  
  socket.onopen = function(event) {
    console.log('Connection established');
    socket.send('Hello Server!');
  };
  
  socket.onmessage = function(event) {
    console.log('Message from server:', event.data);
  };
  
  socket.onclose = function(event) {
    console.log('Connection closed');
  };
  \`\`\`
  
  And server-side using Node.js with the ws library:
  
  \`\`\`javascript
  // Server-side with Node.js
  const WebSocket = require('ws');
  const wss = new WebSocket.Server({ port: 8080 });
  
  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });
  
    ws.send('Hello Client!');
  });
  \`\`\`
  
  ## Use Cases for WebSockets
  
  WebSockets excel in scenarios requiring real-time updates:
  - Chat applications
  - Live sports updates
  - Collaborative editing tools
  - Real-time dashboards
  - Gaming applications
  
  ## Conclusion
  
  WebSockets revolutionize web communication by enabling real-time, bidirectional data flow with minimal overhead. While not suitable for every application, they provide significant advantages for interactive, real-time web experiences.
      `
    },
    {
      id: 2,
      title: "Building Responsive Layouts with Tailwind CSS",
      description: "Learn how to create beautiful, responsive layouts using Tailwind CSS utility classes without writing custom CSS.",
      publishedAt: new Date('2024-11-28'),
      readTime: 6,
      tags: ['CSS', 'Tailwind', 'Frontend'],
      content: `
  ## Why Tailwind CSS?
  
  Tailwind CSS takes a utility-first approach to styling, providing low-level utility classes that let you build completely custom designs without leaving your HTML. This eliminates the need to write custom CSS in many cases and leads to more consistent designs.
  
  ### Key Benefits
  
  - No more naming CSS classes
  - Consistent spacing, colors, and other design tokens
  - Responsive design made simple
  - Dark mode with minimal effort
  - No CSS build steps (when using CDN)
  
  ## Getting Started
  
  Add Tailwind to your project:
  
  \`\`\`html
  <!-- Via CDN (not recommended for production) -->
  <link href="https://cdn.tailwindcss.com" rel="stylesheet">
  
  <!-- Or install via npm -->
  <!-- npm install tailwindcss -->
  <!-- npx tailwindcss init -->
  \`\`\`
  
  ## Building a Responsive Card Layout
  
  Let's create a simple card component:
  
  \`\`\`html
  <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="md:shrink-0">
        <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/example.jpg" alt="Example image">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
        <p class="mt-2 text-slate-500">Looking to take your business to the next level? Learn how to find customers who will love your products.</p>
      </div>
    </div>
  </div>
  \`\`\`
  
  The beauty here is in the responsive design. On small screens, the image appears above the content. On medium screens and larger, they appear side by side.
  
  ## Responsive Design with Tailwind
  
  Tailwind makes responsive design simple with breakpoint prefixes:
  
  - \`sm:\` (640px and up)
  - \`md:\` (768px and up)
  - \`lg:\` (1024px and up)
  - \`xl:\` (1280px and up)
  - \`2xl:\` (1536px and up)
  
  \`\`\`html
  <div class="text-center md:text-left">
    This text is centered on mobile, but left-aligned on medium screens and up.
  </div>
  \`\`\`
  
  ## Conclusion
  
  Tailwind CSS provides a different approach to styling that can significantly speed up development. By using utility classes directly in your HTML, you create a tight coupling between your content and its presentation, making it easier to make changes and maintain consistency across your project.
      `
    },
    {
      id: 3,
      title: "Getting Started with React Server Components",
      description: "Explore the new React Server Components paradigm and how it changes the way we think about building React applications.",
      publishedAt: new Date('2024-10-12'),
      readTime: 10,
      tags: ['React', 'JavaScript', 'Performance'],
      content: `
  ## What Are React Server Components?
  
  React Server Components (RSC) represent a paradigm shift in how we build React applications. They allow components to render on the server without requiring JavaScript to run on the client, while still maintaining interactivity where needed.
  
  ### The Problems RSC Solve
  
  - **Bundle Size**: Traditional React apps ship all component code to the client
  - **Data Fetching**: Components often need to fetch their own data, leading to waterfall requests
  - **Backend Access**: Client components can't directly access backend resources
  
  ## Server Components vs. Client Components
  
  ### Server Components:
  
  - Render on the server only
  - Never included in the client JavaScript bundle
  - Can access backend resources directly
  - Cannot use hooks or browser APIs
  - Cannot handle user interactions
  - File convention: \`.server.jsx\` (in some frameworks)
  
  ### Client Components:
  
  - Render on both client and server (hydration)
  - Included in the client JavaScript bundle
  - Cannot access backend resources directly
  - Can use hooks and browser APIs
  - Can handle user interactions
  - File convention: \`.client.jsx\` (in some frameworks)
  
  In Next.js 13+ with the App Router, the default is server components unless you add "use client" directive.
  
  ## Building with Server Components
  
  \`\`\`jsx
  // Server Component (default in Next.js App Router)
  async function ProductList() {
    // Direct database access - no API needed
    const products = await db.product.findMany();
    
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - "{product.price}"
              {/* Client component for interactivity */}
              <AddToCart productId={product.id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  // Client Component
  'use client';
  import { useState } from 'react';
  
  function AddToCart({ productId }) {
    const [added, setAdded] = useState(false);
    
    return (
      <button onClick={() => setAdded(true)}>
        {added ? 'Added to cart' : 'Add to cart'}
      </button>
    );
  }
  \`\`\`
  
  ## Benefits of React Server Components
  
  1. **Improved Performance**: Smaller bundle sizes and faster initial page load
  2. **Simplified Data Fetching**: Direct backend access without APIs
  3. **Automatic Code Splitting**: Only ship client code when needed
  4. **Progressive Enhancement**: Server-rendered content works without JavaScript
  5. **Improved SEO**: Content is fully rendered on the server
  
  ## Conclusion
  
  React Server Components fundamentally change how we build React applications by allowing us to choose the rendering environment for each component. By rendering as much as possible on the server and only sending interactive components to the client, we can build faster, more efficient applications.
      `
    },
    {
      id: 4,
      title: "Understanding the JavaScript Event Loop",
      description: "A deep dive into how the JavaScript event loop works and why it matters for writing efficient asynchronous code.",
      publishedAt: new Date('2024-09-05'),
      readTime: 7,
      tags: ['JavaScript', 'Performance', 'Advanced'],
      content: `
  ## The JavaScript Execution Model
  
  JavaScript is single-threaded, meaning it has one call stack and can do one thing at a time. However, browser APIs, callbacks, and the event loop allow JavaScript to handle asynchronous operations without blocking execution.
  
  ### The Components of JavaScript's Concurrency Model
  
  1. **Call Stack**: Where function calls are tracked
  2. **Web APIs**: Browser-provided threads for operations like setTimeout, fetch, DOM events
  3. **Callback Queue**: Where callbacks wait to be processed
  4. **Microtask Queue**: Higher priority queue for promises
  5. **Event Loop**: Mechanism that checks the stack and moves callbacks to it
  
  ## How the Event Loop Works
  
  The event loop follows a simple rule: while the call stack is empty, take the first task from the queue and push it to the call stack, which effectively runs it.
  
  \`\`\`javascript
  console.log('Start');
  
  setTimeout(() => {
    console.log('Timeout callback');
  }, 0);
  
  Promise.resolve().then(() => {
    console.log('Promise callback');
  });
  
  console.log('End');
  \`\`\`
  
  Output:
  \`\`\`
  Start
  End
  Promise callback
  Timeout callback
  \`\`\`
  
  ### Why This Order?
  
  1. \`console.log('Start')\` executes immediately
  2. \`setTimeout\` is scheduled (Web API) and its callback enters the callback queue
  3. \`Promise.resolve().then()\` is scheduled and its callback enters the microtask queue
  4. \`console.log('End')\` executes immediately
  5. Call stack is now empty, microtask queue is processed first
  6. After microtasks, the event loop moves to the callback queue
  
  ## Common Pitfalls and Best Practices
  
  ### Blocking the Event Loop
  
  Long-running operations on the main thread block the event loop:
  
  \`\`\`javascript
  function blockingOperation() {
    const start = Date.now();
    while (Date.now() - start < 5000) {
      // Blocking for 5 seconds
    }
  }
  
  document.getElementById('button').addEventListener('click', blockingOperation);
  // This will make the UI unresponsive during execution
  \`\`\`
  
  ### Solutions
  
  1. **Break up long tasks**: Use \`setTimeout()\` with 0ms to yield to the event loop
  2. **Web Workers**: Offload heavy computation to separate threads
  3. **Async/await**: Structure code to allow the event loop to continue
  
  \`\`\`javascript
  async function processInChunks(items) {
    const CHUNK_SIZE = 100;
    
    for (let i = 0; i < items.length; i += CHUNK_SIZE) {
      const chunk = items.slice(i, i + CHUNK_SIZE);
      await processChunk(chunk);
      // This await allows the event loop to handle other tasks
      await new Promise(resolve => setTimeout(resolve, 0));
    }
  }
  \`\`\`
  
  ## Conclusion
  
  Understanding the event loop is crucial for writing efficient JavaScript. By respecting its single-threaded nature and leveraging asynchronous patterns correctly, you can build responsive applications that handle multiple operations smoothly.
      `
    },
  ];
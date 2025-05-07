 
// // // // // const express = require('express');
// // // // // const mongoose = require('mongoose');
// // // // // const cors = require('cors');
// // // // // require('dotenv').config();  // Load environment variables from .env file

// // // // // // Import routes
// // // // // const authRoutes = require('./routes/authRoutes');        // Login/Register routes
// // // // // const contactRoutes = require('./routes/contacts');       // Contacts CRUD
// // // // // const leadRoutes = require('./routes/leadRoutes');        // Leads Management
// // // // // const taskRoutes = require('./routes/tasks');
// // // // // const meetingRoutes = require('./routes/meetings');             // ✅ Tasks Management
// // // // // const stats = require('./routes/stats');
// // // // // const callRoutes = require('./routes/callRoutes');
// // // // // const productRoutes = require('./routes/productRoutes');

// // // // // const app = express();

// // // // // // Middlewarey
// // // // // app.use(cors());
// // // // // app.use(express.json());  // Express JSON parser for handling request bodies

// // // // // // MongoDB Connection (from .env file)
// // // // // mongoose.connect(process.env.MONGO_URI, {
// // // // //   useNewUrlParser: true,
// // // // //   useUnifiedTopology: true,
// // // // // })
// // // // // .then(() => console.log('✅ MongoDB Connected'))
// // // // // .catch((err) => console.error('❌ MongoDB connection error:', err));

// // // // // // Routes
// // // // // app.use('/api/auth', authRoutes);         // Auth (Login/Register)
// // // // // app.use('/api/contacts', contactRoutes);  // Contact Management
// // // // // app.use('/api/leads', leadRoutes);        // Leads Management
// // // // // app.use('/api/tasks', taskRoutes); 
// // // // // app.use('/api/meetings', meetingRoutes);     // ✅ Tasks Management
// // // // // app.use('/api/stats',stats);
// // // // // app.use('/api/calls',callRoutes);
// // // // // app.use('/api/products', productRoutes);
// // // // // // Server Listen
// // // // // const PORT = process.env.PORT || 5000;
// // // // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// // // // // server.js (Backend)
// // // // const express = require('express');
// // // // const mongoose = require('mongoose');
// // // // const axios = require('axios');
// // // // const cors = require('cors');
// // // // const { OAuth2Client } = require('google-auth-library');
// // // // require('dotenv').config();  // Load environment variables from .env file

// // // // // Import routes
// // // // const authRoutes = require('./routes/authRoutes');        // Login/Register routes
// // // // const contactRoutes = require('./routes/contacts');       // Contacts CRUD
// // // // const leadRoutes = require('./routes/leadRoutes');        // Leads Management
// // // // const taskRoutes = require('./routes/tasks');             // Tasks Management
// // // // const meetingRoutes = require('./routes/meetings');       // Meetings Management
// // // // const statsRoutes = require('./routes/stats');            // Stats Route
// // // // const callRoutes = require('./routes/callRoutes');       // Calls Management
// // // // const productRoutes = require('./routes/productRoutes'); // Product Routes

// // // // const app = express();
// // // // const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// // // // // Middleware
// // // // app.use(cors());
// // // // app.use(express.json());  // Express JSON parser for handling request bodies

// // // // // MongoDB Connection
// // // // mongoose.connect(process.env.MONGO_URI, {
// // // //   useNewUrlParser: true,
// // // //   useUnifiedTopology: true,
// // // // })
// // // //   .then(() => console.log('✅ MongoDB Connected'))
// // // //   .catch((err) => console.error('❌ MongoDB connection error:', err));

// // // // // Google OAuth login endpoint
// // // // app.post('/api/auth/google', async (req, res) => {
// // // //   const { token } = req.body;

// // // //   try {
// // // //     // Verify the token with Google
// // // //     const ticket = await client.verifyIdToken({
// // // //       idToken: token,
// // // //       audience: process.env.GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
// // // //     });
// // // //     const payload = ticket.getPayload();
// // // //     console.log('Google user data:', payload);

// // // //     // You can create a user in your database here if they don't already exist
// // // //     // For now, we'll just respond with the user data

// // // //     // Send a response with a simple JWT token for the logged-in user
// // // //     const jwtToken = generateJwtToken(payload); // You can implement JWT here

// // // //     res.json({ token: jwtToken, user: payload });
// // // //   } catch (error) {
// // // //     console.error('Google login error:', error);
// // // //     res.status(500).json({ error: 'Failed to authenticate with Google' });
// // // //   }
// // // // });

// // // // // Utility function to generate JWT token
// // // // const generateJwtToken = (user) => {
// // // //   // Here you would typically generate a JWT with user information
// // // //   // You can use a library like jsonwebtoken
// // // //   return 'your-jwt-token'; // Replace with actual JWT logic
// // // // };

// // // // // Routes
// // // // app.use('/api/auth', authRoutes);         // Auth (Login/Register)
// // // // app.use('/api/contacts', contactRoutes);  // Contact Management
// // // // app.use('/api/leads', leadRoutes);        // Leads Management
// // // // app.use('/api/tasks', taskRoutes);        // Tasks Management
// // // // app.use('/api/meetings', meetingRoutes);  // Meetings Management
// // // // app.use('/api/stats', statsRoutes);       // Stats Management
// // // // app.use('/api/calls', callRoutes);        // Calls Management
// // // // app.use('/api/products', productRoutes);  // Product Routes

// // // // // Server Listen
// // // // const PORT = process.env.PORT || 5000;
// // // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// // // // const express = require('express');
// // // // const mongoose = require('mongoose');
// // // // const cors = require('cors');
// // // // require('dotenv').config();

// // // // const app = express();

// // // // // Middleware
// // // // app.use(cors());
// // // // app.use(express.json());

// // // // // MongoDB Connection
// // // // mongoose.connect(process.env.MONGO_URI, {
// // // //   useNewUrlParser: true,
// // // //   useUnifiedTopology: true,
// // // // })
// // // // .then(() => console.log('✅ MongoDB Connected'))
// // // // .catch((err) => console.error('❌ MongoDB connection error:', err));

// // // // // Routes
// // // // app.use('/api/auth', require('./routes/authRoutes'));   // Includes Google login inside
// // // // app.use('/api/contacts', require('./routes/contacts'));
// // // // app.use('/api/leads', require('./routes/leadRoutes'));
// // // // app.use('/api/tasks', require('./routes/tasks'));
// // // // app.use('/api/meetings', require('./routes/meetings'));
// // // // app.use('/api/stats', require('./routes/stats'));
// // // // app.use('/api/calls', require('./routes/callRoutes'));
// // // // app.use('/api/products', require('./routes/productRoutes'));

// // // // const PORT = process.env.PORT || 5000;
// // // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// // // // const express = require('express');
// // // // const mongoose = require('mongoose');
// // // // const cors = require('cors');
// // // // const { OAuth2Client } = require('google-auth-library');
// // // // require('dotenv').config();

// // // // const app = express();

// // // // // Middleware
// // // // app.use(cors());
// // // // app.use(express.json());

// // // // // MongoDB Connection
// // // // mongoose.connect(process.env.MONGO_URI, {
// // // //   useNewUrlParser: true,
// // // //   useUnifiedTopology: true,
// // // // })
// // // // .then(() => console.log('✅ MongoDB Connected'))
// // // // .catch((err) => console.error('❌ MongoDB connection error:', err));

// // // // // Google OAuth2 client
// // // // const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// // // // // Google Login Route
// // // // app.post('/api/auth/google', async (req, res) => {
// // // //   const { token } = req.body;

// // // //   try {
// // // //     const ticket = await client.verifyIdToken({
// // // //       idToken: token,
// // // //       audience: process.env.GOOGLE_CLIENT_ID,
// // // //     });

// // // //     const payload = ticket.getPayload();
// // // //     console.log(payload); // You can store payload info into DB if needed

// // // //     res.status(200).json({ user: payload });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(401).json({ message: 'Invalid Token' });
// // // //   }
// // // // });

// // // // // Other Routes
// // // // app.use('/api/auth', require('./routes/authRoutes'));
// // // // app.use('/api/contacts', require('./routes/contacts'));
// // // // app.use('/api/leads', require('./routes/leadRoutes'));
// // // // app.use('/api/tasks', require('./routes/tasks'));
// // // // app.use('/api/meetings', require('./routes/meetings'));
// // // // app.use('/api/stats', require('./routes/stats'));
// // // // app.use('/api/calls', require('./routes/callRoutes'));
// // // // app.use('/api/products', require('./routes/productRoutes'));

// // // // // Start Server
// // // // const PORT = process.env.PORT || 5000;
// // // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const cors = require('cors');
// // // const { OAuth2Client } = require('google-auth-library');
// // // const dotenv = require('dotenv');

// // // // Import Routes
// // // const dealRoutes = require('./routes/dealRoutes');
// // // const authRoutes = require('./routes/authRoutes');
// // // const contactRoutes = require('./routes/contacts');
// // // const leadRoutes = require('./routes/leadRoutes');
// // // const taskRoutes = require('./routes/tasks');
// // // const meetingRoutes = require('./routes/meetings');
// // // const statsRoutes = require('./routes/stats');
// // // const callRoutes = require('./routes/callRoutes');
// // // const productRoutes = require('./routes/productRoutes');

// // // // Load environment variables
// // // dotenv.config();

// // // const app = express();

// // // // Middleware
// // // app.use(cors());
// // // app.use(express.json());

// // // // MongoDB Connection
// // // mongoose.connect(process.env.MONGO_URI, {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // })
// // // .then(() => console.log('✅ MongoDB Connected'))
// // // .catch((err) => console.error('❌ MongoDB connection error:', err));

// // // // Google OAuth2 client setup
// // // const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// // // // Google Login Route
// // // app.post('/api/auth/google', async (req, res) => {
// // //   const { token } = req.body;

// // //   try {
// // //     const ticket = await client.verifyIdToken({
// // //       idToken: token,
// // //       audience: process.env.GOOGLE_CLIENT_ID,
// // //     });

// // //     const payload = ticket.getPayload();
// // //     console.log(payload); // You can store payload info into DB if needed

// // //     res.status(200).json({ user: payload });
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(401).json({ message: 'Invalid Token' });
// // //   }
// // // });

// // // // API Routes
// // // app.use('/api/auth', authRoutes);
// // // app.use('/api/contacts', contactRoutes);
// // // app.use('/api/leads', leadRoutes);
// // // app.use('/api/tasks', taskRoutes);
// // // app.use('/api/meetings', meetingRoutes);
// // // app.use('/api/stats', statsRoutes);
// // // app.use('/api/calls', callRoutes);
// // // app.use('/api/products', productRoutes);
// // // app.use('/api/deals', dealRoutes);


// // // // Start server
// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// // // // server.js
// // // import express from 'express';
// // // import mongoose from 'mongoose';
// // // import cors from 'cors';
// // // import dotenv from 'dotenv';
// // // import { OAuth2Client } from 'google-auth-library';

// // // // Load environment variables
// // // dotenv.config();

// // // // Routes
// // // import dealRoutes from './routes/dealRoutes.js';
// // // import authRoutes from './routes/authRoutes.js';
// // // import contactRoutes from './routes/contacts.js';
// // // import leadRoutes from './routes/leadRoutes.js';
// // // import taskRoutes from './routes/tasks.js';
// // // import meetingRoutes from './routes/meetings.js';
// // // import statsRoutes from './routes/stats.js';
// // // import callRoutes from './routes/callRoutes.js';
// // // import productRoutes from './routes/productRoutes.js';
// // // import quoteRoutes from './routes/quoteRoutes.js'; // ✅ Quotes route

// // // const app = express();
// // // app.use(cors());
// // // app.use(express.json());

// // // // MongoDB connection
// // // mongoose.connect(process.env.MONGO_URI, {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // })
// // // .then(() => console.log('✅ MongoDB Connected'))
// // // .catch((err) => console.error('❌ MongoDB connection error:', err));

// // // // Google OAuth
// // // const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// // // app.post('/api/auth/google', async (req, res) => {
// // //   const { token } = req.body;

// // //   try {
// // //     const ticket = await client.verifyIdToken({
// // //       idToken: token,
// // //       audience: process.env.GOOGLE_CLIENT_ID,
// // //     });

// // //     const payload = ticket.getPayload();
// // //     res.status(200).json({ user: payload });
// // //   } catch (error) {
// // //     res.status(401).json({ message: 'Invalid Token' });
// // //   }
// // // });

// // // // Routes
// // // app.use('/api/auth', authRoutes);
// // // app.use('/api/contacts', contactRoutes);
// // // app.use('/api/leads', leadRoutes);
// // // app.use('/api/tasks', taskRoutes);
// // // app.use('/api/meetings', meetingRoutes);
// // // app.use('/api/stats', statsRoutes);
// // // app.use('/api/calls', callRoutes);
// // // app.use('/api/products', productRoutes);
// // // app.use('/api/deals', dealRoutes);
// // // app.use('/api/quotes', quoteRoutes); // ✅

// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// // import express from 'express';
// // import mongoose from 'mongoose';
// // import cors from 'cors';
// // import dotenv from 'dotenv';
// // import { OAuth2Client } from 'google-auth-library';

// // // Load environment variables
// // dotenv.config();

// // // Routes
// // import dealRoutes from './routes/dealRoutes.js';
// // import authRoutes from './routes/authRoutes.js';
// // import contactRoutes from './routes/contacts.js';
// // import leadRoutes from './routes/leadRoutes.js';
// // import taskRoutes from './routes/tasks.js';
// // import meetingRoutes from './routes/meetings.js';
// // import statsRoutes from './routes/stats.js';
// // import callRoutes from './routes/callRoutes.js';
// // import productRoutes from './routes/productRoutes.js';
// // import quoteRoutes from './routes/quoteRoutes.js'; // Quotes route
// // import projectRoutes from './routes/projects.js'; // Project route

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // MongoDB connection
// // mongoose.connect(process.env.MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// //   .then(() => console.log('✅ MongoDB Connected'))
// //   .catch((err) => console.error('❌ MongoDB connection error:', err));

// // // Google OAuth
// // const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// // app.post('/api/auth/google', async (req, res) => {
// //   const { token } = req.body;

// //   try {
// //     const ticket = await client.verifyIdToken({
// //       idToken: token,
// //       audience: process.env.GOOGLE_CLIENT_ID,
// //     });

// //     const payload = ticket.getPayload();
// //     res.status(200).json({ user: payload });
// //   } catch (error) {
// //     res.status(401).json({ message: 'Invalid Token' });
// //   }
// // });

// // // Routes
// // app.use('/api/auth', authRoutes);
// // app.use('/api/contacts', contactRoutes);
// // app.use('/api/leads', leadRoutes);
// // app.use('/api/tasks', taskRoutes);
// // app.use('/api/meetings', meetingRoutes);
// // app.use('/api/stats', statsRoutes);
// // app.use('/api/calls', callRoutes);
// // app.use('/api/products', productRoutes);
// // app.use('/api/deals', dealRoutes);
// // app.use('/api/quotes', quoteRoutes); // Quotes route
// // app.use('/api/projects', projectRoutes); // Project route

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { OAuth2Client } from 'google-auth-library';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // Load environment variables
// dotenv.config();

// // Routes
// import dealRoutes from './routes/dealRoutes.js';
// import authRoutes from './routes/authRoutes.js';
// import contactRoutes from './routes/contacts.js';
// import leadRoutes from './routes/leadRoutes.js';
// import taskRoutes from './routes/tasks.js';
// import meetingRoutes from './routes/meetings.js';
// import statsRoutes from './routes/stats.js';
// import callRoutes from './routes/callRoutes.js';
// import productRoutes from './routes/productRoutes.js';
// import quoteRoutes from './routes/quoteRoutes.js'; // Quotes route
// import projectRoutes from './routes/projects.js'; // Project route
// import documentRoutes from './routes/documentRoutes.js'; // Document route

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Serve uploaded files
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('✅ MongoDB Connected'))
//   .catch((err) => console.error('❌ MongoDB connection error:', err));

// // Google OAuth
// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// app.post('/api/auth/google', async (req, res) => {
//   const { token } = req.body;

//   try {
//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     });

//     const payload = ticket.getPayload();
//     res.status(200).json({ user: payload });
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid Token' });
//   }
// });

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/contacts', contactRoutes);
// app.use('/api/leads', leadRoutes);
// app.use('/api/tasks', taskRoutes);
// app.use('/api/meetings', meetingRoutes);
// app.use('/api/stats', statsRoutes);
// app.use('/api/calls', callRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/deals', dealRoutes);
// app.use('/api/quotes', quoteRoutes); // Quotes route
// app.use('/api/projects', projectRoutes); // Project route
// app.use('/api/documents', documentRoutes); // Document upload route
// app.use('/uploads', express.static('uploads')); // Allow file access from browser


// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { OAuth2Client } from 'google-auth-library';
import path from 'path';
import { fileURLToPath } from 'url';

// Routes
import dealRoutes from './routes/dealRoutes.js';
import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contacts.js';
import leadRoutes from './routes/leadRoutes.js';
import taskRoutes from './routes/tasks.js';
import meetingRoutes from './routes/meetings.js';
import statsRoutes from './routes/stats.js';
import callRoutes from './routes/callRoutes.js';
import productRoutes from './routes/productRoutes.js';
import quoteRoutes from './routes/quoteRoutes.js';
import projectRoutes from './routes/projects.js';
import documentRoutes from './routes/documentRoutes.js';

dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/crm', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB error:', err));

// Google OAuth
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
app.post('/api/auth/google', async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    res.status(200).json({ user: payload });
  } catch {
    res.status(401).json({ message: 'Invalid Token' });
  }
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/meetings', meetingRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/calls', callRoutes);
app.use('/api/products', productRoutes);
app.use('/api/deals', dealRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/documents', documentRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
